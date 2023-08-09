import * as React from 'react';

import { DetailsSection } from '@/components/organism/details-section/details-section';

import * as S from './details-hero.styles';
import { useRequestComics } from '@/hooks/use-request-comics/use-request-comics';
import { useRequestHero } from '@/hooks/use-request-hero/use-request-hero';
import { HeaderDetails } from '@/components/organism/header-details/header-details';
import { Footer } from '@/components/organism/footer/footer';

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
