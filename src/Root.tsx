import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import PeoplePage from './components/PeoplePage/PeoplePage';
import HomePage from './components/HomePage/HomePage';

const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="people">
            <Route index element={<PeoplePage />} />
            <Route path=":slug?" element={<PeoplePage />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Root;
