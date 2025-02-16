<script setup lang="ts">
import Container from '@/components/search-page/layout/Container.vue'
import LogoIcon from '@/components/search-page/icons/LogoIcon.vue'
import UserMenuComponent from '@/components/search-page/UserMenu.vue'
</script>

<template>
  <header>
    <Container>
      <LogoIcon />
      <UserMenuComponent>
        <template #name> Пользователь </template>
      </UserMenuComponent>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
header {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-top: 50px;
    padding-bottom: 30px;
  }
}
</style>
