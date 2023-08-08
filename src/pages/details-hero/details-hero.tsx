import * as React from 'react';
import { HeaderDetails, Footer } from 'components/organism';
import { DetailsSection } from 'components/organism/details-section/details-section';

import * as S from './details-hero.styles';
import { useRequestComics } from '@/hooks/use-request-comics/use-request-comics';
import { useRequestHero } from '@/hooks/use-request-hero/use-request-hero';

const DetailsHeroPage: React.FC = () => {
  const { hero, loading } = useRequestHero();
  const { comics, loadingData } = useRequestComics();

  return (
    <S.Container>
      <HeaderDetails />
      <DetailsSection
        hero={hero}
        loading={loading}
        comics={comics}
        loadingData={loadingData}
      />
      <Footer />
    </S.Container>
  );
};

export default DetailsHeroPage;
