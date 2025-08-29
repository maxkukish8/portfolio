<template>
  <div class="theme-toggle" role="group" aria-label="Theme">
    <button
        type="button"
        class="btn"
        :class="{ active: !isDark }"
        :aria-pressed="!isDark"
        @click="setTheme('light')"
    >
      Light
    </button>
    <button
        type="button"
        class="btn"
        :class="{ active: isDark }"
        :aria-pressed="isDark"
        @click="setTheme('dark')"
    >
      Dark
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const apply = () => {
  const root = document.documentElement;
  root.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const setTheme = (theme: 'light' | 'dark') => {
  isDark.value = theme === 'dark';
  apply();
};

onMounted(() => {
  const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  isDark.value = saved ? saved === 'dark' : prefersDark;
  apply();
});
</script>

<style scoped lang="less">
.theme-toggle {
  .btn {
    font-size: 12px;
    border: unset;
    background: unset;
    color: #f7f7f7;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    padding: 0 0 0 14px;
    margin-right: 10px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      border: 1px solid #f7f7f7;
      inline-size: 0.55em;
      block-size: 0.55em;
      background: transparent;
    }

    &.active {
      &:before {
        background: currentColor;
      }
    }
  }
}
</style>
