<script setup lang="ts">

</script>

<template>
	<div class="search">
		<div class="title">
			Поиск сотрудников
		</div>
		<input placeholder="Введите Id или имя" type="text">
	</div>
</template>

<style lang="scss" scoped>
.search {
	display: flex;
	flex-direction: column;
	gap: 15px;

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
