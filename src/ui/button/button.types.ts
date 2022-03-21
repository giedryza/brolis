import { LinkProps as NextLinkProps } from 'next/link';

type ButtonAttributes = JSX.IntrinsicElements['button'];
type LinkAttributes = JSX.IntrinsicElements['a'];

interface BaseProps {
  label: string;
}

interface ButtonProps extends BaseProps {
  url?: undefined;
  attributes?: Omit<ButtonAttributes, 'className'>;
}

interface LinkProps extends BaseProps {
  url: NextLinkProps | string;
  attributes?: Omit<LinkAttributes, 'className' | 'href'>;
}

export type Props = ButtonProps | LinkProps;
