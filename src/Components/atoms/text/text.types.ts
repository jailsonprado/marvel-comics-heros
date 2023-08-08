import { CSSProperties } from 'react';

interface TextStyleProps extends CSSProperties {
  fontSize?: number | string;
  color?: string;
  textAlign?: 'center' | 'right' | 'left';
  fontFamily?: string;
  textDecoration?: string;
  fontWeight?: string | number;
  dataTestid?: string;
}

export interface TextProps extends TextStyleProps {
  text?: string;
  component: keyof JSX.IntrinsicElements;
}
