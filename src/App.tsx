import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { PageLayout } from './components/layout/PageLayout';
import { HomePage } from './pages/HomePage';
import { DataSpacesPage } from './pages/DataSpacesPage';
import { SchemasPage } from './pages/SchemasPage';
import { AgreementsPage } from './pages/AgreementsPage';
import { RecordsPage } from './pages/RecordsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter basename="/SE_Webpage">
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/data-spaces" element={<DataSpacesPage />} />
          <Route path="/solutions/schemas" element={<SchemasPage />} />
          <Route path="/solutions/agreements" element={<AgreementsPage />} />
          <Route path="/solutions/records" element={<RecordsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
