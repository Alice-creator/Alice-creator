import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const projects = [
  {
    tag: "productivity / web",
    name: "Navilife",
    description: "Lifestyle manager for Time, Money, and Knowledge. React 19 + Supabase, drag-and-drop weekly planner with 15-min slots.",
    link: "https://www.reais.codes/",
    linkLabel: "Live at reais.codes →",
    gradient: "from-emerald-900",
  },
  {
    tag: "ai / infrastructure",
    name: "Plexus",
    description: "AI gateway — point it at an OpenAPI spec and every endpoint becomes an AI tool, exposed over MCP, REST, and OpenAI-compatible chat.",
    link: "https://github.com/Alice-creator/plexus",
    linkLabel: "View on GitHub →",
    gradient: "from-teal-900",
  },
  {
    tag: "game / browser",
    name: "WoobleStack",
    description: "3D browser Jenga. Pull blocks without toppling the tower — solo high-score or hot-seat for up to 5 players. Three.js + Rapier3D.",
    link: "https://github.com/Alice-creator/WoobleStack",
    linkLabel: "View on GitHub →",
    gradient: "from-green-900",
  },
  {
    tag: "competition / ai agent",
    name: "OrbitWars",
    description: "Kaggle space strategy competition. AI agent that captures planets and commands fleets on a 100×100 map. Pure Python.",
    link: "https://github.com/Alice-creator/orbit-wars",
    linkLabel: "View on GitHub →",
    gradient: "from-slate-800",
  },
  {
    tag: "ml / research",
    name: "Bayesian Network",
    description: "Probabilistic graphical model — reasoning under uncertainty the honest way, not vibes.",
    link: "https://github.com/Alice-creator/Bayesian-network",
    linkLabel: "View on GitHub →",
    gradient: "from-green-950",
  },
];

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0a0a0a] text-[#e0e0e0]`}>

      {/* Navigation */}
      <nav className="px-6 py-5 flex justify-between items-center max-w-6xl mx-auto border-b border-[#1a1a1a]">
        <div className="text-xl font-bold text-neon font-mono tracking-tight">
          Loc Dang
        </div>
        <div className="flex gap-8">
          <a href="#about" className="text-sm text-gray-400 hover:text-neon transition-colors">About</a>
          <a href="#projects" className="text-sm text-gray-400 hover:text-neon transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-neon transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6">
        <div className="py-28 text-center">
          <div className="inline-block font-mono text-xs text-neon bg-neon/10 border border-neon/30 px-3 py-1 rounded-full mb-8 tracking-widest uppercase">
            AI Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Loc Dang<span className="text-neon">.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-2 max-w-2xl mx-auto">
            Bicentennial Man didn&apos;t make me want to build a robot.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            It made me want to build a future — where AI and people can actually live together.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-neon hover:bg-neon/90 text-black px-8 py-3 rounded-lg font-bold transition-colors text-sm">
              See my work
            </a>
          </div>
        </div>

        {/* About */}
        <section id="about" className="py-20 border-t border-[#1a1a1a]">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-white mb-8">About</h2>
              <p className="text-gray-400 mb-5 leading-relaxed">
                I&apos;m an AI engineer. I like the math more than the frameworks — give me a probabilistic
                model over a black-box API any day.
              </p>
              <p className="text-gray-400 mb-5 leading-relaxed">
                This garage is where I build things toward that dream. Some of it works. Some of it doesn&apos;t.
                All of it moves me forward.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Outside of work, I run experiments on how to turn technical ideas into things people actually pay for.
                Still learning that part.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:w-64 shrink-0 flex flex-col gap-7 pt-1">
              <div className="border-l-2 border-neon pl-5">
                <p className="text-xs font-mono text-neon uppercase tracking-widest mb-3">Currently building</p>
                <ul className="space-y-1.5">
                  <li className="text-gray-300 text-sm">Navilife</li>
                  <li className="text-gray-300 text-sm">Plexus</li>
                  <li className="text-gray-300 text-sm">WoobleStack</li>
                </ul>
              </div>
              <div className="border-l-2 border-[#2a2a2a] pl-5">
                <p className="text-xs font-mono text-neon uppercase tracking-widest mb-3">Stack</p>
                <ul className="space-y-1.5">
                  <li className="text-gray-500 text-sm">Python · PyTorch · scikit-learn</li>
                  <li className="text-gray-500 text-sm">React · Supabase</li>
                  <li className="text-gray-500 text-sm">Three.js · Rapier3D</li>
                </ul>
              </div>
              <div className="border-l-2 border-[#2a2a2a] pl-5">
                <p className="text-xs font-mono text-neon uppercase tracking-widest mb-3">Thinking about</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  AI-human coexistence. Probabilistic reasoning. How to turn side projects into things people pay for.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 border-t border-[#1a1a1a]">
          <h2 className="text-2xl font-bold text-white mb-2">
            What I&apos;ve Built
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            Things I&apos;ve built, tinkered with, or broken on purpose.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className="bg-[#111] rounded-xl overflow-hidden border border-[#1f1f1f] hover:border-neon/50 transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.07)] group"
              >
                <div className={`h-28 bg-gradient-to-br ${p.gradient} to-[#0a0a0a] flex items-end px-5 pb-3`}>
                  <span className="text-neon font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon text-sm font-medium hover:underline"
                  >
                    {p.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-[#1a1a1a] mt-10 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Let&apos;s talk</h2>
          <p className="text-gray-500 mb-8 text-sm">
            Got an interesting problem, a research idea, or just want to argue about probabilistic models?
          </p>
          <div className="flex justify-center gap-8">
            <a href="mailto:dangquocloccueh@gmail.com" className="text-sm text-gray-400 hover:text-neon transition-colors">Email</a>
            <a href="https://github.com/Alice-creator" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/qu%E1%BB%91c-l%E1%BB%99c-%C4%91%E1%BA%B7ng-aaa591200/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon transition-colors">LinkedIn</a>
          </div>
          <div className="mt-10 pt-8 border-t border-[#1a1a1a]">
            <p className="text-gray-700 text-xs">© 2026 Loc Dang. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
