import Request from "./Request";

export default class Auth extends Request {
    constructor() {
        super();

        this.path = "/api/auth";
    }

    registration(fd) {
        console.log(fd);
        return this.sendReq(`${this.path}/registration`, {
            method: "POST",
            headers: { "Accept-Type": "application/json", },
            body: fd,
        });
    }
}