<script setup lang="ts">
import Container from '@/components/search-page/layout/Container.vue'
import Aside from '@/components/search-page/layout/Aside.vue'
import Article from '@/components/search-page/layout/Article.vue'
import Search from '@/components/search-page/Search.vue'
import UserResult from '@/components/search-page/UserResult.vue'
import UserSmall from '@/components/search-page/UserSmall.vue'
import UserBig from '@/components/search-page/UserBig.vue'

import createParams from '@/composables/createParams'
import { ref, computed } from 'vue'

import { useStore } from 'vuex'

import type { User } from '@/types/types'

const ApiUrl = import.meta.env.VITE_API_URL

const usersStore = useStore()

const lastParams = ref<string>()

const getUsers = async (data: string): Promise<void> => {
  const params = createParams(data)

  if (params.length === 0) {
    usersStore.dispatch('clearUsers')
    lastParams.value = ''
    console.warn('No parameters provided for the request.')
    return
  }

  if (params === lastParams.value) {
    console.warn('No change in parameters, skipping fetch request.')
    return
  }

  lastParams.value = params

  usersStore.dispatch('fetchUsers', `${ApiUrl}/users?${params}`)
}

const setCurrentUser = (user: User) => {
  usersStore.dispatch('setCurrentUser', user)
}

const users = computed(() => usersStore.getters.getUsers)
const loading = computed(() => usersStore.getters.getLoading)
const currentUser = computed(() => usersStore.getters.getCurrentUser)
const error = computed(() => usersStore.getters.getError)
</script>

<template>
  <main>
    <Container>
      <Article>
        <template #aside>
          <Aside>
            <Search @action="getUsers" />
            <UserResult :loading="loading" :error="error">
              <UserSmall v-for="user in users" :user="user" :key="user" @setCurrentUser="setCurrentUser" />
            </UserResult>
          </Aside>
        </template>
        <template #user-big>
          <UserBig v-if="currentUser" :user="currentUser" />
        </template>
      </Article>
    </Container>
  </main>
</template>
<style lang="scss" scoped></style>
