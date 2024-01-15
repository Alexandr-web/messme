<template>
	<div class="layout layout--default">
		<Nuxt />
	</div>
</template>
<script>
export default {
	middleware: ["userIsAuth"],
}
</script>