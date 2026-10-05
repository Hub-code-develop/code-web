<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import DocSidebar from '@/components/DocSidebar.vue'
import { getDoc } from '@/content/docs'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const md = new MarkdownIt({ html: false, linkify: true, typographer: true })

// 编译期把所有文档原始 markdown 打进 bundle（eager）
const rawModules = import.meta.glob('../content/docs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const doc = computed(() => getDoc(slug.value))

const content = computed(() => {
  const key = `../content/docs/${slug.value}.md`
  const raw = rawModules[key]
  if (!raw) return '<p>该文档尚未编写。</p>'
  return md.render(raw)
})
</script>

<template>
  <div class="container doc-layout">
    <DocSidebar />
    <main class="doc-main">
      <p class="section-kicker">// docs</p>
      <h1 class="doc-h1">{{ doc?.title ?? '文档' }}</h1>
      <article class="doc-content" v-html="content"></article>
    </main>
  </div>
</template>

<style scoped>
.doc-layout {
  display: flex;
  gap: 3rem;
  padding: 6rem 1.5rem 5rem;
  align-items: flex-start;
}
.doc-h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 850;
  letter-spacing: -0.03em;
  margin-bottom: 1.6rem;
}
/* markdown 渲染样式 */
.doc-content {
  max-width: 72ch;
  color: var(--ink);
  line-height: 1.75;
}
.doc-content :deep(h1) {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 2rem 0 1rem;
  letter-spacing: -0.02em;
}
.doc-content :deep(h2) {
  font-size: 1.35rem;
  font-weight: 750;
  margin: 1.8rem 0 0.8rem;
}
.doc-content :deep(h3) {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 1.4rem 0 0.6rem;
}
.doc-content :deep(p) {
  margin: 0.8rem 0;
  color: var(--ink-soft);
}
.doc-content :deep(ul),
.doc-content :deep(ol) {
  margin: 0.8rem 0;
  padding-left: 1.4rem;
  list-style: revert;
  color: var(--ink-soft);
}
.doc-content :deep(li) {
  margin: 0.35rem 0;
}
.doc-content :deep(a) {
  color: var(--accent-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.doc-content :deep(code) {
  font-family: var(--mono);
  font-size: 0.86em;
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 0.1rem 0.4rem;
}
.doc-content :deep(pre) {
  background: #0d0f16;
  color: #e6e9f5;
  border-radius: 12px;
  padding: 1.1rem 1.2rem;
  overflow-x: auto;
  margin: 1rem 0;
  font-size: 0.86rem;
  line-height: 1.6;
}
.doc-content :deep(pre code) {
  background: transparent;
  border: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
}
.doc-content :deep(blockquote) {
  margin: 1rem 0;
  padding: 0.6rem 1rem;
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 8px 8px 0;
  color: var(--ink-soft);
}
.doc-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.2rem 0;
  font-size: 0.92rem;
}
.doc-content :deep(th),
.doc-content :deep(td) {
  border: 1px solid var(--line);
  padding: 0.6rem 0.8rem;
  text-align: left;
}
.doc-content :deep(th) {
  background: var(--bg-soft);
  font-weight: 700;
}
.doc-content :deep(strong) {
  color: var(--ink);
  font-weight: 700;
}
@media (max-width: 820px) {
  .doc-layout {
    flex-direction: column;
    gap: 0;
    padding-top: 5rem;
  }
}
</style>
