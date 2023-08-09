import { TextProps } from '@/components/atoms/text/text.types';

export const Text: React.FC<TextProps> = ({ text, component, ...rest }) => {
  const ComponentTag = component;
  return <ComponentTag style={rest}>{text}</ComponentTag>;
};
