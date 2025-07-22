import { JSX } from 'react';
import { ExtraProps } from 'react-markdown';
import { SITE_HOST } from '../../settings/env';
import { Link, useMatch } from 'react-router-dom';

// LinkProps extends the default link props and react-markdown's ExtraProps
export type LinkProps = JSX.IntrinsicElements['a'] & ExtraProps;

export const CustomMarkdownLink = ({ href, ...props }: LinkProps) => {
  const match = useMatch('/:base/*');
  const basePath = match?.params.base || '';

  // If the link is external, open in a new tab
  if (href && href.startsWith('http') && !href.includes(SITE_HOST)) {
    // append a font-awesome icon to the children[0] if it is a string
    let enhancedChildren = props.children;
    if (props.children && typeof props.children === 'string') {
      enhancedChildren = (
        <>
          {props.children}{' '}
          <sup>
            <i className="fa fa-external-link-alt" aria-hidden="true"></i>
          </sup>
        </>
      );
    }
    return (
      <a
        {...props}
        href={href}
        title="External Link"
        target="_blank"
        rel="noopener noreferrer"
        children={enhancedChildren}
      />
    );
  }
  // Otherwise, handle internal links normally
  if (href) {
    const isAbsolutePath = href.startsWith('/');
    return <Link {...props} to={isAbsolutePath ? href : `/${basePath}/${href}`} />;
  }

  // if no href, return a span
  return <span {...props}>{props.children}</span>;
};
