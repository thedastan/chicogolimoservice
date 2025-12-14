import { PAGE } from "@/config/pages/public-page.config";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
  WHATSAPP_LINK,
} from "@/constants/admin";

export const navbar = [
  { label: "Home", href: PAGE.HOME },
  { label: "Fleet", href: PAGE.FLEET },
  { label: "Services", href: PAGE.SERVICES },
  { label: "How it works", href: PAGE.WORKS },
  { label: "Advantages", href: PAGE.ADVANTAGES },
  { label: "About company", href: PAGE.ABOUT },
  { label: "Reviews", href: PAGE.REVIEWS },
];

export const social = [
  {
    title: "Instagram",
    link: INSTAGRAM_LINK,
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
  },
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
