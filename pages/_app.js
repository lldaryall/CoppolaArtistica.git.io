
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import NewsletterModal from '../components/NewsletterModal';

export default function App({ Component, pageProps }) { 
return (
    <>
      <Navbar />
      <NewsletterModal />
      <Component {...pageProps} />
    </>
  );
}

