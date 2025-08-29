<template>
  <div class="layout">
    <div class="sidebar-footer">
      <ThemeToggle />
    </div>
    <div class="copyright">
      <p>© Maksym Kulish</p>
    </div>
    <aside class="sidebar">
      <SidebarNav :routes="routes" />
    </aside>
    <main class="content">
      <RouterView />
    </main>
<!--    gain - Speed/sensitivity-->
<!--    friction - Inertia-->
<!--    offset - distance between plates-->
    <SpinningPlate
      :srcs="[plate1, plate2, plate3]"
      size="min(28vmin, 300px)"
      offset="calc(min(26vmin, 300px) + 20px)"
      :gain="0.09"
      :friction="0.935"
    />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SidebarNav from '@ui/SidebarNav.vue';
import ThemeToggle from '@ui/ThemeToggle.vue';
import { routes } from '@/router/routesMeta';
import SpinningPlate from '@/components/SpinningPlate.vue';
import plate1 from '@/assets/image/plate.png';
import plate2 from '@/assets/image/plate2.png';
import plate3 from '@/assets/image/plate3.png';
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  min-height: 100dvh;
}

.sidebar {
  padding: 30px 0 0 40px;
  position: relative;
  z-index: 3;
}

.content { 
  padding: 24px;
  position: relative;
}

.sidebar-footer {
  position: absolute;
  bottom: 69px;
  left: -50px;
  z-index: 4;
  transform: rotate(-90deg);
}

.copyright {
  position: absolute;
  bottom: 4px;
  left: 20px;
  z-index: 3;
  font-size: 10px;

  p {
    margin: 0;
  }
}

@media screen and (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .sidebar {
    padding: 25px 25px 0 30px;
  }

  .sidebar-footer {
    top: 60px;
    bottom: unset;
    position: fixed;
  }

  .copyright {
    position: fixed;
  }

  :root.dark {
    .copyright {
      position: absolute;
    }
  }
}
</style>
