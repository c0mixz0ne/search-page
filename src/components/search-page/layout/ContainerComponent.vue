<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.container {
	max-width: 1366px;
	margin: 0 auto;
	padding: 0 var(--container-padding);
}
</style>
