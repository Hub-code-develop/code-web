<script setup lang="ts">
import { computed, ref } from 'vue'
import { languageStats, languageMeta } from '@/content/languages'

const DEFAULT_SHOW = 10
const expanded = ref(false)

const shown = computed(() =>
  expanded.value ? languageStats : languageStats.slice(0, DEFAULT_SHOW),
)
const primary = computed(() => languageStats[0])

function fmtBytes(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + ' GB'
  if (n >= 1e6) return (n / 1e6).toFixed(1) + ' MB'
  if (n >= 1e3) return (n / 1e3).toFixed(1) + ' KB'
  return n + ' B'
}
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

      <!-- 条形榜 -->
      <ul class="bars">
        <li v-for="l in shown" :key="l.lang" class="bar" v-reveal>
          <span class="bar__rank">#{{ l.rank }}</span>
          <span class="bar__name">{{ l.lang }}</span>
          <span class="bar__track">
            <span
              class="bar__fill"
              :style="{ width: l.pct + '%', background: l.color }"
            ></span>
          </span>
          <span class="bar__pct">{{ l.pct }}%</span>
          <span class="bar__repo" :title="l.repos.join(', ')">{{ l.repos.length }} 仓库</span>
        </li>
      </ul>

      <div class="more" v-reveal v-if="languageStats.length > DEFAULT_SHOW">
        <button class="btn btn--ghost" type="button" @click="expanded = !expanded">
          {{ expanded ? '收起' : `展开全部 ${languageStats.length} 种` }}
        </button>
      </div>

      <p class="meta">数据生成于 {{ languageMeta.generatedAt }} · 来源：{{ languageMeta.source }}</p>
    </div>
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

.bars {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 2.2rem;
}
.bar {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.bar__rank {
  flex: none;
  width: 2.4rem;
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--muted);
  text-align: right;
}
.bar__name {
  flex: none;
  width: 130px;
  font-weight: 650;
  font-size: 0.94rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bar__track {
  flex: 1 1 auto;
  height: 10px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 999px;
  overflow: hidden;
}
.bar__fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.bar__pct {
  flex: none;
  width: 56px;
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--ink);
  text-align: right;
}
.bar__repo {
  flex: none;
  width: 60px;
  font-size: 0.74rem;
  color: var(--muted);
  text-align: right;
}

.more {
  margin-top: 1.8rem;
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
  .bar {
    gap: 0.55rem;
  }
  .bar__rank {
    display: none;
  }
  .bar__name {
    width: auto;
    flex: 1 1 auto;
  }
  .bar__repo {
    display: none;
  }
  .bar__pct {
    width: 48px;
  }
}
</style>
