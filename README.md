# 🚗 Loc Dang Garage - AI Engineer Portfolio

[![Deploy to GitHub Pages](https://github.com/Alice-creator/Alice-creator/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/Alice-creator/Alice-creator/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Welcome to my AI engineering garage! 🤖⚡ This is my personal portfolio showcasing my journey in artificial intelligence, machine learning, and cutting-edge AI solutions.

## 🎯 About Me

I'm **Loc Dang**, an AI engineer passionate about creating state-of-the-art AI solutions for traditional problems. Living until AI can walk and talk like humans, I continuously learn and improve my skills in the ever-evolving world of artificial intelligence.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Data Fetching**: SWR for GitHub API integration
- **Deployment**: GitHub Pages with automated CI/CD
- **APIs**: GitHub REST API for real-time repository data

## 🚀 Features

- ✨ **Modern Design**: Clean, responsive UI with dark mode support
- 📊 **Real-time GitHub Integration**: Live repository activity and stats
- 🎨 **Dynamic Status Badges**: Visual indicators for project activity
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Static site generation with Next.js
- 🔄 **Auto-deployment**: CI/CD pipeline with GitHub Actions

## 📈 GitHub Activity Dashboard

The portfolio features a live GitHub activity table that shows:
- **Repository Status**: Active (≤7 days), Recent (≤30 days), or Idle (>30 days)
- **Commit Counts**: Total commits per repository
- **Last Activity**: Real-time "time ago" formatting
- **Direct Links**: Quick access to repositories

## 🏗️ Project Structure

```
├── portfolio/                 # Next.js application
│   ├── src/
│   │   ├── components/
│   │   │   └── GitHubActivityTable.tsx  # GitHub API integration
│   │   ├── pages/
│   │   │   └── index.tsx      # Main portfolio page
│   │   └── styles/
│   │       └── globals.css    # Global styles with Tailwind
│   ├── next.config.ts         # Next.js configuration
│   └── package.json           # Dependencies and scripts
├── .github/workflows/
│   └── nextjs.yml            # GitHub Actions deployment
└── README.md                 # This file
```

## 🚦 Getting Started

### Prerequisites
- Node.js 20 or later
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Alice-creator/Alice-creator.git
   cd Alice-creator
   ```

2. **Navigate to portfolio directory**
   ```bash
   cd portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables** (optional)
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your GitHub username and token
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the `portfolio` directory:

```env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_GITHUB_TOKEN=your-github-token  # Optional, for higher API rate limits
```

## 🚀 Deployment

The project automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. **Build**: Next.js static export generation
2. **Deploy**: Automatic deployment via GitHub Actions
3. **Live**: Available at your GitHub Pages URL

## 📁 Key Projects Featured

### 🧠 Bayesian Network
Probabilistic graphical model for reasoning under uncertainty using Bayesian inference and network analysis.
- **Tech**: Python, Machine Learning, Probabilistic Models
- **Repository**: [View on GitHub](https://github.com/Alice-creator/Bayesian-network)

## 🎨 AI/ML Arsenal

My current focus areas include:
- **Python** - Primary language for AI/ML development
- **Machine Learning** - Supervised and unsupervised learning algorithms
- **Deep Learning** - Neural networks and deep architectures
- **Natural Language Processing** - Text analysis and language models

## 📬 Connect With Me

- 📧 **Email**: [dangquocloccueh@gmail.com](mailto:dangquocloccueh@gmail.com)
- 💼 **LinkedIn**: [Quốc Lộc Đặng](https://www.linkedin.com/in/qu%E1%BB%91c-l%E1%BB%99c-%C4%91%E1%BA%B7ng-aaa591200/)
- 🐙 **GitHub**: [@loc-dang](https://github.com/loc-dang)
- 📋 **Resume**: [Chamber of Titles](https://drive.google.com/drive/folders/1PqeXz7cdLf2KRUYrb4G-h4mOdNTuWHSP)

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by Loc Dang**

*Crafting AI solutions for tomorrow's challenges*

</div><!--
**Alice-creator/Alice-creator** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
