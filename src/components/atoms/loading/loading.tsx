import { Text } from '@/components/atoms/text/text';
import { Image } from '@/components/atoms/image/image';
import * as S from './loading.styles';
import { DeadPool } from '@/assets/svg/svg-mapped';

type LoadingProps = {
  loading: boolean;
};

export const Loading: React.FC<LoadingProps> = ({ loading }) => {
  if (loading)
    return (
      <S.Backdrop>
        <S.LoadingWrapper>
          <S.Spinner data-testid="loading-spinner" />
          <Text
            component="h6"
            color="red"
            fontSize={20}
            text="Um momento..."
            dataTestid="loading-text"
          />
          <Image src={DeadPool} width={300} />
        </S.LoadingWrapper>
      </S.Backdrop>
    );

  return null;
};
