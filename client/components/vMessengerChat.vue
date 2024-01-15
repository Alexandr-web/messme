<template>
	<div class="messenger__chat">
		<div class="messenger__chat-top">
			<h2 class="messenger__chat-group-name">{{ activeGroup }}</h2>
		</div>
		<div class="messenger__chat-bottom">
			<div class="messenger__chat-scroll-block">
				<ul class="messenger__messages">
					<li class="message" v-for="message in messages" :key="message.id">
						<div class="message__user-photo">
							<img class="message__user-photo-img" :src="message.user.photo" :alt="message.user.nickname">
						</div>
						<div class="message__info">
							<p class="message__text">{{ message.text }}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="messenger__chat-form">
				<textarea class="form__input form__textarea messenger__chat-form-text" v-model="message" @keydown.enter="submitMessage"></textarea>
				<button class="form__submit messenger__chat-form-btn" @click="submitMessage">Отправить</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		messages: [],
		message: "",
	}),
	watchQuery: ["activeGroup"],
	computed: {
		activeGroup() {
			return this.$route.query.activeGroup;
		},
	},
	async fetch() {
		try {
			this.messages.push({
				user: {
					nickname: "username",
					id: 1,
					photo: "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
				},
				text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Снова собрал сбить агентство то."
			});
		} catch (err) {
			throw err;
		}
	},
	methods: {
		submitMessage() {
			console.log(this.message);
		}
	},
}
</script>