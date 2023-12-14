<template>
    <div class="auth__inner">
        <h1 class="auth__back-title">Регистрация</h1>
        <vForm v-bind:className="['auth__form']" v-bind:fields="fields" v-bind:textBtn="textBtn" />
        <div class="auth__alternative">
            <p class="auth__alternative-desc">
                Есть аккаунт?
                <nuxt-link class="auth__alternative-link" to="/auth/login">Войти</nuxt-link>
            </p>
        </div>
    </div>
</template>
<script>
import vForm from "@/components/vForm.vue";

export default {
    name: "RegistrationPage",
    components: { vForm, },
    head: {
        title: "Регистрация",
    },
    layout: "auth",
    data: () => ({
        fields: [
            {
                name: "name",
                id: "registration-name",
                title: "Имя",
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
                name: "lastname",
                id: "registration-lastname",
                title: "Фамилия",
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
                name: "nickname",
                id: "registration-nickname",
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
                id: "registration-password",
                title: "Пароль",
                type: "password",
                value: "",
                rules: [
                    {
                        name: "min",
                        value: "8",
                    }
                ],
            },
            {
                name: "repeat-password",
                id: "registration-repeat-password",
                title: "Повторите пароль",
                type: "password",
                value: "",
                rules: [
                    {
                        name: "repeatAs",
                        value: "password",
                    }
                ],
            },
        ],
        textBtn: "Зарегистрироваться",
    }),
}
</script>