<script setup lang="ts">
import { defineProps } from 'vue'

import type { User } from '@/types/types'

defineProps<{
  user?: User
}>()
</script>
<template>
  <div class="user-big">
    <figure>
      <img src="/public/images/default-avatar.png" alt="Avatar" />
      <figcaption>
        <span class="name">
          {{ user?.name }}
        </span>
        <ul>
          <li>
            <span>email:</span>
            {{ user?.email }}
          </li>
          <li>
            <span>phone:</span>
            {{ user?.phone }}
          </li>
        </ul>
        <span class="about"> О себе </span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptatum eligendi
          facilis aut ducimus autem architecto incidunt quibusdam mollitia eveniet eius, recusandae
          dolore vitae illum iste, ipsum alias dolorem! Voluptatibus.
        </p>
      </figcaption>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.user-big {
  flex: 1;
  padding: 30px 20px;
  overflow: auto;

  figure {
    display: flex;
    gap: 40px;
    img {
      width: 50%;
      height: 100%;
      flex: 1;
      position: sticky;
      top: 0;
      // object-fit: cover;
    }
    figcaption {
      width: 50%;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .name,
      .about {
        color: var(--black);
        font-weight: 600;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          color: var(--dark-gray);
          span {
            color: var(--black);
            font-weight: 600;
            user-select: none;
            font-size: var(--small-font-size);
          }
        }
      }

      p {
        font-size: var(--small-font-size);
        line-height: 24px;
        color: var(--dark-gray);
      }
    }
  }
}
</style>
