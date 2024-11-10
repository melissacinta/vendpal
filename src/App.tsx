import BudgetRoom from './pages/BudgetRoom';
import DashboardPage from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import FourOhFour from './components/FourOhFour';
import { SITE_ROUTES } from './utils/routes';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={SITE_ROUTES.HOME} element={<DashboardPage />} />
        <Route path={SITE_ROUTES.BUDGET_ROOM} element={<BudgetRoom />} />
        <Route path="*" element={<FourOhFour />} />
      </Route>
    </Routes>
  );
}

export default App;
