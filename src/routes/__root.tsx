import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import appCss from "../styles.css?url";
import "../i18n";
import { reportLovableError } from "../lib/lovable-error-reporting";
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
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]">
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">An error occurred</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please refresh or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]"
          >
            Retry
          </button>
          <a href="/" className="rounded-md border border-border bg-carbon px-4 py-2 text-sm font-medium hover:bg-muted">
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
      { name: "description", content: "Architectures d'entreprise résilientes Oracle, Microsoft & Red Hat. 100% disponibilité, 0% interruption." },
      { name: "author", content: "SUCCESS Thinkers" },
      { property: "og:title", content: "SUCCESS Thinkers — Infrastructures critiques d'entreprise" },
      { property: "og:description", content: "Conception, sécurisation et déploiement d'infrastructures critiques pour banques, télécoms et gouvernements." },
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
  return (
    <html lang="fr" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function HtmlLangSync() {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = i18n.resolvedLanguage || "fr";
    }
  }, [i18n.resolvedLanguage]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HtmlLangSync />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
