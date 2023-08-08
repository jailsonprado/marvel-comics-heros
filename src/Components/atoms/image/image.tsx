import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = ({
  src,
  descriptionAlt,
  handleClick,
  ...rest
}) => {
  return (
    <img alt={descriptionAlt} src={src} style={rest} onClick={handleClick} />
  );
};
