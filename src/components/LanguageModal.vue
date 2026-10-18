<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import type { LanguageStat } from '@/content/languages'

defineProps<{ language: LanguageStat }>()
const emit = defineEmits<{ (e: 'dismiss'): void }>()

function fmtBytes(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + ' GB'
  if (n >= 1e6) return (n / 1e6).toFixed(1) + ' MB'
  if (n >= 1e3) return (n / 1e3).toFixed(1) + ' KB'
  return n + ' B'
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('dismiss')
}

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  document.documentElement.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div class="overlay" @click.self="emit('dismiss')">
    <div class="detail" role="dialog" aria-modal="true" :aria-label="language.lang">
      <button class="detail__close" type="button" aria-label="关闭" @click="emit('dismiss')">✕</button>

      <div class="detail__head">
        <span class="detail__rank">#{{ language.rank }}</span>
        <span class="detail__dot" :style="{ background: language.color }"></span>
        <h3 class="detail__name">{{ language.lang }}</h3>
      </div>

      <div class="detail__pct">
        <span class="detail__pct-val">{{ language.pct }}%</span>
        <span class="detail__pct-label">代码字节占比</span>
      </div>

      <ul class="detail__stats">
        <li>
          <span class="k">代码量</span><span class="v">{{ fmtBytes(language.bytes) }}</span>
        </li>
        <li>
          <span class="k">使用仓库</span><span class="v">{{ language.repos.length }} 个</span>
        </li>
      </ul>

      <p class="detail__sub">出现在以下仓库</p>
      <ul class="detail__repos">
        <li v-for="r in language.repos" :key="r" class="tag">{{ r }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(6, 7, 11, 0.55);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  animation: fade 0.2s ease;
}
@keyframes fade {
  from {
    opacity: 0;
  }
}
.detail {
  position: relative;
  width: min(560px, 100%);
  max-height: 86vh;
  overflow-y: auto;
  background: var(--bg-soft);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  padding: 2.2rem 2.2rem 2rem;
  box-shadow: var(--shadow-hover);
  animation: pop 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.985);
  }
}
.detail__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--ink-soft);
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
}
.detail__close:hover {
  background: var(--ink);
  color: var(--dark);
  border-color: var(--ink);
}
.detail__head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.detail__rank {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--muted);
}
.detail__dot {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  flex: none;
}
.detail__name {
  font-size: 1.7rem;
  font-weight: 850;
  letter-spacing: -0.025em;
  line-height: 1.12;
}
.detail__pct {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin: 1.2rem 0 1.4rem;
}
.detail__pct-val {
  font-size: 2.4rem;
  font-weight: 850;
  letter-spacing: -0.03em;
  color: var(--accent-ink);
}
.detail__pct-label {
  color: var(--muted);
  font-size: 0.9rem;
}
.detail__stats {
  display: flex;
  gap: 2.2rem;
  flex-wrap: wrap;
  padding: 1.2rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.detail__stats li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.detail__stats .k {
  font-size: 0.78rem;
  color: var(--muted);
}
.detail__stats .v {
  font-size: 1.05rem;
  font-weight: 700;
}
.detail__sub {
  margin: 1.4rem 0 0.8rem;
  font-size: 0.85rem;
  color: var(--muted);
}
.detail__repos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
