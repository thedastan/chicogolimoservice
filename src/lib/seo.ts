// lib/seo.ts
export const generateMetadata = ({
	title,
	description,
	url,
	image,
	keywords = "Airport Transfer | Corporate Transportation | Business Meetings | VIP Chauffeur Service | Special Occasions | Hourly Service", 
}: {
	title: string;
	description: string;
	url: string;
	image: string;
	keywords?: string;
}) => ({
	title,
	description,
	keywords,  
	image,
	robots: "index, follow",
	authors: [{ name: "VIP Transportation Service in Chicago" }],  
	publisher: "VIP Transportation Service in Chicago",  
	viewport: "width=device-width, initial-scale=1.0",
	openGraph: {
			title,
			description,
			url,
			type: "website",
			locale: "ru_KG",  
			siteName: "VIP Transportation Service in Chicago", 
			images: [{ 
					url: image,
					width: 1200,
					height: 630,
					alt: title,
			}],
	},
	twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
	},
	alternates: {
			canonical: url,
	},
	// дополнительные мета-теги
	other: {
			"theme-color": "#000000",
			"apple-mobile-web-app-capable": "yes",
			"apple-mobile-web-app-status-bar-style": "black-translucent",
	}
});

// Дополнительная функция для структурированных данных

// export const generateStructuredData = () => ({
// 	'@context': 'https://schema.org',
// 	'@type': 'WebSite',
// 	'name': 'VIP Transportation Service in Chicago', ////! Имя проекта
// 	'url': 'https://next-structure-seven.vercel.app/', ////! url проекта
// 	'potentialAction': {
// 			'@type': 'SearchAction',
// 			'target': 'https://next-structure-seven.vercel.app/search?q={search_term_string}', ////! Имя проекта
// 			'query-input': 'required name=search_term_string'
// 	}
// });