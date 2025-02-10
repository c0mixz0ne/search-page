<script setup lang="ts">
import Container from '@/components/search-page/layout/ContainerComponent.vue'
import Aside from '@/components/search-page/layout/AsideComponent.vue'
import Article from '@/components/search-page/layout/ArticleComponent.vue'
import Search from '@/components/search-page/SearchComponent.vue'
import UserSmall from '@/components/search-page/UserSmallComponent.vue'
import UserBig from '@/components/search-page/UserBigComponent.vue'
</script>

<template>
	<main>
		<Container>
			<Article>
				<template #aside>
					<Aside>
						<Search />
						<UserSmall />
					</Aside>
				</template>
				<template #user-big>
					<UserBig />
				</template>
			</Article>
		</Container>
	</main>
</template>
