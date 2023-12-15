import Auth from "@/static/js/request/Auth";

const auth = new Auth();

export default {
    state: () => ({
        token: null,
    }),
    getters: {
        getToken: (state) => state.token,
    },
    mutations: {},
    actions: {
        async registration({ }, fd) {
            try {
                const res = await auth.registration(fd);
                const data = await res.json();

                console.log(data);

                return data;
            } catch (err) {
                throw err;
            }
        }
    },
};