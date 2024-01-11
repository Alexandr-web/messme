import { jwtDecode, } from "jwt-decode";

export default (tkn) => {
	if (!tkn) {
		return false;
	}

	const tokenData = jwtDecode(tkn) || {};
	const expires = tokenData.exp || 0;
		
	return (Date.now() / 1000) < expires;
};