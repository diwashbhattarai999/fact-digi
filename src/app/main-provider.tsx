import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { Toaster } from '@/components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from './theme-provider';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="fact-digi-theme">
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {children}

          <Toaster richColors className="" />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
