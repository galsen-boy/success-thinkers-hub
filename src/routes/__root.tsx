import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import "../i18n";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-signal">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This resource does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">An error occurred</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please refresh or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]"
          >
            Retry
          </button>
          <a
            href="/"
            className="rounded-md border border-border bg-carbon px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SUCCESS Thinkers — Design, Build and Deploy" },
      {
        name: "description",
        content:
          "Architectures d'entreprise résilientes Oracle, Microsoft & Red Hat. Continuité d'activité et haute disponibilité.",
      },
      { name: "author", content: "SUCCESS Thinkers" },
      {
        property: "og:title",
        content: "SUCCESS Thinkers — Infrastructures critiques d'entreprise",
      },
      {
        property: "og:description",
        content:
          "Conception, sécurisation et déploiement d'infrastructures critiques pour banques, télécoms et gouvernements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const themeInit = `(()=>{try{var t=localStorage.getItem('st_theme');var d=t?t==='dark':false;var c=document.documentElement.classList;d?c.add('dark'):c.remove('dark');}catch(e){}})();`;
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <HeadContent />
        {/* Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SUCCESS Thinkers",
              url: "https://www.successthinkers.org",
              email: "contact@successthinkers.org",
              telephone: "+221774430606",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Zone Aéroport, Yoff Dakar, Sénégal",
                addressLocality: "Dakar",
                addressCountry: "SN",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("st_lang");
      if (stored === "fr" || stored === "en") {
        if (i18n.language !== stored) {
          const timer = setTimeout(() => {
            i18n.changeLanguage(stored);
          }, 300);
          return () => clearTimeout(timer);
        }
      } else {
        const navLang = navigator.language.substring(0, 2);
        const resolved = navLang === "en" ? "en" : "fr";
        if (i18n.language !== resolved) {
          const timer = setTimeout(() => {
            i18n.changeLanguage(resolved);
          }, 300);
          return () => clearTimeout(timer);
        }
        try {
          window.localStorage.setItem("st_lang", resolved);
        } catch (e) {
          // ignore
        }
      }
    }
  }, [i18n, router.state.isLoading]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = i18n.language || "fr";
    }
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full flex-1 flex flex-col"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
