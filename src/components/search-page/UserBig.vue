<script setup lang="ts">
	import { defineProps, defineEmits, ref} from 'vue'

	const props = defineProps<{
		user?: {
			type: any
		}
	}>()

	console.log(props.user);
	
</script>
<template>
	<div class="user-big">
		{{ user }}
	</div>
</template>

<style lang="scss" scoped>
.user-big {
	flex: 1;
	padding: 30px;
	display: flex;
	align-items: center;
	justify-content: center;


}
</style>
