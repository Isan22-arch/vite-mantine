import MyRouter from './MyRouter';
import { ThemeProvider } from './ThemeProvider';
import { Welcome } from './Welcome/Welcome';

export default function App() {
  return (
    <ThemeProvider>
      <MyRouter />
      <Welcome />
    </ThemeProvider>
  );
}
