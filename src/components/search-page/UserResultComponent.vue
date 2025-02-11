<script setup lang="ts">

</script>

<template>
	<div class="result">
		<div class="title">
			Результаты
		</div>
		<slot>
			<span class="empty">Начните поиск</span>
		</slot>
	</div>
</template>

<style lang="scss" scoped>
.result {
	display: flex;
	flex-direction: column;
	gap: 15px;
	overflow: auto;

	.title {
		font-weight: 600;
		user-select: none;
	}

	.empty {
		user-select: none;
		color: var(--dark-gray);
	}
}
</style>
