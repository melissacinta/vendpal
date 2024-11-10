import BudgetRoom from './pages/BudgetRoom';
import DashboardPage from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import FourOhFour from './components/FourOhFour';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/budget-room" element={<BudgetRoom />} />
        <Route path="*" element={<FourOhFour />} />
      </Route>
    </Routes>
  );
}

export default App;
