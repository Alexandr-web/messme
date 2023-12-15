export default {
    data: () => ({
        openAlert: false,
        alertData: {
            type: "",
            title: "",
            text: "",
        },
    }),
    methods: {
        alertMessage(m) {
            this.alertData = m;
            this.openAlert = true;
        },
    }
};