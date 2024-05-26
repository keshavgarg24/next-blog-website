import {SessionProvider} from 'next-auth/react';
import Layout from '../components/layout';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider enableSystem={true} attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
