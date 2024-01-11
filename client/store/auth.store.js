import Auth from "@/static/js/request/Auth";
import JSCookies from "js-cookie";
import cookie from "cookie";
import isValidToken from "@/static/js/helpers/isValidToken";

const auth = new Auth();

export default {
    state: () => ({
        token: null,
    }),
    getters: {
        getToken: (state) => state.token,
    },
    mutations: {
        setToken(state, val) {
            const token = val.replace(/^Bearer\s/, "");

            state.token = token;

            JSCookies.set("token", token, { expires: 1, });
        },
        removeToken(state) {
            state.token = null;
            JSCookies.remove("token");
        }
    },
    actions: {
        async registration({ }, fd) {
            try {
                const res = await auth.registration(fd);
                const data = await res.json();

                return data;
            } catch (err) {
                throw err;
            }
        },
        async login({ commit, }, fd) {
            try {
                const res = await auth.login(fd);
                const data = await res.json();

                data.token && commit("setToken", data.token);

                return data;
            } catch (err) {
                throw err;
            }
        },
        async autoLogin({ commit, }) {
            try {
                const { token = "", } = cookie.parse(process.browser ? document.cookie : this.app.context.req.headers.cookie || "");

                if (token) {
                    isValidToken(token) ? commit("setToken", token) : commit("removeToken");

                    return token;
                }

                commit("removeToken");

                return null;
            } catch (err) {
                throw err;
            }
        },
    },
};