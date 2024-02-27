// "use client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { theme } from "configs";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient} contextSharing={true}>
          {children}
        </QueryClientProvider>
        <Toaster
              position='bottom-center'
              reverseOrder={false}
              toastOptions={{
                duration: 3000,
              }}
            />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
