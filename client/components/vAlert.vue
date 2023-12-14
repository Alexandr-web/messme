<template>
    <div class="alert" v-bind:class="getAlertClass">
        <div class="alert__inner">
            <h3 class="alert__title">{{ alert.title }}</h3>
            <p class="alert__dec">{{ alert.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: { alert: Object, },
    computed: {
        getAlertClass() {
            const { type, } = this.alert;

            switch (type) {
                case "success":
                    return "alert--success";
                case "failure":
                    return "alert--failure";
            }
        },
    },
}
</script>