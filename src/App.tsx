import { grommet, Box, Grommet } from "grommet";
import './App.css';
import { HeaderCard } from './components/Header/HeaderCard';
import { FooterCard } from './components/Footer/FooterCard';
import { DashboardCard } from './components/Dashboard/DashboardCard';

function App() {
  return (
    <Grommet theme={grommet} full>
        <Box fill>
        <HeaderCard></HeaderCard>
        <DashboardCard></DashboardCard>
        <FooterCard></FooterCard>
        </Box>
      </Grommet>
  );
}

export default App;
