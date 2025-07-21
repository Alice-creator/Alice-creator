import { useState, useEffect } from "react";
import useSWR from "swr";

interface GitHubRepo {
  name: string;
  pushed_at: string;
  default_branch: string;
  updated_at: string;
  html_url: string;
}

const fetcher = (url: string) => {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
  };
  
  // Add GitHub token if available for higher rate limits
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }
  
  return fetch(url, { headers }).then((res) => {
    if (!res.ok) {
      throw new Error(`GitHub API Error: ${res.status}`);
    }
    return res.json();
  });
};

function formatTimeAgo(date: string): string {
  const now = new Date();
  const then = new Date(date);
  const diffInMs = now.getTime() - then.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  
  if (diffInHours < 1) return "Just now";
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }
  const months = Math.floor(diffInDays / 30);
  return `${months} month${months > 1 ? 's' : ''} ago`;
}

function getStatusBadge(daysAgo: number) {
  if (daysAgo <= 7) {  // Active: Within a week
    return (
      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 whitespace-nowrap">
        ✅ Active
      </span>
    );
  } else if (daysAgo <= 30) {  // Recent: Within a month
    return (
      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
        🔄 Recent
      </span>
    );
  } else {  // Inactive: More than a month
    return (
      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300 whitespace-nowrap">
        ⏸️ Idle
      </span>
    );
  }
}

interface ExtendedRepo extends GitHubRepo {
  totalCommits: number | string;
  daysAgo: number;
  timeAgo: string;
}

export default function GitHubActivityTable() {
  // Get GitHub username from environment or fallback to Alice-creator
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Alice-creator';
  
  // Fetch user repositories
  const { data: repos, error: reposError } = useSWR<GitHubRepo[]>(
    `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=10`,
    fetcher
  );

  const [reposWithCommits, setReposWithCommits] = useState<ExtendedRepo[]>([]);

  useEffect(() => {
    if (repos) {
      // Fetch commit counts for each repo
      const fetchCommitData = async () => {
        const repoData = await Promise.all(
          repos.map(async (repo) => {
            try {
              const commitsResponse = await fetch(
                `https://api.github.com/repos/${githubUsername}/${repo.name}/commits?per_page=1`
              );
              
              // Get total commits from Link header or estimate
              const linkHeader = commitsResponse.headers.get('Link');
              let totalCommits = 1;
              
              if (linkHeader?.includes('rel="last"')) {
                const lastPageRegex = /page=(\d+)>; rel="last"/;
                const lastPageMatch = lastPageRegex.exec(linkHeader);
                if (lastPageMatch) {
                  totalCommits = parseInt(lastPageMatch[1]);
                }
              }

              const now = new Date();
              const pushedDate = new Date(repo.pushed_at);
              const daysAgo = Math.floor((now.getTime() - pushedDate.getTime()) / (1000 * 60 * 60 * 24));

              return {
                ...repo,
                totalCommits,
                daysAgo,
                timeAgo: formatTimeAgo(repo.pushed_at)
              };
            } catch (error) {
              console.error(`Error fetching commits for ${repo.name}:`, error);
              return {
                ...repo,
                totalCommits: 'N/A',
                daysAgo: 0,
                timeAgo: formatTimeAgo(repo.pushed_at)
              };
            }
          })
        );
        setReposWithCommits(repoData);
      };

      fetchCommitData();
    }
  }, [repos, githubUsername]);

  if (reposError) {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
          GitHub Activity Status
        </h3>
        <p className="text-red-600 dark:text-red-400">Failed to load GitHub data</p>
      </div>
    );
  }

  if (!repos || reposWithCommits.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
          GitHub Activity Status
        </h3>
        <div className="animate-pulse">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
        GitHub Activity Status
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-700">
            <tr>
              <th scope="col" className="px-4 py-3">Repository</th>
              <th scope="col" className="px-4 py-3">Last Push</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Commits</th>
            </tr>
          </thead>
          <tbody>
            {reposWithCommits.map((repo, index) => (
              <tr 
                key={repo.name} 
                className={`bg-white dark:bg-slate-800 ${
                  index < reposWithCommits.length - 1 ? 'border-b dark:border-slate-700' : ''
                }`}
              >
                <td className="px-4 py-4 font-medium text-slate-900 dark:text-white">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {repo.name}
                  </a>
                </td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">
                  {repo.timeAgo}
                </td>
                <td className="px-4 py-4">
                  {getStatusBadge(repo.daysAgo)}
                </td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">
                  {repo.totalCommits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
