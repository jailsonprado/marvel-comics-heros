import * as S from './order-by-name.styles';
import { IcHeroiSvg, ToggleOffSvg, ToggleOnSvg } from '@/assets/svg/svg-mapped';
import { useState } from 'react';
import { useAppDispatch } from '@/redux/types/types';
import { toggleActive } from '@/redux/heros/heros-slice';
import { Image } from '@/components/atoms/image/image';
import { Text } from '@/components/atoms/text/text';

export const OrderByName: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    setToggle((prevState) => !prevState);
    dispatch(toggleActive(toggle));
  };

  return (
    <S.WrapperItem>
      <Image src={IcHeroiSvg} descriptionAlt="hero-icon" />
      <Text component="span" text="Ordenar por nome - A/Z" padding={10} />
      <Image
        src={!toggle ? ToggleOffSvg : ToggleOnSvg}
        descriptionAlt={!toggle ? 'toggle-off-icon' : 'toggle-on-icon'}
        handleClick={onToggle}
      />
    </S.WrapperItem>
  );
};
