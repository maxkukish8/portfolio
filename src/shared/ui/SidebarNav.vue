<template>
  <nav class="nav" ref="navEl">
    <h1 class="title">Maksym Kulish</h1>
    <p class="subtitle">Front End Developer</p>

    <div
        v-show="marker.visible"
        class="marker"
        :class="marker.phase"
        :style="{
          transform: `translate(${marker.x}px, ${marker.y}px)`,
          '--marker-size': marker.size
        }"
      >
      <img class="marker__img" :src="reaperSrc" alt="" aria-hidden="true" />
    </div>

    <div class="menu">
      <div
          v-for="(item,i) in routes"
          :key="item.to"
          class="menu-item"
          :ref="setItemRef"
      >
        <RouterLink
            :to="item.to"
            class="link"
            active-class="active"
            @click="onItemClick(i)"
        >
          <span
              class="label"
              :class="{
              'is-fading': i === fadingIndex,
              'is-active': i === activeIndex
            }"
              :ref="setLabelRef"
          >
            {{ item.label }}
          </span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate, nextTick, watch } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { useRoute } from 'vue-router';
import reaperSrc from '@/assets/image/icons/men-icon-white.png';

export type NavItem = { to: string; label: 'Home'|'Projects'|'Contact'|'Stack & Architecture' };

const props = defineProps<{ routes: NavItem[] }>();
const route = useRoute();
const navEl = ref<HTMLElement | null>(null);
const itemEls = ref<HTMLElement[]>([]);
const labelEls = ref<HTMLElement[]>([]);
onBeforeUpdate(() => {
  itemEls.value = [];
  labelEls.value = [];
});
const setItemRef = (el: Element | ComponentPublicInstance | null, _refs?: Record<string, any>) => {
  if (el instanceof HTMLElement) itemEls.value.push(el);
};
const setLabelRef = (el: Element | ComponentPublicInstance | null, _refs?: Record<string, any>) => {
  if (el instanceof HTMLElement) labelEls.value.push(el);
};
const activeIndex = ref<number>(-1);   // у кого текст приховано (фінальний стан)
const fadingIndex = ref<number | null>(null); // хто зараз плавно зникає
const marker = ref({
  x: 0, y: 0,
  size: '40px',
  visible: false,
  phase: 'idle'
});
const findIndexByPath = (path: string) => props.routes.findIndex(r => r.to === path);
const animateTo = async (index: number, withEffects = true) => {
  if (!navEl.value || !itemEls.value[index] || !labelEls.value[index]) return;

  const containerRect = navEl.value.getBoundingClientRect();
  const labelRect = labelEls.value[index].getBoundingClientRect();
  const iconW = parseFloat(marker.value.size);
  const iconH = iconW;
  const gap = 10;
  const rightX = Math.min(
      Math.round(labelRect.right - containerRect.left + gap),
      Math.round(containerRect.width - iconW)
  );
  const centerY = Math.round(
      labelRect.top - containerRect.top + (labelRect.height - iconH) / 2
  );

  const startX = Math.round(labelRect.left - containerRect.left);

  // reset
  marker.value.visible = true;
  fadingIndex.value = null;

  if (!withEffects) {
    marker.value.x = startX;
    marker.value.y = centerY;
    marker.value.phase = 'over';
    activeIndex.value = index;
    return;
  }

  marker.value.x = rightX;
  marker.value.y = centerY;
  marker.value.phase = 'appear';
  await nextTick();
  setTimeout(() => {
    fadingIndex.value = index;
    marker.value.x = startX;
    marker.value.phase = 'over';
  }, 360);

  setTimeout(() => {
    activeIndex.value = index;
    fadingIndex.value = null;
  }, 200);
};

const onItemClick = (i: number) => {
  animateTo(i, true);
};

watch(() => route.path, async (p, old) => {
  await nextTick();
  const i = findIndexByPath(p);
  animateTo(i, old ? true : false);
}, { immediate: true });
</script>

<style scoped lang="less">
.nav {
  position: relative;
  display: grid;
  gap: 10px;
}

/* Menu */
.menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 30px 5px 0;

  :root.dark & {
    gap: 22px;
  }
}

.menu-item {
  position: relative;
}

.link {
  text-decoration: none;
  display: inline-block;
}

.label {
  transition: opacity 420ms ease;
  font-size: clamp(16px, 1.8vw, 18px);
}

.title {
  font-size: clamp(30px, 2.5vw, 50px);
  font-weight: 400;
  line-height: 1.1;
  margin: 0;
}
.subtitle {
  font-weight: 300;
  margin: -10px 5px 0;
}

@media (prefers-reduced-motion: reduce) {
  .marker { transition: none; }
  .label { transition: none; }
}

@media screen and (max-width: 768px) {
  .subtitle {
    margin: -10px 2px 0;
  }

  .menu {
    flex-direction: row;
    margin: 20px 2px 0;
    flex-wrap: wrap;

    .link {
      &.active {
        text-decoration: underline;
      }
    }
  }

  .marker {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .marker {
    --marker-size: 64px;
    position: absolute;
    left: 0; top: 0;
    width: var(--marker-size);
    height: var(--marker-size);
    pointer-events: none;
    z-index: 5;

    transition:
        transform 380ms cubic-bezier(.22,.61,.36,1),
        opacity   200ms ease;

    &.appear { opacity: 1; }
    &.over   { opacity: 1; }
    &.idle   { opacity: 0; }
  }

  .marker__img {
    width: 100%; height: 100%; object-fit: contain;
    filter: drop-shadow(0 2px 0 rgba(0,0,0,.12));
  }

  .label.is-fading {
    opacity: .05;
  }

  .label.is-active {
    opacity: 0;
  }
}
</style>
