import { PAGE } from "@/config/pages/public-page.config";
import { FACEBOOK_LINK, INSTAGRAM_LINK, TELEGRAM_LINK, TWITTER_LINK, WHATSAPP_LINK } from "@/constants/admin";

export const navbar = [
	{
    title: "Home",
    link: PAGE.HOME,
  },
  {
    title: "Fleet",
    link: PAGE.FLEET,
  },
  {
    title: "Services",
    link: PAGE.SERVICES,
  },
  {
    title: "How it works",
    link: PAGE.WORKS,
  },
  {
    title: "Advantages",
    link: PAGE.ADVANTAGES,
  },
  {
    title: "About company",
    link: PAGE.ABOUT,
  },
  {
    title: "Reviews",
    link: PAGE.REVIEWS,
  },
];


export const social = [
	{
    title: "Instagram",
    link:  INSTAGRAM_LINK,
  },
  {
    title: "WhatsApp",
    link: WHATSAPP_LINK,
  },
  {
    title: "Telegram",
    link: TELEGRAM_LINK,
  },
  {
    title: "Twitter",
    link: TWITTER_LINK,
  },
  {
    title: "Facebook",
    link: FACEBOOK_LINK,
  } 
];


export const document = [
  {
    title: "Privacy Policy",
    link: "#",
  },
  {
    title: "Public offer",
    link: "#",
  },
];
