<script setup lang="ts">
const $emit = defineEmits<{
  action: [data: string]
}>()

const getDataHandler = (event: Event): void => {
  // Debounce
  const timeoutId = window.setTimeout(() => {}, 0)
  for (let id = timeoutId; id >= 0; id -= 1) {
    window.clearTimeout(id)
  }

  setTimeout(() => {
    const target = event.target as HTMLInputElement
    $emit('action', target.value)
  }, 500)
}
</script>

<template>
  <div class="search">
    <div class="title">Поиск сотрудников</div>
    <input @input="getDataHandler" placeholder="Введите Id или имя" type="text" />
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 10px;

  .title {
    font-weight: 600;
    user-select: none;
  }

  input {
    padding: 15px;
    border-radius: var(--border-radius);
    border: 1.5px solid var(--gray);
    font-size: var(--regular-font-size);
    color: var(--dark-gray);
    outline: none;
    transition: var(--transition);

    &:focus {
      border-color: var(--black);
    }

    &::placeholder {
      user-select: none;
    }
  }
}
</style>
