import { CSSProperties } from 'react';

interface ImageStylesProps extends CSSProperties {
  width?: number | string;
  height?: number | string;
  maxHeight?: number | string;
}

export interface ImageProps extends ImageStylesProps {
  descriptionAlt?: string;
  src?: string;
  handleClick?: () => void;
  dataTestid?: string;
}
