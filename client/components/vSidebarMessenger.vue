<template>
	<aside class="messenger__sidebar">
		<ul class="messenger__groups">
			<li class="messenger__group" v-for="group in groups" :key="group.link">
				<nuxt-link class="messenger__group-link" :to="group.link" exact-active-class="active">
					<img class="messenger__group-photo" :src="group.photo" :alt="group.text">
					<span class="messenger__group-name">{{ group.text }}</span>
				</nuxt-link>
			</li>
		</ul>
	</aside>
</template>

<script>
export default {
	data: () => ({ groups: [], }),
	async fetch() {
		try {
			this.groups.push(
				{
					text: "Group 1",
					link: "?activeGroup=Group1",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 2",
					link: "?activeGroup=Group2",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 1",
					link: "?activeGroup=Group1",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 2",
					link: "?activeGroup=Group2",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 1",
					link: "?activeGroup=Group1",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 2",
					link: "?activeGroup=Group2",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 1",
					link: "?activeGroup=Group1",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 2",
					link: "?activeGroup=Group2",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 1",
					link: "?activeGroup=Group1",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 2",
					link: "?activeGroup=Group2",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 1",
					link: "?activeGroup=Group1",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 2",
					link: "?activeGroup=Group2",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 1",
					link: "?activeGroup=Group1",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
				{
					text: "Group 2",
					link: "?activeGroup=Group2",
					photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
				},
			);
		} catch (err) {
			throw err;
		}
	},
}
</script>