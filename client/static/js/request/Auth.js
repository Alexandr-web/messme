import Request from "./Request";

export default class Auth extends Request {
    constructor() {
        super();

        this.path = "/api/auth";
    }

    registration(fd) {
        return this.sendReq(`${this.path}/registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Type": "application/json",
            },
            body: JSON.stringify(fd),
        });
    }

    login(fd) {
        return this.sendReq(`${this.path}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Type": "application/json",
            },
            body: JSON.stringify(fd),
        });
    }
}