<script setup lang="ts">
const handleClick = () => {
	console.log('🦕 handleClick')
}
</script>

<template>
	<button
		class="bg-red-200"
		@click="handleClick"
	>
		<slot />
	</button>
</template>
