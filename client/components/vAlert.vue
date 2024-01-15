<template>
    <div class="alert" v-if="open" :class="getAlertClass">
        <div class="alert__inner">
            <div class="alert__head">
                <h3 class="alert__title">{{ alert.title }}</h3>
                <button class="alert__close-btn" @click="$emit('close')"></button>
            </div>
            <div class="alert__body">
                <p class="alert__text">{{ alert.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        alert: Object,
        open: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        getAlertClass() {
            const { type, } = this.alert;

            switch (type) {
                case "success":
                    return "success";
                case "failure":
                    return "failure";
            }
        },
    },
}
</script>