import './gesture-handler';
import { ThemeContextProvider } from './presentation/context/ThemeContext';
import { Navigator } from './presentation/navigator/Navigator';


export const CoinsApp = () => {
  return (
      <ThemeContextProvider>
        <Navigator />
      </ThemeContextProvider>
  );
};
