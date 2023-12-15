export default class Request {
    constructor() {
        this.origin = "http://localhost:5000";
    }

    sendReq(path, { headers, method, body, }) {
        return fetch(`${this.origin}${path}`, {
            method,
            headers,
            body,
        });
    }
}