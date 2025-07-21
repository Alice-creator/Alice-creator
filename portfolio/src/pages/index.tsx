import { Geist, Geist_Mono } from "next/font/google";
import GitHubActivityTable from "../components/GitHubActivityTable";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800`}>
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
          Loc Dang Garage
        </div>
        <div className="flex gap-6">
          <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            About
          </a>
          <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Loc Dang Garage
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            A passionate AI engineer creating incredible AI solutions and experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Masterpieces
            </a>
            <a href="https://drive.google.com/drive/folders/1PqeXz7cdLf2KRUYrb4G-h4mOdNTuWHSP" target="_blank" rel="noopener noreferrer" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Chamber of titles
            </a>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                About Garage Owner
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                I&apos;m an AI engineer loves creating state-of-the-art AI solutions for traditional problems.
                Living till AI can walk and talk like humans, I will keep learning and improving my skills.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                When I&apos;m not coding, you can find me exploring new technologies, 
                reading about design trends, or working on personal projects.
              </p>
            </div>
            <GitHubActivityTable />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            Garage Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Bayesian Network
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Probabilistic graphical model for reasoning under uncertainty using Bayesian inference and network analysis.
                </p>
                <a href="https://github.com/Alice-creator/Bayesian-network" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-white dark:bg-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            More about me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Want to share ideas, collaborate on projects, or just chat about AI?
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:dangquocloccueh@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Email
            </a>
            <a href="https://github.com/loc-dang" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/qu%E1%BB%91c-l%E1%BB%99c-%C4%91%E1%BA%B7ng-aaa591200/" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-500">
              © 2025 Loc Dang. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
