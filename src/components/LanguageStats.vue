<script setup lang="ts">
import LanguageRail from '@/components/LanguageRail.vue'
import { languageStats, languageMeta } from '@/content/languages'

const primary = languageStats[0]
</script>

<template>
  <section class="section section--soft">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="section-kicker">// languages</p>
        <h2 class="section-title">使用的语言</h2>
        <p class="lead">
          按使用频率（代码字节数）从高到低排序，汇总自
          <strong>{{ languageMeta.source }}</strong
          >。已剔除反编译产物（IL Assembly / Assembly）。
        </p>
      </div>

      <!-- 概要 -->
      <div class="sum" v-reveal>
        <div class="sum__item">
          <span class="sum__val">{{ languageMeta.languageCount }}</span>
          <span class="sum__label">种语言</span>
        </div>
        <div class="sum__item">
          <span class="sum__val">{{ languageMeta.reposScanned }}</span>
          <span class="sum__label">个仓库</span>
        </div>
        <div class="sum__item">
          <span class="sum__val sum__val--accent">{{ primary.lang }}</span>
          <span class="sum__label">主力语言 · {{ primary.pct }}%</span>
        </div>
      </div>

      <p class="meta">数据生成于 {{ languageMeta.generatedAt }} · 来源：{{ languageMeta.source }}</p>
    </div>

    <!-- hyliu.me 横向滚动轨道（全幅） -->
    <LanguageRail :languages="languageStats" />
  </section>
</template>

<style scoped>
.sum {
  display: flex;
  gap: 2.6rem;
  flex-wrap: wrap;
  margin-top: 2.4rem;
  padding: 1.6rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.sum__item {
  display: flex;
  flex-direction: column;
}
.sum__val {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
.sum__val--accent {
  color: var(--accent-ink);
}
.sum__label {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.25rem;
}

.meta {
  margin-top: 2rem;
  font-size: 0.78rem;
  color: var(--muted);
  font-family: var(--mono);
}

@media (max-width: 640px) {
  .sum {
    gap: 1.6rem;
  }
}
</style>
