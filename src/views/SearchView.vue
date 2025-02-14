<script setup lang="ts">
import Container from '@/components/search-page/layout/Container.vue'
import Aside from '@/components/search-page/layout/Aside.vue'
import Article from '@/components/search-page/layout/Article.vue'
import Search from '@/components/search-page/Search.vue'
import UserResult from '@/components/search-page/UserResult.vue'
import UserSmall from '@/components/search-page/UserSmall.vue'
import UserBig from '@/components/search-page/UserBig.vue'

import fetchUsers from '@/api/users'
import createParams from '@/composables/createParams'
import { ref } from 'vue'

const lastParams = ref<string>();

const ApiUrl = import.meta.env.VITE_API_URL;

const getUsers = async (data: string):Promise<void> => {
	const params = createParams(data);

	if (params.length === 0) {
		// TODO: clear store if params 0
		console.warn('No parameters provided for the request.');
		return;
	}

	if (params === lastParams.value) {
        console.warn('No change in parameters, skipping fetch request.'); 
        return;
    }

	lastParams.value = params;

	await fetchUsers(`${ApiUrl}/users?${params}`);
}


const currentUser: any = {
	name: 'name',
	email: 'email',
	phone: '123456',
	text: 'lorem'
}

const searchUsers: number = 20
</script>

<template>
	<main>
		<Container>
			<Article>
				<template #aside>
					<Aside>
						<Search @action="getUsers"/>
						<UserResult>
							<UserSmall v-for="user in searchUsers" :user="user"/>
						</UserResult>
					</Aside>
				</template>
				<template #user-big>
					<UserBig v-if="currentUser" :user="currentUser"/>
				</template>
			</Article>
		</Container>
	</main>
</template>
<style lang="scss" scoped></style>