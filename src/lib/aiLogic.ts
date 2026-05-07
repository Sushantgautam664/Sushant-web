import { CV_TEXT } from "./data";

export function getAIResponse(msg: string): string {
  const m = msg.toLowerCase();

  if (m.includes("cv") || m.includes("resume") || m.includes("curriculum")) {
    return `Here's the full CV! 📄\n\`\`\`\n${CV_TEXT}\n\`\`\`\nEmail **hello@nexolinx.com** to request a formatted PDF version.`;
  }
  if (m.includes("service") || m.includes("what do you offer") || m.includes("what can you do")) {
    return `Here are the main services offered:\n\n⚡ **Web Development** — Next.js, React, Node.js\n📈 **Technical SEO** — Audits, rankings, Core Web Vitals\n🏢 **Digital Strategy** — Growth, CRO, product strategy\n🔌 **API & Backend** — REST APIs, databases, cloud infra\n🎨 **UI/UX** — Design systems, component libraries\n🤖 **AI Integration** — LLMs, chatbots, content automation`;
  }
  if (m.includes("nexolinx") || m.includes("company") || m.includes("agency")) {
    return `**Nexolinx** is a digital agency founded and led by the Sushant, Prashant, Shrijan and Birat.\n\nWe specialize in:\n• Building high-performance web applications\n• SEO strategies that drive organic growth\n• End-to-end digital transformation\n\nWe work with startups, SMBs, and enterprises globally.\n\n🌐 nexolinx.com  |  📧 hello@nexolinx.com`;
  }
  if (m.includes("stack") || m.includes("tech") || m.includes("language") || m.includes("framework") || m.includes("tool")) {
    return `Tech stack in use:\n\n**Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS\n**Backend:** Node.js, Express, REST/GraphQL APIs\n**DB:** PostgreSQL, MongoDB, Redis, Prisma ORM\n**SEO:** GSC, Ahrefs, GA4, Core Web Vitals, Screaming Frog\n**Cloud:** AWS, Vercel, Docker, GitHub Actions\n**AI:** OpenAI GPT-4, Anthropic Claude, LangChain, Pinecone`;
  }
  if (m.includes("contact") || m.includes("email") || m.includes("reach") || m.includes("connect")) {
    return `You can get in touch via:\n\n📧 **Email:** sushantgautam854@gmail.com\n🐦 💼 **LinkedIn:** linkedin.com/in/Sushant Gautam\n🐙 **GitHub:** github.com/sushantgautam664\n🌐 **Website:** susantgautam.com.np\n\nOr use the contact form on this page!`;
  }
  if (m.includes("project") || m.includes("work") || m.includes("portfolio") || m.includes("built")) {
    return `Featured projects:\n\n1. **Nexolinx Platform** — Agency platform built on Next.js 14 App Router\n2. **SEO Analytics Suite** — Custom GSC/Ahrefs dashboard with React + Python\n3. **AI Content Engine** — LLM-powered content automation (OpenAI + Node.js)\n4. **E-Commerce Accelerator** — Shopify + Next.js headless storefront (95+ Lighthouse)`;
  }
  if (m.includes("experience") || m.includes("years") || m.includes("background") || m.includes("career")) {
    return `5+ years of experience spanning:\n\n• Built **50+ web applications** across e-commerce, SaaS, and content\n• SEO campaigns achieving **#1 rankings** for competitive keywords\n• **Founded and scaled Nexolinx** as CEO\n• Full product lifecycle: concept → design → build → deploy → grow`;
  }
  if (m.includes("seo")) {
    return `SEO is a core specialty! Services include:\n\n• Technical SEO audits & fixes\n• Core Web Vitals optimization\n• Content strategy & keyword research\n• Link building & domain authority growth\n• Rank tracking & automated reporting\n\nTrack record of **#1 rankings** for clients in competitive niches.\n\n📧 Interested? Email **info@nexolinx.com**`;
  }
  if (m.includes("price") || m.includes("cost") || m.includes("rate") || m.includes("hire") || m.includes("available")) {
    return `For pricing and engagement details, the best approach is a direct conversation.\n\n📧 **hello@nexolinx.com**\n\nTypically work on:\n• **Project-based** — fixed scope & price\n• **Retainer** — ongoing monthly work\n• **Consulting** — hourly for advice/audits\n\nUse the contact form on this page to describe your project!`;
  }
  if (m.includes("hello") || m.includes("hi") || m.includes("hey") || m.includes("yo")) {
    return `Hey! 👋 Great to meet you. I'm **NEXO-AI**, the personal assistant for the CEO & Founder of Nexolinx.\n\nAsk me anything about:\n• 📄 CV / Resume\n• 🛠 Services & pricing\n• ⚡ Tech stack\n• 💼 Projects & portfolio\n• 🏢 Nexolinx agency\n• 📬 Contact info\n\nWhat would you like to know?`;
  }
  if (m.includes("next") || m.includes("react") || m.includes("node")) {
    return `Next.js, React, and Node.js are core parts of the stack!\n\n• **Next.js 14** — App Router, Server Components, RSC\n• **React 18** — hooks, context, concurrent features\n• **Node.js** — REST APIs, webhooks, background jobs\n• **TypeScript** — strict mode across all projects\n• **Tailwind CSS** — utility-first styling\n\nAll projects are built with performance and SEO in mind from day one.`;
  }

  return `Great question! I can help you with info about:\n\n• 📄 **CV / Resume** — type "show CV"\n• 🛠 **Services** — type "what services"\n• ⚡ **Tech Stack** — type "tech stack"\n• 💼 **Projects** — type "show projects"\n• 🏢 **Nexolinx** — type "about nexolinx"\n• 📬 **Contact** — type "contact info"\n• 💰 **Pricing** — type "hire"\n\nWhat would you like to know?`;
}
