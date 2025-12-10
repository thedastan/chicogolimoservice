import HomeComponents from "@/components/pages/home/HomeComponents";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
	title: "VIP Transportation Service in Chicago",
	description: "We are a boutique chauffeur company based in Chicago, exclusively serving corporate executives, VIP clients, and those who value time, privacy, and flawless execution above everything else",
	url: "https://next-structure-seven.vercel.app/",
	image: "/image.png",
});

const Home = () => <HomeComponents />;

export default Home;
