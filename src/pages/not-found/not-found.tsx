import { Text } from '@/components/atoms/text/text';
import * as S from './not-found.styles';
import { DeadPool2 } from '@/assets/svg/svg-mapped';
import { Image } from '@/components/atoms/image/image';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrapper>
        <Text component="h1" text="404" color="#c20000" fontSize={60} />
        <Text component="h1" text="Pagina não encontrada..." color="#696969" />
        <Image
          src={DeadPool2}
          width={200}
          descriptionAlt="dead pool surpreso"
        />
        <S.Button onClick={() => navigate('/')}>Ir para Home</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
