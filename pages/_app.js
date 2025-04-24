import '../styles/globals.css';
import Navbar from '../components/Navbar';
import NewsletterModal from '../components/NewsletterModal';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <NewsletterModal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
