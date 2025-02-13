<script setup lang="ts">

const isLoading = !false;
</script>

<template>
	<div class="result">
		<div class="title">
			Результаты
		</div>
		<ul class="user-list">
			<slot>
				<span class="empty">Начните поиск</span>
				<div v-if="isLoading" class="loader"></div>
			</slot>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.result {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow: hidden;
	height: 100%;

	.user-list {
		list-style-type: none;
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		overflow: auto;
	}

	.title {
		font-weight: 600;
		user-select: none;
		padding: 0 10px;
	}

	.empty {
		user-select: none;
		color: var(--dark-gray);
	}

	.loader {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%);
		margin: 0 auto;
		width: 30px;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 1px solid;
		border-color: var(--logo-color) var(--gray);
		animation: loader 1s infinite;
	}
}

@keyframes loader {to{transform: rotate(.5turn) translateX(50%)}}
</style>
