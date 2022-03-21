import { VFC } from 'react';
import Link from 'next/link';

import styles from './button.module.scss';
import { Props, LinkProps, ButtonProps } from './button.types';

export const Button: VFC<Props> = ({ label, url, attributes = {} }) => {
  const className = [styles.button, styles.ripple].join(' ');

  return url ? (
    <Link {...(typeof url === 'string' ? { href: url } : url)}>
      <a className={className} {...(attributes as LinkProps['attributes'])}>
        {label}
      </a>
    </Link>
  ) : (
    <button
      className={className}
      {...{
        type: 'button',
        ...(attributes as ButtonProps['attributes']),
      }}
    >
      {label}
    </button>
  );
};
