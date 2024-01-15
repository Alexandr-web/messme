<template>
	<div class="page main-page">
		<vMessenger />
	</div>
</template>

<script>
import vMessenger from '@/components/vMessenger.vue';

export default {
	name: 'IndexPage',
	layout: "default",
	components: { vMessenger, },
}
</script>
