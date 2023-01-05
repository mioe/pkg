<script setup lang="ts">
const handleClick = () => {
	console.log('🦕 handleClick')
}
</script>

<template>
	<button
		@click="handleClick"
	>
		<slot />
	</button>
</template>
