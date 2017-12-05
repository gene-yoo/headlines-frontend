import keys from "./keys.js";
const newsURL = "https://newsapi.org/v2";
const backendURL = "http://localhost:3000/api/v1";
const API_KEY = keys.api;
const newsHeaders = { "X-Api-Key": API_KEY };
const backendHeaders = {
	Accept: "application/json",
	"Content-Type": "application/json"
};

const api = {
	getFeed: user => {
		let sources = user.source_slugs.join(",");
		let categories = user.category_names.join("&");

		return fetch(`${newsURL}/top-headlines?sources=${sources}`, {
			headers: newsHeaders
		}).then(res => res.json());
	},
	getNetworkFeed: () => {
		return fetch(`${backendURL}/articles`, {
			headers: backendHeaders
		}).then(res => res.json());
	},

	search: term => {
		return fetch(`${newsURL}/everything?q=${term}&language=en`, {
			headers: newsHeaders
		});
	},

	editUser: (info, updateMethod) => {
		console.log("in edit user", info);
		fetch(`${backendURL}/users/${info.id}`, {
			method: "PUT",
			body: JSON.stringify({ user: info }),
			headers: backendHeaders
		})
			.then(res => res.json())
			.then(res => updateMethod(res));
	},

	postNewUser: (data, login) => {
		fetch(`${backendURL}/users`, {
			method: "POST",
			body: JSON.stringify({ user: data }),
			headers: backendHeaders
		})
			.then(res => res.json())
			.then(res => login(res));
	},

	loginUser: (data, login) => {
		// console.log("inside loginUser");
		fetch(`${backendURL}/login`, {
			method: "POST",
			body: JSON.stringify({ user: data }),
			headers: backendHeaders
		})
			.then(res => res.json())
			.then(res => login(res));
	},

	getCurrentUser: token => {
		// console.log("inside get current user", token);
		return fetch(`${backendURL}/current_user`, {
			headers: Object.assign({}, backendHeaders, { token: token })
		}).then(res => res.json());
	},

	postNewArticle: (article, value, user) => {
		let data = Object.assign({}, article, { user_id: user.id, public: value });
		fetch(`${backendURL}/articles`, {
			method: "POST",
			body: JSON.stringify({ article: data }),
			headers: backendHeaders
		})
			.then(res => res.json())
			.then(res => console.log(res));
	},

	updateArticle: id => {
		fetch(`${backendURL}/articles/${id}`, {
			method: "PUT",
			headers: backendHeaders
		})
			.then(res => res.json())
			.then(res => console.log(res));
	},

	deleteArticle: id => {
		fetch(`${backendURL}/articles/${id}`, {
			method: "DELETE",
			headers: backendHeaders
		});
	}
};

export default api;
