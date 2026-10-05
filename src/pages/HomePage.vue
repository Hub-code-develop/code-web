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

    <!-- 社区入口（来自 README 的加入邀请） -->
    <section class="section">
      <div class="container">
        <div class="cta" v-reveal>
          <div>
            <p class="section-kicker">// community</p>
            <h2 class="section-title">一起做点有趣的东西</h2>
            <p class="lead">
              我们欢迎更多社区创作者加入 —— 在组织的 Discussions 或 Discord 申请，审核通过即可加入交流群。
            </p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" :href="site.brand.repo" target="_blank" rel="noopener">
              在 GitHub 查看
            </a>
            <a class="btn btn--ghost" href="https://discord.gg/QcbCCZBxtN" target="_blank" rel="noopener">
              加入 Discord
            </a>
            <a class="btn btn--ghost" href="https://hub-develop.top/" target="_blank" rel="noopener">
              Hub-develop 主页
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
  border: 1px solid rgba(29, 160, 114, 0.22);
  border-radius: var(--radius);
  padding: 2.4rem 2.2rem;
  background: linear-gradient(135deg, rgba(29, 160, 114, 0.06), var(--bg-soft));
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
