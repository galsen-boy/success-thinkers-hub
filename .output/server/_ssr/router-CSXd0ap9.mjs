import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as initReactI18next, t as useTranslation } from "../_libs/react-i18next.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { E as Facebook, f as Phone, g as Menu, m as Moon, n as X, o as Sun, t as Youtube, u as Send, v as MapPin, x as Linkedin, y as Mail } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as instance } from "../_libs/i18next.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CSXd0ap9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DRbnfQs5.css";
instance.use(initReactI18next).init({
	resources: {
		fr: { common: {
			nav: {
				"home": "Accueil",
				"techniques": "Techniques",
				"services": "Services",
				"projects": "Projets",
				"partners": "Partenaires",
				"contact": "Contact",
				"audit": "Diagnostic gratuit"
			},
			language: {
				"switch": "Langue",
				"en": "English",
				"fr": "Français"
			},
			footer: {
				"tagline": "SUCCESS Thinkers accompagne les banques, administrations, opérateurs télécoms, fintechs et grandes entreprises grâce à une expertise construite autour des technologies Oracle, Microsoft et Red Hat.",
				"navigation": "Navigation",
				"contact": "Contact",
				"address": "Zone Aéroport, Yoff Dakar, Sénégal",
				"rights": "Tous droits réservés.",
				"ceo": "Pape DIENG — Directeur Général & Fondateur · Oracle IT Consultant Expert",
				"slogan": "Design, build and deploy"
			},
			newsletter: {
				"title": "Restez informé de nos avancées technologiques.",
				"subtitle": "Recevez nos analyses techniques et actualités sur la continuité d'activité.",
				"emailPlaceholder": "Votre adresse email professionnelle",
				"btn": "Recevoir",
				"toastOpening": "Ouverture de votre client de messagerie pour confirmation..."
			},
			social: { "title": "Réseaux sociaux" },
			home: {
				"meta": {
					"title": "SUCCESS Thinkers — Haute disponibilité & Continuité d'activité",
					"description": "SUCCESS Thinkers est une entreprise spécialisée dans les technologies Oracle, Microsoft, Red Hat ainsi que dans le développement de logiciels web et d'applications mobiles multiplateformes."
				},
				"hero": {
					"badge": "Infrastructure critique",
					"title1": "HAUTE DISPONIBILITÉ.",
					"title2": "ARCHITECTURES CONÇUES POUR LA CONTINUITÉ D’ACTIVITÉ.",
					"subtitle": "SUCCESS Thinkers est une entreprise spécialisée dans les technologies Oracle, Microsoft, Red Hat ainsi que dans le développement de logiciels web et d'applications mobiles multiplateformes.\n\nNous accompagnons les organisations dans la mise en place de solutions de prise de décision, de défense des systèmes d'information, de stockage haute disponibilité, d'intelligence artificielle, de machine learning et de surveillance des infrastructures critiques.\n\nNous investissons également dans la recherche et le développement de solutions socio-professionnelles afin de contribuer au développement socio-économique de l'Afrique.",
					"cta1": "Demander un diagnostic initial",
					"cta2": "Parler à un ingénieur"
				},
				"stats": [
					{
						"value": "15+",
						"label": "Années d'expertise Oracle"
					},
					{
						"value": "50+",
						"label": "Projets délivrés"
					},
					{
						"value": "06",
						"label": "Secteurs critiques"
					},
					{
						"value": "24/7",
						"label": "Supervision proactive"
					}
				],
				"tabs": {
					"eyebrow": "Politique & Compétences",
					"title": "Une expertise structurée, prouvée, opérationnelle.",
					"tech": {
						"title": "Technologies",
						"items": [
							"Oracle Database, RAC, ASM, Exadata, ODA",
							"Microsoft SQL Server, Azure, Power BI",
							"Red Hat Enterprise Linux & virtualisation",
							"Cloud OCI et Azure (hybride / multi-cloud)",
							"Développement applicatif multi-plateforme"
						]
					},
					"partners": {
						"title": "Secteurs d'activité",
						"items": [
							"Banques & Services Financiers",
							"Télécommunications",
							"Gouvernement & Secteur Public",
							"Mobile Money",
							"Fintech",
							"Grandes entreprises"
						]
					},
					"sec": {
						"title": "Sécurité & Networking",
						"items": [
							"Cybersécurité offensive et défensive",
							"Sécurisation des infrastructures critiques",
							"Contrôle d'accès AD / LDAP / SSO",
							"Audit, durcissement et conformité",
							"Architecture réseau, DMZ, segmentation"
						]
					},
					"company": {
						"title": "Entreprise SUCCESS Thinkers",
						"items": [
							"Conformité ITIL & ISO",
							"Exécution rigoureuse dans les délais",
							"Équipes d'ingénieurs experts certifiés",
							"Méthodologie Agile pilotée par la valeur",
							"Engagement de résultat opérationnel"
						]
					}
				},
				"personas": {
					"eyebrow": "Notre approche",
					"title": "Deux langages, une même rigueur d'exécution.",
					"subtitle": "Nous parlons à la fois la langue du business et celle de l'ingénierie. Chaque livrable adresse simultanément la valeur économique et la robustesse technique.",
					"deciders": {
						"title": "Pour les Décideurs",
						"audience": "(CEO / CFO)",
						"items": [
							"Réduction structurelle des coûts d'exploitation IT",
							"Tableaux de bord Oracle Analytics & Power BI temps réel",
							"Conformité réglementaire et rapports décisionnels",
							"ROI mesurable dès le premier exercice"
						]
					},
					"tech": {
						"title": "Pour les Directions Techniques",
						"audience": "(DSI / SecOps)",
						"items": [
							"Haute disponibilité Oracle RAC / ASM",
							"Sécurité SGD et durcissement infrastructure",
							"Architecture multi-site avec failover automatique",
							"Supervision proactive via Enterprise Manager Cloud Control"
						]
					}
				},
				"ctaBand": {
					"title": "Sécurisez vos opérations critiques.",
					"subtitle": "Un diagnostic initial conduit par nos ingénieurs certifiés. Diagnostic, plan d'action et roadmap.",
					"btn": "Planifier un diagnostic"
				}
			},
			techniques: {
				"meta": {
					"title": "Expertise Technique — SUCCESS Thinkers",
					"description": "Notre expertise technique autour d'Oracle, Microsoft, Red Hat et DevOps."
				},
				"hero": {
					"eyebrow": "Techniques",
					"title1": "Expertise technologique.",
					"title2": "Infrastructures et DevOps.",
					"subtitle": "Nous concevons et administrons des plateformes critiques basées sur des solutions d'entreprise de premier plan."
				},
				"oracle": {
					"title": "Oracle Technology Stack",
					"desc": "Conception, déploiement et administration de plateformes Oracle critiques pour la haute disponibilité, le stockage, l’analytique, l’intégration de données et la continuité d’activité."
				},
				"microsoft": {
					"title": "Microsoft Enterprise Ecosystem",
					"desc": "Gestion des données, décisionnel, identité et infrastructures Microsoft pour les environnements d’entreprise."
				},
				"redhat": {
					"title": "Red Hat Infrastructure",
					"desc": "Infrastructure Linux, virtualisation et environnements critiques pour les déploiements fiables et évolutifs."
				},
				"devops": {
					"title": "DevOps & Automatisation",
					"desc": "Industrialisation du développement logiciel, amélioration des cycles de livraison et automatisation des déploiements."
				}
			},
			services: {
				"meta": {
					"title": "Services & Compétences — SUCCESS Thinkers",
					"description": "Management, gouvernance IT, sécurité et R&D. Stack Oracle, Microsoft et plateformes applicatives."
				},
				"hero": {
					"eyebrow": "Services",
					"title1": "Nos domaines d'expertise.",
					"title2": "De la gouvernance au déploiement.",
					"subtitle": "Une ingénierie complète couvrant le management, la gouvernance IT, la sécurité et la R&D."
				},
				"quadrants": [
					{
						"title": "Management des entreprises",
						"items": [
							"Pilotage de la politique des entreprises",
							"Finance et comptabilité des organisations",
							"Gestion de projets",
							"Conduite du changement",
							"Gestion et surveillance des SI avec ITIL",
							"Respect des normes ISO",
							"Gestion des relations clients",
							"Supply Chain et management",
							"Prise de décision des entreprises",
							"Unification des modules de gestion — ERP Oracle",
							"Gestion électronique de documents",
							"Maîtrise des processus d’entreprises"
						]
					},
					{
						"title": "Gouvernance des systèmes informatiques",
						"items": [
							"Définir les référentiels d’entreprises",
							"Gestion des bases de données",
							"Exploitation des données des entreprises",
							"Intégration de données B2B ou B2C",
							"Fédération de services API et échange de données",
							"Migration de données des systèmes informatiques",
							"Connexion des applications aux infrastructures",
							"Gestion et maintenance de version des applications",
							"Design et conception de modèles de business",
							"Solution progiciel d’entreprise Oracle ERP",
							"Surveillance et correction des incidents SI",
							"Virtualisation et bare metal de serveurs",
							"Gestion et monitoring des machines virtuelles"
						]
					},
					{
						"title": "Sécurité des systèmes",
						"items": [
							"Défense des systèmes informatiques",
							"Règles de gestion des ressources IT",
							"Protection de la vie privée des employés",
							"Configuration de certificats de sécurité",
							"Contrôle d’accès aux applications",
							"Sécurisation du trafic internet-intranet",
							"Intégration des systèmes AD et SGD",
							"Configuration du Single Sign-On",
							"Dimensionnement de la bande passante",
							"Configuration des firewalls de sécurité",
							"Haute disponibilité des authentifications",
							"Définition de zones démilitarisées DMZ"
						]
					},
					{
						"title": "Recherche et développement",
						"items": [
							"Innovation de projets socio-professionnels",
							"Conception de plateformes et de sites web",
							"Maîtrise des méthodes de gestion de projets",
							"Utilisation des technologies web et frameworks",
							"Maîtrise des langages de développement logiciel",
							"Conception et modélisation d’applications",
							"Implémentation de solutions Big Data NoSQL",
							"Sécurité des applications déployées",
							"Accompagnement de startups",
							"Conception d’applications mobiles multiplateformes",
							"Évolution de versions des applications d’entreprises",
							"Optimisation et performance des applications"
						]
					}
				],
				"methodology": {
					"eyebrow": "Gouvernance & Méthodologie",
					"title": "Notre approche méthodologique",
					"subtitle": "Un cycle d'ingénierie rigoureux aligné sur les meilleures pratiques ITIL et les normes ISO.",
					"steps": [
						{
							"name": "Assessment",
							"desc": "Évaluation initiale des infrastructures, audits de sécurité et analyse des écarts."
						},
						{
							"name": "Architecture",
							"desc": "Conception détaillée des solutions haute disponibilité et plans de continuité d'activité."
						},
						{
							"name": "Implementation",
							"desc": "Déploiement, migration de données et intégration système selon des protocoles stricts."
						},
						{
							"name": "Operations",
							"desc": "Supervision proactive 24/7, gestion des incidents et administration récurrente."
						},
						{
							"name": "Continuous Improvement",
							"desc": "Optimisation des performances, durcissement continu de la sécurité et mises à jour."
						}
					],
					"note": "Note : Nos diagnostics et architectures s'appuient sur les référentiels méthodologiques ITIL et ISO pour garantir la rigueur et la conformité de vos systèmes sans se prévaloir d'une certification officielle de SUCCESS Thinkers."
				},
				"stack": {
					"eyebrow": "Stack technique",
					"title": "Trois piliers technologiques maîtrisés.",
					"oracle": "Oracle (Cloud & Local)",
					"microsoft": "Microsoft (Azure & Local)",
					"platform": "Plateforme & applications"
				},
				"sgd": {
					"eyebrow": "Architecture interactive",
					"title": "Oracle SGD — flux d'autorisation et de fédération",
					"devices": "Devices",
					"devicesSub": "Postes & mobiles",
					"ad": "Active Directory / LDAP",
					"adSub": "Authentification",
					"gw1": "Passerelle SGD 1",
					"gw2": "Passerelle SGD 2",
					"cluster": "Cluster Array SGD",
					"server1": "Serveur 1",
					"server2": "Serveur 2",
					"erp": "ERP",
					"erpSub": "Production",
					"bi": "BI",
					"biSub": "Décisionnel",
					"dmz": "Web zone DMZ",
					"dmzSub": "Exposition"
				},
				"ged": {
					"title": "GED Webcenter Content — workflow documentaire",
					"auth": "AD Authentication",
					"authSub": "SSO",
					"adf": "Validation ADF",
					"adfSub": "Workflow",
					"inst1": "GED Weblogic — Inst. 1",
					"inst2": "GED Weblogic — Inst. 2",
					"backup": "DB Backup",
					"backupSub": "Archivage sécurisé"
				}
			},
			projects: {
				"meta": {
					"title": "Projets & Innovations — SUCCESS Thinkers",
					"description": "Success Accounting, Success Workers, Success Printing : nos produits propriétaires."
				},
				"hero": {
					"eyebrow": "Innovation pour le développement socio-économique de l’Afrique",
					"title1": "Lutte contre le chômage des jeunes",
					"title2": "par des solutions structurantes.",
					"subtitle": "Des plateformes d'ingénierie et de services conçues pour relever les défis de l'Afrique."
				},
				"accounting": {
					"label": "Produit · Finance",
					"name": "Success Accounting",
					"slogan": "Solution de gestion financière et de production des états comptables destinée aux entreprises et institutions.",
					"features": [
						"Optimisation financière",
						"Pilotage de la performance",
						"Production des états financiers",
						"Processus comptables"
					],
					"dashboard": "Tableau de bord financier",
					"period": "Q2 — Exercice en cours",
					"kpis": [
						{
							"l": "Transactions",
							"v": "32 900",
							"d": "+12,4%"
						},
						{
							"l": "Solde consolidé",
							"v": "17,9 M$",
							"d": "+8,1%"
						},
						{
							"l": "Écarts détectés",
							"v": "15",
							"d": "-67%"
						}
					],
					"series": {
						"tx": "Transactions",
						"balance": "Solde (k$)",
						"gap": "Écarts"
					}
				},
				"workers": {
					"label": "Produit · Recrutement & Chantiers",
					"name": "Success Workers",
					"slogan": "Plateforme de recrutement et d’optimisation de la gestion des chantiers et des ressources humaines.",
					"features": [
						"Lutte contre le chômage des jeunes en Afrique",
						"Employabilité",
						"Gestion des effectifs",
						"Suivi des chantiers",
						"Transformation digitale"
					],
					"mapTitle": "Carte opérationnelle — Sénégal",
					"summary": "{{sites}} chantiers · {{workers}} ouvriers actifs",
					"statusActive": "Actif",
					"statusHiring": "Recrutement",
					"workersLabel": "ouvriers",
					"siteWorkers": "Ouvriers",
					"siteStatus": "Statut",
					"siteProductivity": "Productivité"
				},
				"printing": {
					"label": "Produit · Sécurité",
					"name": "Success Printing",
					"slogan": "Solution de digitalisation des systèmes d’émargement, de géolocalisation et de suivi des agents.",
					"features": [
						"Sécurité",
						"Traçabilité",
						"Gestion opérationnelle",
						"Géolocalisation",
						"Suivi des agents"
					],
					"console": "Console superviseur",
					"agents": "5 agents · zone Dakar",
					"trigger": "Déclencher alerte",
					"stop": "Arrêter l'alerte",
					"statusActive": "Actif",
					"statusPatrol": "En patrouille",
					"statusIncident": "Incident",
					"alertMsg": "Alerte déclenchée — équipes d'intervention notifiées."
				}
			},
			partners: {
				"meta": {
					"title": "Écosystème & Organisation — SUCCESS Thinkers",
					"description": "Notre écosystème technologique et notre structure organisationnelle."
				},
				"hero": {
					"eyebrow": "Écosystème",
					"title1": "Notre écosystème technologique",
					"title2": "et matériel maîtrisé."
				},
				"org": {
					"title": "Organigramme du Groupe SUCCESS Thinkers",
					"subtitle": "Cliquez sur un département pour explorer sa composition.",
					"ceoRole": "Directeur Général & Fondateur",
					"nodes": [
						{
							"name": "Secrétariat & Accueil",
							"role": "5 personnel"
						},
						{
							"name": "Conseil Exécutif",
							"role": "6 membres"
						},
						{
							"name": "Direction Technique",
							"role": "50+ ingénieurs IT"
						},
						{
							"name": "Direction RH & Gestion",
							"role": "10+ collaborateurs"
						},
						{
							"name": "Direction Commerciale & Marketing",
							"role": "5 collaborateurs"
						},
						{
							"name": "Direction Finance & Comptabilité (DFC)",
							"role": "7 collaborateurs"
						}
					]
				},
				"appliances": {
					"eyebrow": "Catalogue Matériel",
					"title": "Écosystème de serveurs & stockage",
					"subtitle": "Infrastructures et solutions matérielles maîtrisées par nos équipes.",
					"items": [
						{
							"name": "Exadata Database Machine",
							"tagline": "Mémoire flash nanoseconde",
							"desc": "Performance extrême pour bases Oracle critiques. Idéale pour datawarehouses et OLTP intensifs."
						},
						{
							"name": "Oracle Database Appliance ODA",
							"tagline": "Multi-nœud abordable",
							"desc": "Serveur bancaire d'infrastructure pour PME/ETI. Architecture multi-nœud à coût maîtrisé."
						},
						{
							"name": "Oracle MiniCluster",
							"tagline": "Sécurité PCI-DSS / STIG",
							"desc": "Conçu pour paiements et Mobile Money. Conformité réglementaire native au niveau de silicium."
						}
					],
					"hwPartnersTitle": "Écosystème matériel complémentaire",
					"hwPartnersSub": "Solutions serveurs et infrastructures matérielles maîtrisées par nos équipes.",
					"hwEcosystemTitle": "Écosystème technologique"
				}
			},
			contact: {
				"meta": {
					"title": "Contact & Diagnostic — SUCCESS Thinkers",
					"description": "Demandez un diagnostic initial ou parlez à un ingénieur pour vos infrastructures critiques."
				},
				"hero": {
					"eyebrow": "Contact",
					"title1": "Demander un",
					"title2": "diagnostic initial.",
					"subtitle": "Parlez à un ingénieur pour sécuriser vos opérations critiques. Réponse sous 24h ouvrées."
				},
				"form": {
					"title": "Formulaire de contact",
					"firstName": "Prénom",
					"lastName": "Nom",
					"email": "Email professionnel",
					"company": "Entreprise",
					"sector": "Secteur d'activité",
					"sectorPlaceholder": "— Sélectionner —",
					"infra": "Type d'infrastructure",
					"infraPlaceholder": "Ex : Oracle RAC, datacenter on-prem, hybrid OCI…",
					"message": "Message",
					"messagePlaceholder": "Décrivez votre besoin, vos contraintes et vos délais.",
					"submit": "Parler à un ingénieur",
					"sentTitle": "Demande préparée",
					"sentBody": "Votre demande a été générée. Veuillez cliquer sur le bouton ci-dessous pour l'envoyer via votre client de messagerie local.",
					"again": "Recommencer la saisie",
					"sectors": [
						"Banques & Services Financiers",
						"Télécommunications",
						"Gouvernement & Secteur Public",
						"Mobile Money",
						"Fintech",
						"Grandes entreprises",
						"Autres"
					],
					"errors": {
						"firstName": "Prénom requis",
						"lastName": "Nom requis",
						"email": "Email professionnel invalide",
						"company": "Entreprise requise",
						"sector": "Secteur d'activité requis",
						"infra": "Type d'infrastructure requis",
						"message": "Message trop court (min. 10 caractères)"
					}
				},
				"info": {
					"email": "Email",
					"phone": "Téléphone & WhatsApp",
					"address": "Siège général",
					"addressValue": "Zone Aéroport, Yoff Dakar, Sénégal",
					"hours": "Horaires",
					"hoursValue": "Lun — Ven · 08h30 – 18h00 (GMT)",
					"office": "Bureau principal — Dakar",
					"openMap": "Ouvrir la carte",
					"whatsappLabel": "Parler à un ingénieur"
				}
			}
		} },
		en: { common: {
			nav: {
				"home": "Home",
				"techniques": "Techniques",
				"services": "Services",
				"projects": "Projects",
				"partners": "Partners",
				"contact": "Contact",
				"audit": "Free Diagnostic"
			},
			language: {
				"switch": "Language",
				"en": "English",
				"fr": "Français"
			},
			footer: {
				"tagline": "SUCCESS Thinkers supports banks, government institutions, telecom operators, fintechs and large enterprises through expertise built around Oracle, Microsoft and Red Hat technologies.",
				"navigation": "Navigation",
				"contact": "Contact",
				"address": "Airport Zone, Yoff Dakar, Senegal",
				"rights": "All rights reserved.",
				"ceo": "Pape DIENG — CEO & Founder · Oracle IT Consultant Expert",
				"slogan": "Design, build and deploy"
			},
			newsletter: {
				"title": "Stay informed about our technological advances.",
				"subtitle": "Receive our technical insights and business continuity news.",
				"emailPlaceholder": "Your professional email address",
				"btn": "Receive",
				"toastOpening": "Opening your email client for subscription confirmation..."
			},
			social: { "title": "Social" },
			home: {
				"meta": {
					"title": "SUCCESS Thinkers — High Availability & Business Continuity",
					"description": "SUCCESS Thinkers operates around Oracle, Microsoft and Red Hat technologies as well as enterprise web and multi-platform software engineering."
				},
				"hero": {
					"badge": "Mission-critical infrastructure",
					"title1": "HIGH AVAILABILITY.",
					"title2": "ARCHITECTURES DESIGNED FOR BUSINESS CONTINUITY.",
					"subtitle": "SUCCESS Thinkers operates around Oracle, Microsoft and Red Hat technologies as well as enterprise web and multi-platform software engineering.\n\nWe help organizations implement decision-making systems, cyber defense solutions, high-availability storage architectures, artificial intelligence, machine learning and critical infrastructure monitoring.\n\nWe also invest in socio-professional innovations that contribute to Africa's socio-economic development.",
					"cta1": "Request an Initial Diagnostic",
					"cta2": "Speak with an Engineer"
				},
				"stats": [
					{
						"value": "15+",
						"label": "Years of Oracle expertise"
					},
					{
						"value": "50+",
						"label": "Projects delivered"
					},
					{
						"value": "06",
						"label": "Critical sectors"
					},
					{
						"value": "24/7",
						"label": "Proactive monitoring"
					}
				],
				"tabs": {
					"eyebrow": "Policy & Capabilities",
					"title": "Structured, proven, operational expertise.",
					"tech": {
						"title": "Technologies",
						"items": [
							"Oracle Database, RAC, ASM, Exadata, ODA",
							"Microsoft SQL Server, Azure, Power BI",
							"Red Hat Enterprise Linux & virtualization",
							"OCI and Azure Cloud (hybrid / multi-cloud)",
							"Multi-platform application development"
						]
					},
					"partners": {
						"title": "Sectors",
						"items": [
							"Banking & Financial Services",
							"Telecommunications",
							"Government & Public Sector",
							"Mobile Money",
							"Fintech",
							"Large Enterprises"
						]
					},
					"sec": {
						"title": "Security & Networking",
						"items": [
							"Offensive and defensive cybersecurity",
							"Securing critical infrastructure",
							"Access control AD / LDAP / SSO",
							"Audit, hardening and compliance",
							"Network architecture, DMZ, segmentation"
						]
					},
					"company": {
						"title": "SUCCESS Thinkers Company",
						"items": [
							"ITIL & ISO compliance",
							"Rigorous on-time delivery",
							"Teams of certified expert engineers",
							"Value-driven Agile methodology",
							"Operational results commitment"
						]
					}
				},
				"personas": {
					"eyebrow": "Our approach",
					"title": "Two languages, one execution standard.",
					"subtitle": "We speak both business and engineering. Every deliverable addresses economic value and technical robustness at the same time.",
					"deciders": {
						"title": "For Decision-Makers",
						"audience": "(CEO / CFO)",
						"items": [
							"Structural reduction of IT operating costs",
							"Real-time Oracle Analytics & Power BI dashboards",
							"Regulatory compliance and reporting dashboards",
							"ROI measurable from the first fiscal year"
						]
					},
					"tech": {
						"title": "For Technical Leadership",
						"audience": "(CIO / SecOps)",
						"items": [
							"Oracle RAC / ASM high availability",
							"SGD security and infrastructure hardening",
							"Multi-site architecture with automatic failover",
							"Proactive monitoring via Enterprise Manager Cloud Control"
						]
					}
				},
				"ctaBand": {
					"title": "Secure your critical operations.",
					"subtitle": "An initial diagnostic run by our certified engineers. Diagnostic, action plan and roadmap.",
					"btn": "Schedule a Diagnostic"
				}
			},
			techniques: {
				"meta": {
					"title": "Technical Expertise — SUCCESS Thinkers",
					"description": "Our technical expertise around Oracle, Microsoft, Red Hat, and DevOps."
				},
				"hero": {
					"eyebrow": "Techniques",
					"title1": "Technological expertise.",
					"title2": "Infrastructure and DevOps.",
					"subtitle": "We design and manage mission-critical platforms based on industry-leading enterprise software."
				},
				"oracle": {
					"title": "Oracle Technology Stack",
					"desc": "Design, deployment and administration of critical Oracle platforms for high availability, storage, analytics, data integration and business continuity."
				},
				"microsoft": {
					"title": "Microsoft Enterprise Ecosystem",
					"desc": "Data management, business intelligence, identity and Microsoft infrastructure for enterprise environments."
				},
				"redhat": {
					"title": "Red Hat Infrastructure",
					"desc": "Linux infrastructure, virtualization and critical environments for reliable and scalable deployments."
				},
				"devops": {
					"title": "DevOps & Automation",
					"desc": "Software delivery industrialization, release cycle improvement and deployment automation."
				}
			},
			services: {
				"meta": {
					"title": "Services & Capabilities — SUCCESS Thinkers",
					"description": "Management, IT governance, security and R&D. Oracle, Microsoft and application platform stack."
				},
				"hero": {
					"eyebrow": "Services",
					"title1": "Our areas of expertise.",
					"title2": "From governance to deployment.",
					"subtitle": "End-to-end engineering covering management, IT governance, security and R&D."
				},
				"quadrants": [
					{
						"title": "Enterprise management",
						"items": [
							"Enterprise policy management",
							"Finance and organizational accounting",
							"Project management",
							"Change management",
							"IT systems monitoring with ITIL",
							"ISO standards compliance",
							"Customer relationship management",
							"Supply chain management",
							"Enterprise decision-making",
							"Business module unification with Oracle ERP",
							"Electronic document management",
							"Business process control"
						]
					},
					{
						"title": "IT systems governance",
						"items": [
							"Enterprise repository definition",
							"Database management",
							"Enterprise data operations",
							"B2B and B2C data integration",
							"API federation and data exchange",
							"IT systems data migration",
							"Application-to-infrastructure connection",
							"Application version management and maintenance",
							"Business model design",
							"Oracle ERP enterprise software solutions",
							"IT incident monitoring and correction",
							"Server virtualization and bare metal deployment",
							"Virtual machine management and monitoring"
						]
					},
					{
						"title": "Systems security",
						"items": [
							"IT systems defense",
							"IT resource governance rules",
							"Employee data privacy protection",
							"Security certificate configuration",
							"Application access control",
							"Internet-intranet traffic security",
							"AD and SGD systems integration",
							"Single Sign-On configuration",
							"Bandwidth sizing",
							"Security firewall configuration",
							"High-availability authentication",
							"DMZ architecture definition"
						]
					},
					{
						"title": "Research and development",
						"items": [
							"Socio-professional project innovation",
							"Web platform and website design",
							"Project management methodologies",
							"Web technologies and frameworks",
							"Software development languages",
							"Application design and modeling",
							"Big Data NoSQL solution implementation",
							"Security of deployed applications",
							"Startup support",
							"Multi-platform mobile application development",
							"Enterprise application version evolution",
							"Application optimization and performance"
						]
					}
				],
				"methodology": {
					"eyebrow": "Governance & Methodology",
					"title": "Our Methodological Approach",
					"subtitle": "A rigorous engineering cycle aligned with ITIL best practices and ISO standards.",
					"steps": [
						{
							"name": "Assessment",
							"desc": "Initial infrastructure assessment, security audits and gap analysis."
						},
						{
							"name": "Architecture",
							"desc": "Detailed design of high-availability solutions and business continuity plans."
						},
						{
							"name": "Implementation",
							"desc": "Deployment, data migration and system integration following strict protocols."
						},
						{
							"name": "Operations",
							"desc": "Proactive 24/7 monitoring, incident management and recurring administration."
						},
						{
							"name": "Continuous Improvement",
							"desc": "Performance optimization, continuous security hardening and system updates."
						}
					],
					"note": "Note: Our diagnostics and architectures are based on ITIL and ISO methodological frameworks to ensure quality and compliance without claiming official certification for SUCCESS Thinkers."
				},
				"stack": {
					"eyebrow": "Technical stack",
					"title": "Three mastered technology pillars.",
					"oracle": "Oracle (Cloud & On-Prem)",
					"microsoft": "Microsoft (Azure & On-Prem)",
					"platform": "Platform & applications"
				},
				"sgd": {
					"eyebrow": "Interactive architecture",
					"title": "Oracle SGD — authorization and federation flow",
					"devices": "Devices",
					"devicesSub": "Workstations & mobile",
					"ad": "Active Directory / LDAP",
					"adSub": "Authentication",
					"gw1": "SGD Gateway 1",
					"gw2": "SGD Gateway 2",
					"cluster": "SGD Cluster Array",
					"server1": "Server 1",
					"server2": "Server 2",
					"erp": "ERP",
					"erpSub": "Production",
					"bi": "BI",
					"biSub": "Analytics",
					"dmz": "Web DMZ zone",
					"dmzSub": "Exposure"
				},
				"ged": {
					"title": "GED Webcenter Content — document workflow",
					"auth": "AD Authentication",
					"authSub": "SSO",
					"adf": "ADF Validation",
					"adfSub": "Workflow",
					"inst1": "GED Weblogic — Inst. 1",
					"inst2": "GED Weblogic — Inst. 2",
					"backup": "DB Backup",
					"backupSub": "Secure archiving"
				}
			},
			projects: {
				"meta": {
					"title": "Projects & Innovations — SUCCESS Thinkers",
					"description": "Success Accounting, Success Workers, Success Printing: our proprietary products."
				},
				"hero": {
					"eyebrow": "Innovation for Africa's socio-economic development",
					"title1": "Fighting youth unemployment",
					"title2": "through structured software solutions.",
					"subtitle": "Proprietary engineering and service platforms built to solve Africa's challenges."
				},
				"accounting": {
					"label": "Product · Finance",
					"name": "Success Accounting",
					"slogan": "A financial management and accounting reporting solution for companies and institutions.",
					"features": [
						"Financial optimization",
						"Performance management",
						"Financial statement production",
						"Accounting processes"
					],
					"dashboard": "Financial dashboard",
					"period": "Q2 — Current fiscal year",
					"kpis": [
						{
							"l": "Transactions",
							"v": "32,900",
							"d": "+12.4%"
						},
						{
							"l": "Consolidated balance",
							"v": "$17.9M",
							"d": "+8.1%"
						},
						{
							"l": "Discrepancies",
							"v": "15",
							"d": "-67%"
						}
					],
					"series": {
						"tx": "Transactions",
						"balance": "Balance ($k)",
						"gap": "Discrepancies"
					}
				},
				"workers": {
					"label": "Product · Recruitment & Sites",
					"name": "Success Workers",
					"slogan": "A platform for workforce recruitment and optimization of construction site and human resource management.",
					"features": [
						"Fighting youth unemployment in Africa",
						"Employability",
						"Workforce management",
						"Construction site monitoring",
						"Digital transformation"
					],
					"mapTitle": "Operational map — Senegal",
					"summary": "{{sites}} sites · {{workers}} active workers",
					"statusActive": "Active",
					"statusHiring": "Hiring",
					"workersLabel": "workers",
					"siteWorkers": "Workers",
					"siteStatus": "Status",
					"siteProductivity": "Productivity"
				},
				"printing": {
					"label": "Product · Security",
					"name": "Success Printing",
					"slogan": "A solution for digital attendance systems, geolocation and agent monitoring.",
					"features": [
						"Security",
						"Traceability",
						"Operational management",
						"Geolocation",
						"Agent monitoring"
					],
					"console": "Supervisor console",
					"agents": "5 guards · Dakar zone",
					"trigger": "Trigger alert",
					"stop": "Stop alert",
					"statusActive": "Active",
					"statusPatrol": "On patrol",
					"statusIncident": "Incident",
					"alertMsg": "Alert triggered — response teams notified."
				}
			},
			partners: {
				"meta": {
					"title": "Ecosystem & Organization — SUCCESS Thinkers",
					"description": "Our technological ecosystem and organizational structure."
				},
				"hero": {
					"eyebrow": "Ecosystem",
					"title1": "Our technological ecosystem",
					"title2": "and mastered hardware."
				},
				"org": {
					"title": "SUCCESS Thinkers Group organization chart",
					"subtitle": "Click on a department to explore its composition.",
					"ceoRole": "CEO & Founder",
					"nodes": [
						{
							"name": "Secretariat & Reception",
							"role": "5 staff"
						},
						{
							"name": "Executive Council",
							"role": "6 members"
						},
						{
							"name": "Technical Division",
							"role": "50+ IT engineers"
						},
						{
							"name": "HR & Operations",
							"role": "10+ staff"
						},
						{
							"name": "Sales & Marketing",
							"role": "5 staff"
						},
						{
							"name": "Finance & Accounting (DFC)",
							"role": "7 staff"
						}
					]
				},
				"appliances": {
					"eyebrow": "Hardware catalog",
					"title": "Ecosystem of servers & storage",
					"subtitle": "Infrastructures and hardware solutions mastered by our teams.",
					"items": [
						{
							"name": "Exadata Database Machine",
							"tagline": "Nanosecond flash memory",
							"desc": "Extreme performance for mission-critical Oracle databases. Ideal for data warehouses and intensive OLTP."
						},
						{
							"name": "Oracle Database Appliance ODA",
							"tagline": "Affordable multi-node",
							"desc": "Enterprise infrastructure server. Multi-node architecture at controlled cost."
						},
						{
							"name": "Oracle MiniCluster",
							"tagline": "PCI-DSS / STIG security",
							"desc": "Designed for payments and Mobile Money. Regulatory compliance native at the silicon level."
						}
					],
					"hwPartnersTitle": "Complementary hardware ecosystem",
					"hwPartnersSub": "Server and infrastructure solutions deployed and maintained by our teams."
				}
			},
			contact: {
				"meta": {
					"title": "Contact & Diagnostic — SUCCESS Thinkers",
					"description": "Speak with an engineer or request an initial diagnostic for your critical infrastructures."
				},
				"hero": {
					"eyebrow": "Contact",
					"title1": "Request an",
					"title2": "initial diagnostic.",
					"subtitle": "Speak with an engineer to secure your critical operations. Response within 24 business hours."
				},
				"form": {
					"title": "Contact form",
					"firstName": "First name",
					"lastName": "Last name",
					"email": "Professional email",
					"company": "Company",
					"sector": "Industry",
					"sectorPlaceholder": "— Select —",
					"infra": "Infrastructure type",
					"infraPlaceholder": "e.g. Oracle RAC, on-prem datacenter, hybrid OCI…",
					"message": "Message",
					"messagePlaceholder": "Describe your needs, constraints and timeline.",
					"submit": "Speak with an engineer",
					"sentTitle": "Request Prepared",
					"sentBody": "Your request has been generated. Please click the button below to send it via your local mail client.",
					"again": "Start over",
					"sectors": [
						"Banking & Financial Services",
						"Telecommunications",
						"Government & Public Sector",
						"Mobile Money",
						"Fintech",
						"Large Enterprises",
						"Other"
					],
					"errors": {
						"firstName": "First name required",
						"lastName": "Last name required",
						"email": "Invalid professional email",
						"company": "Company required",
						"sector": "Industry required",
						"infra": "Infrastructure type required",
						"message": "Message too short (min. 10 characters)"
					}
				},
				"info": {
					"email": "Email",
					"phone": "Phone & WhatsApp",
					"address": "Headquarters",
					"addressValue": "Airport Zone, Yoff Dakar, Senegal",
					"hours": "Hours",
					"hoursValue": "Mon — Fri · 8:30 AM – 6:00 PM (GMT)",
					"office": "Main office — Dakar",
					"openMap": "Open map",
					"whatsappLabel": "Speak with an engineer"
				}
			}
		} }
	},
	fallbackLng: "fr",
	lng: "fr",
	supportedLngs: ["fr", "en"],
	ns: ["common"],
	defaultNS: "common",
	interpolation: { escapeValue: false },
	react: { useSuspense: false },
	returnObjects: true
});
var i18n_default = instance;
var FLAGS = {
	en: "🇬🇧",
	fr: "🇫🇷"
};
var LABELS = {
	en: "EN",
	fr: "FR"
};
function LanguageSwitcher({ compact = false }) {
	const { i18n } = useTranslation();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	const current = (mounted ? i18n.resolvedLanguage : "fr") || "fr";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": "Language switcher",
		className: `inline-flex items-center rounded-md border border-border bg-black/60 p-0.5 ${compact ? "" : ""}`,
		children: ["fr", "en"].map((lng) => {
			const active = current.startsWith(lng);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					i18n.changeLanguage(lng);
					try {
						window.localStorage.setItem("st_lang", lng);
					} catch (e) {}
				},
				"aria-pressed": active,
				className: `flex items-center gap-1.5 rounded-[5px] px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${active ? "bg-[#E50914] text-white shadow-signal" : "text-muted-foreground hover:text-foreground"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-sm leading-none",
					children: FLAGS[lng]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: LABELS[lng] })]
			}, lng);
		})
	});
}
var STORAGE_KEY = "st_theme";
function getInitialTheme() {
	if (typeof window === "undefined") return "light";
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "light" || stored === "dark") return stored;
	return "light";
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initial = getInitialTheme();
		setTheme(initial);
		setMounted(true);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		document.documentElement.classList.toggle("dark", next === "dark");
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {}
	};
	const isDark = mounted ? theme === "dark" : false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": isDark ? "Activate light mode" : "Activate dark mode",
		"aria-pressed": !isDark,
		title: isDark ? "Light mode" : "Dark mode",
		className: "relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-black/60 text-foreground transition-colors duration-300 hover:border-signal/60 hover:text-[#E50914]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: `absolute h-4 w-4 transition-all duration-300 ${isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: `absolute h-4 w-4 transition-all duration-300 ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}` })]
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { t } = useTranslation();
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const links = [
		{
			to: "/",
			label: t("nav.home")
		},
		{
			to: "/techniques",
			label: t("nav.techniques")
		},
		{
			to: "/services",
			label: t("nav.services")
		},
		{
			to: "/projets",
			label: t("nav.projects")
		},
		{
			to: "/partenaires",
			label: t("nav.partners")
		},
		{
			to: "/contact",
			label: t("nav.contact")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b border-border/60 bg-black/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex flex-col items-end group leading-none select-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl md:text-2xl font-black tracking-[-0.04em] text-foreground uppercase",
						children: "SUCCESS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs md:text-sm font-extrabold text-foreground tracking-wide mt-[2px] pr-[1px]",
						children: "Thinkers"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						className: "relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [l.label, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "navbarActiveUnderline",
							className: "absolute inset-x-3 -bottom-0.5 h-[2px] bg-[#E50914] rounded-full",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 30
							}
						})] })
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-colors",
							children: t("nav.audit")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:hidden flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { compact: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Menu",
							onClick: () => setOpen((o) => !o),
							className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-black",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col p-3",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: l.to === "/" },
					className: "rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-carbon hover:text-foreground",
					activeProps: { className: "bg-carbon text-foreground" },
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-md bg-[#E50914] px-3 py-3 text-center text-sm font-semibold text-white",
					children: t("nav.audit")
				})]
			})
		})]
	});
}
function XIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
var SOCIAL_LINKS = {
	facebook: "#",
	linkedin: "#",
	x: "#",
	youtube: "#"
};
function Footer() {
	const { t } = useTranslation();
	const [email, setEmail] = (0, import_react.useState)("");
	const handleNewsletterSubmit = (e) => {
		e.preventDefault();
		if (!email) return;
		const subject = encodeURIComponent("Inscription Newsletter - SUCCESS Thinkers");
		const body = encodeURIComponent(`Bonjour,\n\nJe souhaite m'inscrire à la newsletter de SUCCESS Thinkers avec l'adresse email suivante : ${email}\n\n(Intégration backend : TODO)`);
		toast.info(t("newsletter.toastOpening"));
		setTimeout(() => {
			window.location.href = `mailto:newsletters@successthinkers.org?subject=${subject}&body=${body}`;
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-carbon-grad mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-end leading-none select-none w-fit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-black tracking-[-0.04em] text-foreground uppercase",
								children: "SUCCESS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-extrabold text-foreground tracking-wide mt-[2px] pr-[1px]",
								children: "Thinkers"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground leading-relaxed",
							children: t("footer.tagline")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
							children: t("footer.slogan")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs uppercase tracking-widest text-foreground font-semibold mb-4",
					children: t("footer.navigation")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-foreground transition-colors",
							children: t("nav.home")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/techniques",
							className: "hover:text-foreground transition-colors",
							children: t("nav.techniques")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-foreground transition-colors",
							children: t("nav.services")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projets",
							className: "hover:text-foreground transition-colors",
							children: t("nav.projects")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/partenaires",
							className: "hover:text-foreground transition-colors",
							children: t("nav.partners")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-foreground transition-colors",
							children: t("nav.contact")
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs uppercase tracking-widest text-foreground font-semibold mb-4",
					children: t("footer.contact")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 text-[#E50914]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:contact@successthinkers.org",
								className: "hover:text-foreground transition-colors",
								children: "contact@successthinkers.org"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 text-[#E50914]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/221774430606",
								className: "hover:text-foreground transition-colors",
								children: "+221 77 443 06 06 (WhatsApp)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-[#E50914] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "leading-snug",
								children: t("footer.address")
							})]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs uppercase tracking-widest text-foreground font-semibold mb-3",
							children: t("newsletter.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-3 leading-relaxed",
							children: t("newsletter.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleNewsletterSubmit,
							className: "flex gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: t("newsletter.emailPlaceholder"),
								className: "min-w-0 flex-1 rounded-md border border-border bg-black/40 px-3 py-2 text-xs text-foreground outline-none focus:border-signal transition-colors"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-md bg-[#E50914] hover:bg-[#c2080f] px-3 py-2 text-xs font-semibold text-white shadow-signal transition-colors flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3 w-3" })
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-widest text-foreground font-semibold mb-3",
						children: t("social.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SOCIAL_LINKS.facebook,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook",
								className: "hover:text-foreground transition-colors duration-200",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SOCIAL_LINKS.linkedin,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "LinkedIn",
								className: "hover:text-foreground transition-colors duration-200",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SOCIAL_LINKS.x,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "X",
								className: "hover:text-foreground transition-colors duration-200",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, { className: "h-4.5 w-4.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SOCIAL_LINKS.youtube,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "YouTube",
								className: "hover:text-foreground transition-colors duration-200",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-5 w-5" })
							})
						]
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" SUCCESS Thinkers. ",
					t("footer.rights")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tracking-wider",
					children: t("footer.ceo")
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-black px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-gradient-signal",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This resource does not exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]",
						children: "Back to home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-black px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "An error occurred"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please refresh or return to the homepage."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]",
						children: "Retry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-border bg-carbon px-4 py-2 text-sm font-medium hover:bg-muted",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SUCCESS Thinkers — Design, Build and Deploy" },
			{
				name: "description",
				content: "Architectures d'entreprise résilientes Oracle, Microsoft & Red Hat. Continuité d'activité et haute disponibilité."
			},
			{
				name: "author",
				content: "SUCCESS Thinkers"
			},
			{
				property: "og:title",
				content: "SUCCESS Thinkers — Infrastructures critiques d'entreprise"
			},
			{
				property: "og:description",
				content: "Conception, sécurisation et déploiement d'infrastructures critiques pour banques, télécoms et gouvernements."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(()=>{try{var t=localStorage.getItem('st_theme');var d=t?t==='dark':false;var c=document.documentElement.classList;d?c.add('dark'):c.remove('dark');}catch(e){}})();` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
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
						addressCountry: "SN"
					}
				}) }
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-background text-foreground",
			suppressHydrationWarning: true,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const pathname = useRouterState().location.pathname;
	const { i18n } = useTranslation();
	(0, import_react.useEffect)(() => {
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
				const resolved = navigator.language.substring(0, 2) === "en" ? "en" : "fr";
				if (i18n.language !== resolved) {
					const timer = setTimeout(() => {
						i18n.changeLanguage(resolved);
					}, 300);
					return () => clearTimeout(timer);
				}
				try {
					window.localStorage.setItem("st_lang", resolved);
				} catch (e) {}
			}
		}
	}, [i18n, useRouter().state.isLoading]);
	(0, import_react.useEffect)(() => {
		if (typeof document !== "undefined") document.documentElement.lang = i18n.language || "fr";
	}, [i18n.language]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 flex flex-col overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						initial: false,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
							transition: {
								duration: .25,
								ease: "easeInOut"
							},
							className: "w-full flex-1 flex flex-col",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
						}, pathname)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./techniques-gECmYEs_.mjs");
var Route$5 = createFileRoute("/techniques")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: i18n_default.t("techniques.meta.title") }, {
		name: "description",
		content: i18n_default.t("techniques.meta.description")
	}] })
});
var $$splitComponentImporter$4 = () => import("./services-BZ3ZqhxS.mjs");
var Route$4 = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: i18n_default.t("services.meta.title") }, {
		name: "description",
		content: i18n_default.t("services.meta.description")
	}] })
});
var $$splitComponentImporter$3 = () => import("./projets-ByfvGIXN.mjs");
var Route$3 = createFileRoute("/projets")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: i18n_default.t("projects.meta.title") }, {
		name: "description",
		content: i18n_default.t("projects.meta.description")
	}] })
});
var $$splitComponentImporter$2 = () => import("./partenaires-oe46X2E6.mjs");
var Route$2 = createFileRoute("/partenaires")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: i18n_default.t("partners.meta.title") }, {
		name: "description",
		content: i18n_default.t("partners.meta.description")
	}] })
});
var $$splitComponentImporter$1 = () => import("./contact-CRiaEqmu.mjs");
var Route$1 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: i18n_default.t("contact.meta.title") }, {
		name: "description",
		content: i18n_default.t("contact.meta.description")
	}] })
});
var $$splitComponentImporter = () => import("./routes-CgoySw3m.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: i18n_default.t("home.meta.title") }, {
		name: "description",
		content: i18n_default.t("home.meta.description")
	}] })
});
var TechniquesRoute = Route$5.update({
	id: "/techniques",
	path: "/techniques",
	getParentRoute: () => Route$6
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$6
});
var ProjetsRoute = Route$3.update({
	id: "/projets",
	path: "/projets",
	getParentRoute: () => Route$6
});
var PartenairesRoute = Route$2.update({
	id: "/partenaires",
	path: "/partenaires",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ContactRoute,
	PartenairesRoute,
	ProjetsRoute,
	ServicesRoute,
	TechniquesRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
