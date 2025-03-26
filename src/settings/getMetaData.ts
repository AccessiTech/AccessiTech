
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
  image = "",
  imageAlt = "",
  siteName = "",
  twitterCreator = "",
}: MetaDataProps) => ({
  title,
  description,
  canonical,
  "og:type": type,
  "og:image": image,
  "og:image:alt": imageAlt,
  "og:site_name": siteName,
  "og:title": title,
  "og:description": description,
  "og:url": canonical,
  "twitter:card": image ? "summary_large_image" : "summary",
  "twitter:site": twitterCreator,
  "twitter:creator": twitterCreator,
  "twitter:title": title,
  "twitter:description": description,
  "twitter:image": image,
  "twitter:image:alt": imageAlt,
});