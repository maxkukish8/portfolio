<template>
  <section>
    <div class="wrapper">
      <ul>
        <li><span>Framework & Language:</span> Vue 3, TypeScript</li>
        <li><span>Architecture:</span> modular approach, separation of business logic and UI</li>
        <li><span>Styles:</span> Less, tokens, theming (light/dark)</li>
        <li><span>Routing/State:</span> vue-router, Pinia (if needed)</li>
        <li><span>Tooling:</span> Vite, ESLint/Prettier, vite-tsconfig-paths</li>
        <li><span>11y & UX:</span> WCAG, keyboard navigation, prefers-reduced-motion</li>
      </ul>
      <p>The design incorporates elements of Ukrainian folk art.</p>
      <p>This project uses Kyiv*Type fonts and icons, commissioned for the Kyiv city<br>
        identification by Projector, Dmytro Bulanov Creative Büro, and Banda Agency.</p>
      <p class="credits">
        Design inspired by
        <a href="https://www.instagram.com/p5aholic/" target="_blank" rel="noopener noreferrer">
          Keita Yamada (p5aholic).
        </a>
      </p>
    </div>
  </section>
</template>
<style lang="less" scoped>
ul {
  font-size: clamp(16px, 1.6vw, 16px);
  line-height: 1.5;
  padding-left: 20px;
}
</style>
<script setup lang="ts">
</script>