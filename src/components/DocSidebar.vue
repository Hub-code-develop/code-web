<script setup lang="ts">
import { docs } from '@/content/docs'
import { useRoute } from 'vue-router'

const route = useRoute()
const sorted = [...docs].sort((a, b) => a.order - b.order)
</script>

<template>
  <aside class="doc-side">
    <p class="doc-side__title">文档</p>
    <nav class="doc-side__nav">
      <RouterLink
        v-for="d in sorted"
        :key="d.slug"
        :to="`/docs/${d.slug}`"
        class="doc-side__link"
        :class="{ 'doc-side__link--active': route.params.slug === d.slug }"
        >{{ d.title }}</RouterLink
      >
    </nav>
  </aside>
</template>

<style scoped>
.doc-side {
  position: sticky;
  top: calc(var(--nav-h) + 24px);
  align-self: start;
  width: 220px;
  flex-shrink: 0;
}
.doc-side__title {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-ink);
  margin-bottom: 0.8rem;
}
.doc-side__nav {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-left: 2px solid var(--line);
}
.doc-side__link {
  padding: 0.5rem 0.9rem;
  margin-left: -2px;
  border-left: 2px solid transparent;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ink-soft);
  transition: color 0.18s ease, border-color 0.18s ease;
}
.doc-side__link:hover {
  color: var(--ink);
}
.doc-side__link--active {
  color: var(--accent-ink);
  border-left-color: var(--accent);
}
@media (max-width: 820px) {
  .doc-side {
    position: static;
    width: 100%;
    margin-bottom: 1.6rem;
  }
  .doc-side__nav {
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 0;
    gap: 0.5rem;
  }
  .doc-side__link {
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0.4rem 0.9rem;
    margin-left: 0;
  }
  .doc-side__link--active {
    border-color: var(--accent);
    background: var(--accent-soft);
  }
}
</style>
