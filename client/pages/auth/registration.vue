<template>
    <div class="auth__inner">
        <vAlert :alert="alertData" :open="openAlert" @close="() => openAlert = false" />
        <h1 class="auth__back-title">Регистрация</h1>
        <vForm :className="['auth__form']" :fields="fields" :textBtn="textBtn" @submit="registration"
            @alertMessage="alertMessage" />
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
import vAlert from "@/components/vAlert.vue";
import alertDataMixin from "@/mixins/alertDataMixin";

export default {
    name: "RegistrationPage",
    mixins: [alertDataMixin],
    components: {
        vForm,
        vAlert,
    },
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
    methods: {
        async registration(fd) {
            try {
                const res = await this.$store.dispatch("auth.store/registration", fd);
                const isOk = res.status === 201;
                const typeAlert = isOk ? "success" : "failure";

                this.alertMessage({
                    type: typeAlert,
                    text: res.message,
                    title: typeAlert === "success" ? "Успешно" : "Ошибка",
                });

                if (isOk) {
                    return this.$router.push("/auth/login");
                }
            } catch (err) {
                throw err;
            }
        },
    },
}
</script>