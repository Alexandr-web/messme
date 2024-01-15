<template>
	<div class="messenger">
		<div class="messenger__inner">
			<vSidebarMessenger />
			<vMessengerChat />
		</div>
	</div>
</template>

<script>
import vSidebarMessenger from '@/components/vSidebarMessenger.vue';
import vMessengerChat from '@/components/vMessengerChat.vue';

export default {
	components: {
		vSidebarMessenger,
		vMessengerChat,
	},
}
</script>