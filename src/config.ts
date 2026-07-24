// -----------------------------------------------------------------------------
// Single source of truth for site content. Edit THIS file to make it yours.
// -----------------------------------------------------------------------------

export const SITE = {
  name: 'Bishesh Thapa',
  handle: 'bishuthapa',
  githubUser: 'Bishuthapa',
  title: 'Bishesh Thapa — full-stack engineer',
  description:
    'Full-stack engineer. I build ERP systems, developer tools, and things that stay out of the way.',
  email: 'bishesh.thapa@bisage.com.np',
  url: 'https://bishesh.example.com', // TODO: match astro.config.mjs site
} as const;

export const BIO = [
  "full-stack engineer. i build ERP platforms, developer tooling, and web apps.",
  "currently working with .NET, Vue, and TypeScript. minimalist by default — less bloat, faster software.",
] as const;

// nav shown in header + footer
export const NAV = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/activity', label: 'activity' },
  { href: '/links', label: 'links' },
  { href: '/use', label: 'uses' },
] as const;

// -----------------------------------------------------------------------------
// Projects. `repo` = "owner/name" (enables live star count). `href` = link target.
// Set repo to null for non-GitHub projects (no star badge fetched).
// -----------------------------------------------------------------------------
export type Project = {
  name: string;
  desc: string;
  href: string;
  repo: string | null;
};

export const PROJECTS: Project[] = [
  { name: 'bisage-erp',   desc: 'multi-tenant ERP platform — .NET 10 + Vue 3',      href: 'https://github.com/Bishuthapa', repo: null },
  { name: 'esewa-gateway', desc: 'eSewa payment gateway integration for .NET',       href: 'https://github.com/Bishuthapa/Esewa-gateway-integration', repo: 'Bishuthapa/Esewa-gateway-integration' },
  { name: 'videotrimmer', desc: 'browser-side video trimming, zero upload',          href: 'https://github.com/Bishuthapa/videotrimer', repo: 'Bishuthapa/videotrimer' },
  { name: 'yt-downloader', desc: 'minimal youtube video downloader',                 href: 'https://github.com/Bishuthapa/youtube-video-downloader', repo: 'Bishuthapa/youtube-video-downloader' },
  { name: 'bishu.xyz',    desc: 'this site\'s scrappy predecessor',                  href: 'https://github.com/Bishuthapa', repo: null },
  // TODO: replace/extend with your real repos. repo="owner/name" turns on live stars.
];

export const DOTFILES = {
  href: 'https://github.com/Bishuthapa/dotfiles',
  desc: 'shell, editor, and desktop config',
};

// curated links for /links
export const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Bishuthapa' },
  { label: 'Email',    href: 'mailto:bishesh.thapa@bisage.com.np' },
  { label: 'LinkedIn', href: '#' }, // TODO
  { label: 'X',        href: '#' }, // TODO
] as const;

// /use page — gear & software
export const USES = {
  Editor: ['VS Code', 'Neovim (config in dotfiles)'],
  Terminal: ['Windows Terminal + PowerShell', 'Git Bash for POSIX'],
  Languages: ['C# / .NET', 'TypeScript', 'Rust (learning)'],
  Stack: ['Vue 3 + Vite', 'ASP.NET Core Web API', 'SQL Server', 'Astro (this site)'],
  Hardware: ['Windows 11 workstation'],
} as const;
