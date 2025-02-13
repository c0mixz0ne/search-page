<template>
	<article>
		<slot name="aside"></slot>
		<slot name="user-big">
			<div class="empty">Выберите сотрудника, чтобы посмотреть его профиль</div>
		</slot>
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

	.empty {
		flex: 1;
		padding: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
		color: var(--dark-gray);
		font-size: var(--small-font-size);
	}
}
</style>
