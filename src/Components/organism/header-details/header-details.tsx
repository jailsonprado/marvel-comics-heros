import { LogoMenorSvg } from '@/assets/svg/svg-mapped';
import { Image } from '../../atoms';
import * as S from './header-details.styles';
import { SearchHeroDetails } from '../../molecules';
import { useNavigate } from 'react-router-dom';

export const HeaderDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <Image src={LogoMenorSvg} marginRight={0} descriptionAlt="logo marvel" />
      <SearchHeroDetails
        handleChange={() => navigate(-1)}
        placeholder="Procure por herois"
      />
    </S.Header>
  );
};
