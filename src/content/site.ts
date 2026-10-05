/* ============================================================
 * Hub-develop · 站点内容总配置（唯一内容来源）
 * 开发者门户（code.hub-develop.top）
 * ------------------------------------------------------------
 * 网站的每一句可见文案、每一个链接，都从这里读取。
 * 想改站上的内容？只改这个文件（以及同目录的 languages.ts）就够了。
 *
 *   site.brand      品牌名 / 链接 / 邮箱
 *   site.nav        顶部导航 + 页脚导航
 *   site.hero       首页大标题区（含终端窗口）
 *   site.footer     页脚
 *   site.seo        各页面 <title> / 描述
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
/*  品牌                                                       */
/* ---------------------------------------------------------- */
const brand = {
  name: 'Hub-develop',
  /** 导航栏 / 页脚的小 logo 文字 */
  short: 'Hub',
  tagline: '开发者门户',
  description: 'Hub-develop 的开发者门户：语言概览与开源项目，集中在一处。',
  /** 展示用的域名文本 */
  domain: 'code.hub-develop.top',
  /** 组织 GitHub 地址（真实组织为 Hub-code-develop） */
  repo: 'https://github.com/Hub-code-develop',
  /** 上游 / 母组织名（终端窗口会用到） */
  org: 'Hub-develop',
  orgUrl: 'https://github.com/Hub-code-develop',
  /** 联系邮箱 */
  email: '',
}

/* ---------------------------------------------------------- */
/*  导航（仅首页；文档/项目/关于/联系均已移除）                */
/* ---------------------------------------------------------- */
const nav: NavItem[] = [{ label: '首页', to: '/' }]

const socials: SocialItem[] = [
  { label: 'GitHub', href: brand.repo, mark: 'GH' },
  { label: '组织', href: brand.orgUrl, mark: 'CH' },
]

/* ---------------------------------------------------------- */
/*  首页 Hero                                                  */
/* ---------------------------------------------------------- */
const hero = {
  kicker: 'Hub-develop 的开发者门户',
  term: { user: 'guest', host: 'code', cmd: 'whoami' },
  title: brand.name,
  subtitle: '我们都在用什么语言造东西，一图看清。',
  lead: '这里汇总 Hub-develop 旗下所有代码项目使用的语言与占比。无论你想快速接入、阅读源码，还是参与贡献，都能在这里找到入口。',
  tags: ['C# / .NET', 'Avalonia', 'TypeScript', 'Vue', 'Python', 'Docker'],
  primaryCta: { label: '在 GitHub 查看', href: brand.repo } as Cta,
  /** Hero 右侧的模拟终端窗口 */
  terminal: {
    title: 'code — zsh',
    cmd: '$ hub-develop --portal',
    rows: [
      { key: 'org', value: brand.name, kind: 'val' as const },
      { key: 'role', value: 'developer portal', kind: 'val' as const },
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
  note: '以开源之名构建。',
  /** 版权行里给组织名加下划线链接 */
  copyrightName: brand.name,
}

/* ---------------------------------------------------------- */
/*  SEO —— 各页面的标题与描述                                   */
/* ---------------------------------------------------------- */
const seo = {
  home: {
    title: `${brand.name} · ${brand.tagline}`,
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
