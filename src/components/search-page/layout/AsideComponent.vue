<template>
	<aside>
		<slot></slot>
	</aside>
</template>

<style lang="scss" scoped>
aside {
	width: var(--sidebar-width);
	padding: 30px 20px;
	border-right: 1px solid var(--gray);
	display: flex;
	flex-direction: column;
	gap: 25px;
}
</style>
