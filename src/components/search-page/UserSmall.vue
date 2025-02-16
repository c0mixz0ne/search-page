<script setup lang="ts">
import type { User } from '@/types/types'
import { defineProps, defineEmits } from 'vue'

defineProps<{
  user?: User
}>()

const emits = defineEmits<{
  (e: 'setCurrentUser', user: any): void
}>()

const setCurrentUserHandler = (user: any) => {
  emits('setCurrentUser', user)
}
</script>

<template>
  <li @click="setCurrentUserHandler(user)">
    <figure>
      <img src="/public/images/default-avatar.png" alt="Avatar" />
      <figcaption>
        <div>
          {{ user?.name }}
        </div>
        {{ user?.email }}
      </figcaption>
    </figure>
  </li>
</template>

<style lang="scss" scoped>
li {
  cursor: pointer;

  &:hover {
    figure {
      outline: 1px solid var(--gray);

      figcaption {
        background-color: var(--gray);
      }
    }
  }

  &.active {
    figure {
      box-shadow: unset;
      outline: 1px solid var(--gray);

      figcaption {
        background-color: var(--gray);

        span {
          margin-left: 10px;
        }
      }
    }
  }

  figure {
    border-radius: var(--border-radius);
    display: flex;
    box-shadow: var(--box-shadow);
    overflow: hidden;
    outline: 1px solid transparent;
    transition: var(--transition);

    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-right: 1px solid var(--gray);
      user-select: none;
    }

    figcaption {
      overflow: hidden;
      text-overflow: ellipsis;
      transition: var(--transition);
      padding: 15px;
      color: var(--dark-gray);
      font-size: var(--small-font-size);
      width: 100%;

      div {
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--black);
        font-weight: 600;
        transition: var(--transition);
      }
    }
  }
}
</style>
