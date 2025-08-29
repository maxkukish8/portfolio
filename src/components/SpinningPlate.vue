<template>
  <div class="plates-layer" aria-hidden="true">
    <img
      v-for="(s, i) in srcs"
      :key="i"
      :ref="setPlate"
      class="plate"
      :src="s"
      alt=""
      :style="{ '--size': size, '--offset': offsets[i] }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onBeforeUpdate, computed } from 'vue';
import type { ComponentPublicInstance } from 'vue';

const props = withDefaults(defineProps<{
  srcs: string[];
  size?: string;
  offset?: string;
  friction?: number;
  gain?: number;
  maxVel?: number;
}>(), {
  size: 'min(52vmin, 520px)',
  offset: 'calc(min(52vmin, 520px) + 24px)',
  friction: 0.93,
  gain: 0.08,
  maxVel: 8,
});

const dirs = [1, -1, 1];

const mid = computed(() => Math.floor(props.srcs.length / 2));
const offsets = computed(() => props.srcs.map((_, i) => `calc( (${i - mid.value}) * (${props.offset}) )`));

const plateEls = ref<HTMLImageElement[]>([]);
onBeforeUpdate(() => { plateEls.value = []; });

const setPlate = (el: Element | ComponentPublicInstance | null) => {
  if (el instanceof HTMLImageElement) plateEls.value.push(el);
};

let angles = props.srcs.map(() => 0);
let vel = 0;
let rafId = 0;

const step = () => {
  for (let i = 0; i < plateEls.value.length; i++) {
    angles[i] += vel * (dirs[i] ?? 1);
    const el = plateEls.value[i];
    if (el) {
      el.style.transform =
          `translate(-50%, -50%) translateY(${offsets.value[i]}) rotate(${angles[i]}deg)`;
    }
  }
  vel *= props.friction;
  if (Math.abs(vel) < 0.001) vel = 0;
  rafId = requestAnimationFrame(step);
};

const onWheel = (e: WheelEvent) => {
  let dy = e.deltaY;
  if (e.deltaMode === 1) dy *= 16;
  else if (e.deltaMode === 2) dy *= window.innerHeight;
  const add = Math.max(-props.maxVel, Math.min(props.maxVel, dy * props.gain));
  vel += add;                                            // вниз → позитивна швидкість
};

onMounted(() => {
  rafId = requestAnimationFrame(step);
  window.addEventListener('wheel', onWheel, { passive: true });
});
onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener('wheel', onWheel);
});
</script>

<style scoped>
.plates-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.plate {
  --size: min(52vmin, 520px);
  --offset: 0px;
  position: fixed;
  left: 50%; top: 50%;
  width: var(--size);
  height: auto;
  transform: translate(-50%, -50%) translateY(var(--offset)) rotate(0deg);
  will-change: transform;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,.25));
  opacity: .98;
}

:root.dark {
  .plates-layer {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce){
  .plate{ transition: none; }
}

@media screen and (max-width: 1024px) {
  .plates-layer {
    display: none;
  }
}
</style>
