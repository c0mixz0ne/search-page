<template>
  <aside>
    <slot></slot>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: var(--sidebar-width);
  padding: 30px 10px 20px 10px;
  border-right: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (max-width: 768px) { 
    width: 100%;
  }
}
</style>
