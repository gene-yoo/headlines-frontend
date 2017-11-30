import keys from "./keys.js";
const baseURL = "https://newsapi.org/v2/";
const API_KEY = keys.api;
const headers = { "X-Api-Key": API_KEY };

const api = {
	getFeed: () => {
		return fetch(`${baseURL}top-headlines?sources=bbc-news,the-verge`, {
			headers
		})
			.then(res => res.json())
			.catch(res => console.log(res.json()));
	},

	search: term => {
		return fetch(`${baseURL}everything?q=${term}`, {
			headers
		}).then(res => res.json());
	}
};

export default api;
