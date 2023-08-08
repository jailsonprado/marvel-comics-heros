import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HookProvider } from '@/context';
import { HomePage } from '@/pages/home/home';
import DetailsHeroPage from './pages/details-hero/details-hero';

const RoutesManager = () => {
  return (
    <BrowserRouter>
      <HookProvider>
        <Routes>
          <Route path="/comics/:id" element={<DetailsHeroPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HookProvider>
    </BrowserRouter>
  );
};

export default RoutesManager;
