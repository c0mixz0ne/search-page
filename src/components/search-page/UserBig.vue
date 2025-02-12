<template>
	<div class="user-big">
		<span class="empty">
			Выберите сотрудника, чтобы посмотреть его профиль
		</span>
	</div>
</template>

<style lang="scss" scoped>
.user-big {
	flex: 1;
	padding: 30px;
	display: flex;
	align-items: center;
	justify-content: center;

	.empty {
		user-select: none;
		color: var(--dark-gray);
		font-size: var(--small-font-size);
	}
}
</style>
