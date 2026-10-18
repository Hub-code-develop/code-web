<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { LanguageStat } from '@/content/languages'
import LanguageModal from './LanguageModal.vue'

defineProps<{
  languages: LanguageStat[]
  kicker?: string
  title?: string
}>()

const section = ref<HTMLElement | null>(null)
const rail = ref<HTMLElement | null>(null)
const railInner = ref<HTMLElement | null>(null)
const selected = ref<LanguageStat | null>(null)

let rafId: number | null = null

function paint() {
  if (!railInner.value || !rail.value || !section.value) return
  // 窄屏用原生横向滚动，不做视差位移
  if (window.innerWidth < 768) {
    railInner.value.style.transform = 'translateX(0)'
    return
  }
  const max = Math.max(0, railInner.value.scrollWidth - rail.value.clientWidth)
  const rect = section.value.getBoundingClientRect()
  const vh = window.innerHeight
  // 视差窗口：section 顶部从「刚进入视口底部」(rect.top=vh) 到「接近视口顶部」
  // (rect.top≈0.12vh) 的过程中，轨道从起点平移到终点。这样当 section 仍舒适可见时，
  // 所有卡片就已完整显示，之后继续滚动轨道保持静止，不再提前截断内容（页脚始终可达）。
  const start = vh
  const end = vh * 0.12
  const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
  railInner.value.style.transform = `translateX(${-p * max}px)`
}

function onScroll() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(paint)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  paint()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})

function open(l: LanguageStat) {
  selected.value = l
}
function close() {
  selected.value = null
}
</script>

<template>
  <section ref="section" class="rail-section">
    <div class="container">
      <div class="rail-head">
        <div>
          <p v-if="kicker" class="section-kicker">{{ kicker }}</p>
          <h2 v-if="title" class="section-title">{{ title }}</h2>
        </div>
      </div>
    </div>

    <div ref="rail" class="rail">
      <div ref="railInner" class="rail-inner">
        <button
          v-for="l in languages"
          :key="l.lang"
          class="lcard"
          :style="{ '--theme': l.color }"
          type="button"
          @click="open(l)"
        >
          <div class="lcard__top">
            <span class="lcard__rank">#{{ l.rank }}</span>
            <span class="lcard__dot" :style="{ background: l.color }"></span>
          </div>
          <h3 class="lcard__name">{{ l.lang }}</h3>
          <p class="lcard__pct">{{ l.pct }}%</p>
          <span class="lcard__bar">
            <span class="lcard__fill" :style="{ width: l.pct + '%', background: l.color }"></span>
          </span>
          <p class="lcard__repo">{{ l.repos.length }} 个仓库 · 查看 →</p>
        </button>
      </div>
    </div>

    <div class="container">
      <p class="rail-hint">横向滑动 / 滚动浏览全部语言 · 点击卡片查看详情</p>
    </div>

    <LanguageModal v-if="selected" :language="selected" @dismiss="close" />
  </section>
</template>

<style scoped>
.rail-section {
  padding: 1rem 0 3rem;
}
.rail-head {
  margin-bottom: 2rem;
}
.rail-head .section-title {
  margin-top: 0.4rem;
}

/* 横向轨道：窄屏原生横滑，宽屏靠视差位移 */
.rail {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
.rail::-webkit-scrollbar {
  display: none;
}
.rail-inner {
  display: inline-flex;
  gap: 1.1rem;
  padding: 0.4rem max(1.5rem, calc((100vw - 1120px) / 2)) 1rem;
  will-change: transform;
}

/* 卡片（竖向，固定宽度，hyliu.me 风格） */
.lcard {
  flex: none;
  width: 240px;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  border-top: 3px solid var(--theme);
  cursor: pointer;
  color: inherit;
  font: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.lcard:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
  border-color: var(--line-strong);
  border-top-color: var(--theme);
}
.lcard__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lcard__rank {
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--muted);
}
.lcard__dot {
  width: 12px;
  height: 12px;
  border-radius: 4px;
}
.lcard__name {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  margin-top: 0.8rem;
}
.lcard__pct {
  font-size: 1.6rem;
  font-weight: 850;
  letter-spacing: -0.02em;
  margin-top: 0.3rem;
  color: var(--theme);
}
.lcard__bar {
  display: block;
  height: 8px;
  margin-top: 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.lcard__fill {
  display: block;
  height: 100%;
  border-radius: 999px;
}
.lcard__repo {
  margin-top: auto;
  padding-top: 1rem;
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--muted);
}

.rail-hint {
  margin-top: 1.4rem;
  font-size: 0.85rem;
  color: var(--muted);
}

@media (min-width: 768px) {
  .rail {
    overflow: hidden;
  }
}
@media (max-width: 640px) {
  .lcard {
    width: 72vw;
    max-width: 240px;
  }
}
</style>
