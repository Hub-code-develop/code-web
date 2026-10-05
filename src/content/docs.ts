/* ============================================================
 * Hub-develop · 文档元数据
 * ------------------------------------------------------------
 * 文档站侧边栏与列表都从这里读取。新增一篇文档：
 *   1. 在 src/content/docs/ 下新建 <slug>.md
 *   2. 在这里数组里加一项（slug 与文件名一致）
 * 内容页会按 slug 自动加载对应的 .md 并用 markdown-it 渲染。
 * ============================================================ */

export interface DocMeta {
  slug: string
  title: string
  order: number
  summary: string
}

export const docs: DocMeta[] = [
  {
    slug: 'getting-started',
    title: '快速开始',
    order: 1,
    summary: '克隆仓库、安装依赖，把任意一个项目在本地跑起来。',
  },
  {
    slug: 'contributing',
    title: '贡献指南',
    order: 2,
    summary: '如何提交 Issue、Pull Request，以及代码规范。',
  },
  {
    slug: 'architecture',
    title: '架构总览',
    order: 3,
    summary: '各项目的分层设计、技术选型与依赖关系。',
  },
]

/** 按 slug 取单篇文档元数据 */
export function getDoc(slug: string): DocMeta | undefined {
  return docs.find((d) => d.slug === slug)
}
