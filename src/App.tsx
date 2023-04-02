import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, theme } from './ThemeProvider';
import MyAppShell from './components/MyAppShell';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MyAppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}
