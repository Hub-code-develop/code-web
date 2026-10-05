<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import LanguageStats from '@/components/LanguageStats.vue'
import { site } from '@/content/site'
</script>

<template>
  <div>
    <Hero />

    <!-- 语言使用状态 -->
    <LanguageStats />

    <!-- GitHub 链接 CTA -->
    <section class="section">
      <div class="container">
        <div class="cta" v-reveal>
          <div>
            <p class="section-kicker">// source</p>
            <h2 class="section-title">全部代码都在 GitHub</h2>
            <p class="lead">
              我们所有的项目与 SDK 都以开源形式托管在 GitHub 组织下，随时欢迎查看与贡献。
            </p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" :href="site.brand.repo" target="_blank" rel="noopener">
              在 GitHub 查看组织
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 2.4rem 2.2rem;
  background: var(--bg-soft);
}
.cta__actions {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .cta {
    padding: 1.8rem 1.4rem;
  }
}
</style>
