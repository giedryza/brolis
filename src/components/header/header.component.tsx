import { VFC } from 'react';

import { Button } from 'ui';

import { LINKS } from './header.constants';
import styles from './header.module.scss';

export const Header: VFC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {LINKS.map((link) => (
          <li key={link.url}>
            <Button label={link.label} url={link.url} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
