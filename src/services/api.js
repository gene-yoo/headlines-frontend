import keys from "./keys.js";
const baseURL = "https://newsapi.org/v2/";
const API_KEY = keys.api;
const headers = { "X-Api-Key": API_KEY };

const api = {
	getFeed: () => {
		return fetch(`${baseURL}top-headlines?sources=bbc-news,the-verge`, {
			headers
		}).then(res => res.json());
	},

	search: term => {
		return fetch(`${baseURL}everything?q=${term}`, {
			headers
		});
	},

	signupForm: () => {
		fetch("http://localhost:3000/api/v1/signup")
			.then(res => res.json())
			.then(json => json);
	},

	postNewUser: data => {
		console.log("we stopped here EOD thursday");
	}
};

export default api;
