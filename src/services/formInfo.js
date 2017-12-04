const formInfo = {
	sources: [
		{
			id: 1,
			name: "Ars Technica",
			slug: "ars-technica",
			description:
				"The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
			source_url: "http://arstechnica.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.201Z",
			updated_at: "2017-12-04T17:10:21.201Z"
		},
		{
			id: 2,
			name: "Axios",
			slug: "axios",
			description:
				"Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
			source_url: "https://www.axios.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.204Z",
			updated_at: "2017-12-04T17:10:21.204Z"
		},
		{
			id: 3,
			name: "Bleacher Report",
			slug: "bleacher-report",
			description:
				"Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
			source_url: "http://www.bleacherreport.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.207Z",
			updated_at: "2017-12-04T17:10:21.207Z"
		},
		{
			id: 4,
			name: "Business Insider",
			slug: "business-insider",
			description:
				"Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
			source_url: "http://www.businessinsider.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.210Z",
			updated_at: "2017-12-04T17:10:21.210Z"
		},
		{
			id: 5,
			name: "Buzzfeed",
			slug: "buzzfeed",
			description:
				"BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
			source_url: "https://www.buzzfeed.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.212Z",
			updated_at: "2017-12-04T17:10:21.212Z"
		},
		{
			id: 6,
			name: "Crypto Coins News",
			slug: "crypto-coins-news",
			description:
				"Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.",
			source_url: "https://www.cryptocoinsnews.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.215Z",
			updated_at: "2017-12-04T17:10:21.215Z"
		},
		{
			id: 7,
			name: "Engadget",
			slug: "engadget",
			description:
				"Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
			source_url: "https://www.engadget.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.218Z",
			updated_at: "2017-12-04T17:10:21.218Z"
		},
		{
			id: 8,
			name: "Entertainment Weekly",
			slug: "entertainment-weekly",
			description:
				"Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
			source_url: "http://www.ew.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.221Z",
			updated_at: "2017-12-04T17:10:21.221Z"
		},
		{
			id: 9,
			name: "ESPN",
			slug: "espn",
			description:
				"ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
			source_url: "http://espn.go.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.224Z",
			updated_at: "2017-12-04T17:10:21.224Z"
		},
		{
			id: 10,
			name: "Fortune",
			slug: "fortune",
			description: "Fortune 500 Daily and Breaking Business News",
			source_url: "http://fortune.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.227Z",
			updated_at: "2017-12-04T17:10:21.227Z"
		},
		{
			id: 11,
			name: "Fox Sports",
			slug: "fox-sports",
			description:
				"Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
			source_url: "http://www.foxsports.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.230Z",
			updated_at: "2017-12-04T17:10:21.230Z"
		},
		{
			id: 12,
			name: "Google News",
			slug: "google-news",
			description:
				"Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
			source_url: "https://news.google.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.233Z",
			updated_at: "2017-12-04T17:10:21.233Z"
		},
		{
			id: 13,
			name: "Hacker News",
			slug: "hacker-news",
			description:
				"Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
			source_url: "https://news.ycombinator.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.236Z",
			updated_at: "2017-12-04T17:10:21.236Z"
		},
		{
			id: 14,
			name: "IGN",
			slug: "ign",
			description:
				"IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
			source_url: "http://www.ign.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.238Z",
			updated_at: "2017-12-04T17:10:21.238Z"
		},
		{
			id: 15,
			name: "Mashable",
			slug: "mashable",
			description:
				"Mashable is a global, multi-platform media and entertainment company.",
			source_url: "http://mashable.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.241Z",
			updated_at: "2017-12-04T17:10:21.241Z"
		},
		{
			id: 16,
			name: "MTV News",
			slug: "mtv-news",
			description:
				"The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
			source_url: "http://www.mtv.com/news",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.244Z",
			updated_at: "2017-12-04T17:10:21.244Z"
		},
		{
			id: 17,
			name: "National Geographic",
			slug: "national-geographic",
			description:
				"Reporting our world daily: original nature and science news from National Geographic.",
			source_url: "http://news.nationalgeographic.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.248Z",
			updated_at: "2017-12-04T17:10:21.248Z"
		},
		{
			id: 18,
			name: "New Scientist",
			slug: "new-scientist",
			description:
				"Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
			source_url: "https://www.newscientist.com/section/news",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.251Z",
			updated_at: "2017-12-04T17:10:21.251Z"
		},
		{
			id: 19,
			name: "New York Magazine",
			slug: "new-york-magazine",
			description:
				"NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.",
			source_url: "http://nymag.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.254Z",
			updated_at: "2017-12-04T17:10:21.254Z"
		},
		{
			id: 20,
			name: "Next Big Future",
			slug: "next-big-future",
			description:
				"Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.",
			source_url: "https://www.nextbigfuture.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.258Z",
			updated_at: "2017-12-04T17:10:21.258Z"
		},
		{
			id: 21,
			name: "NFL News",
			slug: "nfl-news",
			description:
				"The official source for NFL news, schedules, stats, scores and more.",
			source_url: "http://www.nfl.com/news",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.260Z",
			updated_at: "2017-12-04T17:10:21.260Z"
		},
		{
			id: 22,
			name: "NHL News",
			slug: "nhl-news",
			description:
				"The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.",
			source_url: "https://www.nhl.com/news",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.263Z",
			updated_at: "2017-12-04T17:10:21.263Z"
		},
		{
			id: 23,
			name: "Polygon",
			slug: "polygon",
			description:
				"Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
			source_url: "http://www.polygon.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.266Z",
			updated_at: "2017-12-04T17:10:21.266Z"
		},
		{
			id: 24,
			name: "Recode",
			slug: "recode",
			description:
				"Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.",
			source_url: "http://www.recode.net",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.268Z",
			updated_at: "2017-12-04T17:10:21.268Z"
		},
		{
			id: 25,
			name: "Reddit /r/all",
			slug: "reddit-r-all",
			description:
				"Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
			source_url: "https://www.reddit.com/r/all",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.271Z",
			updated_at: "2017-12-04T17:10:21.271Z"
		},
		{
			id: 26,
			name: "TechCrunch",
			slug: "techcrunch",
			description:
				"TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
			source_url: "https://techcrunch.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.274Z",
			updated_at: "2017-12-04T17:10:21.274Z"
		},
		{
			id: 27,
			name: "TechRadar",
			slug: "techradar",
			description:
				"The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
			source_url: "http://www.techradar.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.277Z",
			updated_at: "2017-12-04T17:10:21.277Z"
		},
		{
			id: 28,
			name: "The Next Web",
			slug: "the-next-web",
			description:
				"The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.",
			source_url: "http://thenextweb.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.280Z",
			updated_at: "2017-12-04T17:10:21.280Z"
		},
		{
			id: 29,
			name: "The Verge",
			slug: "the-verge",
			description:
				"The Verge covers the intersection of technology, science, art, and culture.",
			source_url: "http://www.theverge.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.284Z",
			updated_at: "2017-12-04T17:10:21.284Z"
		},
		{
			id: 30,
			name: "Vice News",
			slug: "vice-news",
			description:
				'Vice News is Vice Media, Inc.\'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of "under - reported stories".',
			source_url: "https://news.vice.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.287Z",
			updated_at: "2017-12-04T17:10:21.287Z"
		},
		{
			id: 31,
			name: "Wired",
			slug: "wired",
			description:
				"Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.",
			source_url: "https://www.wired.com",
			language: "en",
			country: "us",
			created_at: "2017-12-04T17:10:21.289Z",
			updated_at: "2017-12-04T17:10:21.289Z"
		}
	],
	categories: [
		{
			id: 1,
			name: "general",
			created_at: "2017-12-04T17:10:21.156Z",
			updated_at: "2017-12-04T17:10:21.156Z"
		},
		{
			id: 2,
			name: "business",
			created_at: "2017-12-04T17:10:21.161Z",
			updated_at: "2017-12-04T17:10:21.161Z"
		},
		{
			id: 3,
			name: "entertainment",
			created_at: "2017-12-04T17:10:21.165Z",
			updated_at: "2017-12-04T17:10:21.165Z"
		},
		{
			id: 4,
			name: "technology",
			created_at: "2017-12-04T17:10:21.168Z",
			updated_at: "2017-12-04T17:10:21.168Z"
		},
		{
			id: 5,
			name: "gaming",
			created_at: "2017-12-04T17:10:21.171Z",
			updated_at: "2017-12-04T17:10:21.171Z"
		},
		{
			id: 6,
			name: "health-and-medical",
			created_at: "2017-12-04T17:10:21.173Z",
			updated_at: "2017-12-04T17:10:21.173Z"
		},
		{
			id: 7,
			name: "music",
			created_at: "2017-12-04T17:10:21.175Z",
			updated_at: "2017-12-04T17:10:21.175Z"
		},
		{
			id: 8,
			name: "politics",
			created_at: "2017-12-04T17:10:21.178Z",
			updated_at: "2017-12-04T17:10:21.178Z"
		},
		{
			id: 9,
			name: "science-and-nature",
			created_at: "2017-12-04T17:10:21.180Z",
			updated_at: "2017-12-04T17:10:21.180Z"
		},
		{
			id: 10,
			name: "sport",
			created_at: "2017-12-04T17:10:21.182Z",
			updated_at: "2017-12-04T17:10:21.182Z"
		}
	]
};

export default formInfo;
