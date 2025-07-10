import { JSX } from "react";
import { ExtraProps } from "react-markdown";
import { SITE_HOST } from "../../settings/env";
import { Link, useLocation } from "react-router-dom";

// LinkProps extends the default link props and react-markdown's ExtraProps
export type LinkProps = JSX.IntrinsicElements['a'] & ExtraProps;

export const CustomMarkdownLink = ({ href, title, ...props }: LinkProps) => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1] || '';

  // If the link is external, open in a new tab
  if (href && href.startsWith('http') && !href.includes(SITE_HOST)) {
    return <a {...props} href={href} title={title} target="_blank" rel="noopener noreferrer" />;
  }
  // Otherwise, handle internal links normally
  if (href) {
    return <Link {...props} to={`/${pathname}/${href}`} title={title} />;
  }

  // if no href, return a span
  return <span {...props} title={title}>{props.children}</span>;
}