// _app.tsx
// import '../styles/global.css';
import { FC, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../src/theme';
//import Auth from 'features/auth/Auth';
//import CoreApp from 'features/core/CoreApp';


const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  );
  return (
    //<Provider store={store}>
    //<CoreApp>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {/*<Auth />*/}
      </ThemeProvider>
      </QueryClientProvider>
        //</CoreApp>
        //</Provider>


  );
};

export default MyApp;
