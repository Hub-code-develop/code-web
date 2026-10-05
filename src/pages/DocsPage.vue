<script setup lang="ts">
import DocSidebar from '@/components/DocSidebar.vue'
import { docs } from '@/content/docs'

const sorted = [...docs].sort((a, b) => a.order - b.order)
</script>

<template>
  <div class="container doc-layout">
    <DocSidebar />
    <main class="doc-main">
      <p class="section-kicker">// docs</p>
      <h1 class="doc-h1">文档中心</h1>
      <p class="doc-lead">Hub-develop 项目的上手文档与参考。挑一篇开始：</p>

      <div class="doc-grid">
        <RouterLink
          v-for="d in sorted"
          :key="d.slug"
          :to="`/docs/${d.slug}`"
          class="card doc-card"
        >
          <span class="doc-card__idx">{{ String(d.order).padStart(2, '0') }}</span>
          <h3 class="doc-card__title">{{ d.title }}</h3>
          <p class="doc-card__desc">{{ d.summary }}</p>
        </RouterLink>
      </div>
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
}
.doc-lead {
  color: var(--muted);
  margin: 0.8rem 0 2.2rem;
  max-width: 56ch;
}
.doc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}
.doc-card {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.doc-card__idx {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--accent-ink);
}
.doc-card__title {
  font-size: 1.15rem;
  font-weight: 750;
}
.doc-card__desc {
  color: var(--ink-soft);
  font-size: 0.9rem;
}
@media (max-width: 820px) {
  .doc-layout {
    flex-direction: column;
    gap: 0;
    padding-top: 5rem;
  }
}
</style>
