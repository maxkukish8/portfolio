<template>
  <div class="list">
    <div v-for="p in projects" :key="p.id" class="item">
      <div class="wrapper">
        <a :href="p.url" target="_blank" rel="noopener" class="title-link">
          <span v-if="p.icon" class="kyiv-icon" aria-hidden="true">{{ p.icon }}</span>
          {{ p.title }}
        </a>
        <a
            v-if="p.giturl"
            class="gh-link"
            :href="p.giturl"
            target="_blank"
            rel="noopener"
            :aria-label="`GitHub: ${p.title}`"
            title="Open on GitHub"
        >
          <img class="gh-icon gh-icon--light"  src="@/assets/image/icons/github-icon-white.svg" alt="" aria-hidden="true" />
          <span class="sr-only">GitHub</span>
        </a>
      </div>

      <p v-if="p.tags?.length">{{ p.tags.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ProjectsService } from '../api/ProjectsService';
import type { Project } from '../model/projects.types';

const projects = ref<Project[]>([]);
onMounted(async () => { projects.value = await ProjectsService.list(); });
</script>

<style lang="less" scoped>
.list {
  display: grid; gap: 14px;
}
.item {
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .wrapper {
    display: flex;
    align-items: end;
    gap: 10px;

    :root.dark & {
      align-items: baseline;
    }
  }

  a {
    font-size: clamp(25px, 5.2vw, 60px);
    transition-property: opacity;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);

    &:hover {
      opacity: 0.3;
    }
  }

  p {
    font-weight: 500;
    font-size: clamp(14px, 1.5vw, 16px);
    margin: 0;
    max-width: 500px;
  }

  .gh-link {
    display: inline-flex;
  }

  .gh-icon {
    width: 22px;
    height: 22px;
    display: inline-block;
    transition-property: opacity;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);

    &:hover {
      opacity: 0.4;
    }
  }

  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
  }
}

@media screen and (max-width: 768px) {
  .list {
    .item {
      a {
        margin-bottom: 5px;
        font-weight: 200;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .list {
    .item {
      align-items: end;

      &:last-child {
        padding-bottom: 50px;
      }

      a {
        font-weight: 100;
      }

      p {
        text-align: right;
      }
    }
  }
}
</style>
