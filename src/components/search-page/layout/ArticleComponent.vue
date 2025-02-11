<template>
	<article>
		<slot name="aside"></slot>
		<slot name="user-big"></slot>
	</article>
</template>

<style lang="scss" scoped>
article {
	display: flex;
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);
	height: calc(100dvh - var(--header-height) - var(--container-padding));
	min-height: var(--search-page-min-height);
	background-color: var(--light-gray);
}
</style>
