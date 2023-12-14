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

export default {
    name: "LoginPage",
    head: {
        title: "Вход",
    },
    components: {
        vForm,
        vAlert,
    },
    layout: "auth",
    data: () => ({
        openAlert: false,
        alertData: {
            type: "",
            title: "",
            text: "",
        },
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
        login(fd) {
            console.log(fd);
        },
        alertMessage(m) {
            this.alertData = m;
            this.openAlert = true;
        }
    },
}
</script>