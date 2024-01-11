<template>
    <div class="auth__inner">
        <h1 class="auth__back-title">Вход</h1>
        <vAlert v-bind:alert="alertData" v-bind:open="openAlert" v-on:close="() => openAlert = false" />
        <vForm v-bind:className="['auth__form']" v-bind:fields="fields" v-bind:textBtn="textBtn" v-on:submit="login"
            v-on:alertMessage="alertMessage" />
        <div class="auth__alternative">
            <p class="auth__alternative-desc">
                Нет аккаунта?
                <nuxt-link class="auth__alternative-link" to="/auth/registration">Зарегистрироваться</nuxt-link>
            </p>
        </div>
    </div>
</template>
<script>
import vForm from "@/components/vForm.vue";
import vAlert from "@/components/vAlert.vue";
import alertDataMixin from "@/mixins/alertDataMixin";

export default {
    name: "LoginPage",
    mixins: [alertDataMixin],
    head: {
        title: "Вход",
    },
    components: {
        vForm,
        vAlert,
    },
    layout: "auth",
    data: () => ({
        fields: [
            {
                name: "nickname",
                id: "login-nickname",
                title: "Никнейм",
                type: "text",
                value: "",
                rules: [
                    {
                        name: "min",
                        value: 6,
                    },
                    {
                        name: "max",
                        value: 25,
                    },
                ]
            },
            {
                name: "password",
                id: "login-password",
                title: "Пароль",
                type: "password",
                value: "",
                rules: [
                    {
                        name: "min",
                        value: 8,
                    },
                ]
            },
        ],
        textBtn: "Войти"
    }),
    methods: {
        async login(fd) {
            try {
                const res = await this.$store.dispatch("auth.store/login", fd);
                const isOk = res.status === 200;
                const typeAlert = isOk ? "success" : "failure";

                this.alertMessage({
                    type: typeAlert,
                    text: res.message,
                    title: typeAlert === "success" ? "Успешно" : "Ошибка",
                });

                if (isOk) {
                    return this.$router.push("/");
                }
            } catch (err) {
                throw err;
            }
        },
    },
}
</script>