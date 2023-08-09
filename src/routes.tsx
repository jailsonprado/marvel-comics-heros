import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HookProvider } from '@/context';
import { HomePage } from '@/pages/home/home';
import DetailsHeroPage from './pages/details-hero/details-hero';
import { NotFoundPage } from './pages/not-found/not-found';

const RoutesManager = () => {
  return (
    <BrowserRouter>
      <HookProvider>
        <Routes>
          <Route path="/comics/:id" element={<DetailsHeroPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HookProvider>
    </BrowserRouter>
  );
};

export default RoutesManager;
