<template>
	<div class="layout layout--default">
		<vHeader />
		<Nuxt />
	</div>
</template>
<script>
export default {
	middleware: ["userIsAuth"],
}
</script>