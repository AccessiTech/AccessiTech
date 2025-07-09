import { COMPANY_TITLE, DEFAULT_SHARE_IMAGE_ALT, IMAGES_BASE_URL, TWITTER_HANDLE } from "./strings";

export interface MetaDataProps {
  title: string;
  description: string;
  canonical: string;
  type?: string;
  image?: string;
  imageAlt?: string;
  siteName?: string;
  twitterCreator?: string;
}

export const getMetaData = ({
  title,
  description,
  canonical,
  type = "website",
  image = "default.png",
  imageAlt = "",
  siteName = COMPANY_TITLE,
  twitterCreator = TWITTER_HANDLE,
}: MetaDataProps) => ({
  title,
  description,
  canonical,
  "og:type": type,
  "og:image": `${IMAGES_BASE_URL}/${image}`,
  "og:image:alt": imageAlt,
  "og:site_name": siteName,
  "og:title": title,
  "og:description": description,
  "og:url": canonical,
  "twitter:card": image ? "summary_large_image" : "summary",
  "twitter:site": COMPANY_TITLE,
  "twitter:creator": twitterCreator,
  "twitter:title": title,
  "twitter:description": description,
  "twitter:image": `${IMAGES_BASE_URL}/${image}`,
  "twitter:image:alt": image ? imageAlt : DEFAULT_SHARE_IMAGE_ALT,
  "twitter:url": canonical,
});