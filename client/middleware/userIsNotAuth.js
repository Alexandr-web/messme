export default async ({ store, redirect, }) => {
    try {
        const token = await store.dispatch("auth.store/autoLogin");
		console.log(token)
        if (token) {
            return redirect("/");
        }
    } catch (err) {
        throw err;
    }
};