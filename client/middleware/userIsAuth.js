export default async ({ store, redirect, }) => {
    try {
        const token = await store.dispatch("auth.store/autoLogin");

        if (!token) {
            return redirect("/auth/login");
        }
    } catch (err) {
        throw err;
    }
};