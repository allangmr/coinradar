import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './gesture-handler';
import { ThemeContextProvider } from './presentation/context/ThemeContext';
import { Navigator } from './presentation/navigator/Navigator';

// Create a client
const queryClient = new QueryClient();


export const CoinsApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Navigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
