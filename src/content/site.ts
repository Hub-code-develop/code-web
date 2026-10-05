/* ============================================================
 * Code.Hub · 站点内容总配置（唯一内容来源）
 * 社区门户（code.hub-develop.top）
 * ------------------------------------------------------------
 * 所有可见文案均取自组织 Profile README：
 *   https://github.com/Hub-code-develop/.github/blob/main/profile/README.md
 * 想改站上的文字？只改这个文件（以及同目录的 languages.ts）就够了。
 * ============================================================ */

import { languageMeta } from './languages'

export interface NavItem {
  label: string
  to: string
}

export interface SocialItem {
  label: string
  href: string
  /** 无图标字体时用这个短字符当图标 */
  mark: string
}

export interface Cta {
  label: string
  to?: string
  href?: string
}

/* ---------------------------------------------------------- */
/*  品牌（社区名来自 README：Code.Hub）                        */
/* ---------------------------------------------------------- */
const brand = {
  name: 'Code.Hub',
  /** 导航栏 / 页脚的小 logo 文字 */
  short: 'Hub',
  tagline: 'Connect user and PC (or AI)',
  description: 'Code.Hub 社区门户 —— Hub 系列应用、Minecraft 与各类开源小工具的聚集地。',
  /** 展示用的域名文本 */
  domain: 'code.hub-develop.top',
  /** 组织 GitHub 地址（代码实际所在组织 Hub-code-develop） */
  repo: 'https://github.com/Hub-code-develop',
  /** 上游 / 母组织名 */
  org: 'Hub-code-develop',
  orgUrl: 'https://github.com/Hub-code-develop',
  /** 联系邮箱 */
  email: '',
}

/* ---------------------------------------------------------- */
/*  导航（仅首页）                                            */
/* ---------------------------------------------------------- */
const nav: NavItem[] = [{ label: '首页', to: '/' }]

const socials: SocialItem[] = [
  { label: 'GitHub', href: brand.repo, mark: 'GH' },
  { label: 'Discord', href: 'https://discord.gg/QcbCCZBxtN', mark: 'DC' },
]

/* ---------------------------------------------------------- */
/*  首页 Hero（文案取自 README）                              */
/* ---------------------------------------------------------- */
const hero = {
  kicker: 'Code.Hub · 社区门户',
  term: { user: 'guest', host: 'code', cmd: 'whoami' },
  title: brand.name,
  subtitle: 'Hub, Connect user and PC (or AI).',
  lead: '欢迎来到 Code.Hub —— 由 Hub-develop 的社区用户与官方开发者共同组建的组织。我们在这里一起制作有趣的 Hub 系列应用、Minecraft 内容，以及其他小工具。',
  tags: ['C# / .NET', 'Avalonia', 'TypeScript', 'Vue', 'Python', 'Docker'],
  primaryCta: { label: '在 GitHub 查看', href: brand.repo } as Cta,
  /** 次按钮：社区 Discord（README 中的加入入口） */
  secondaryCta: { label: '加入 Discord', href: 'https://discord.gg/QcbCCZBxtN' } as Cta,
  /** Hero 右侧的模拟终端窗口 */
  terminal: {
    title: 'code — zsh',
    cmd: '$ codehub --portal',
    rows: [
      { key: 'org', value: brand.name, kind: 'val' as const },
      { key: 'role', value: 'community portal', kind: 'val' as const },
      { key: 'langs', value: `${languageMeta.languageCount} in use`, kind: 'num' as const },
      { key: 'portal', value: 'online', kind: 'ok' as const },
      { key: 'status', value: '● live', kind: 'ok' as const },
    ],
  },
}

/* ---------------------------------------------------------- */
/*  页脚（深色大字标区）                                       */
/* ---------------------------------------------------------- */
const footer = {
  term: { user: 'guest', host: 'code', cmd: 'cat footer.txt' },
  /** 巨大的字标（会随屏幕缩放） */
  wordmark: brand.name,
  note: 'Connect user and PC (or AI).',
  /** 版权行里给组织名加下划线链接 */
  copyrightName: brand.name,
}

/* ---------------------------------------------------------- */
/*  SEO —— 各页面的标题与描述                                   */
/* ---------------------------------------------------------- */
const seo = {
  home: {
    title: `${brand.name} · 社区门户`,
    description: brand.description,
  },
  notFound: {
    title: `页面走丢了 · ${brand.name}`,
    description: '找不到你要的页面。',
  },
}

/* ---------------------------------------------------------- */
/*  导出                                                        */
/* ---------------------------------------------------------- */
export const site = {
  brand,
  nav,
  socials,
  hero,
  footer,
  seo,
}
