import { useCallback, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import classes from './App.module.scss';

function App() {
  const [activeMenuId, setActiveMenuId] = useState('');
  const handleChangeSection = useCallback((id: string) => {
    setActiveMenuId(id);
  }, []);

  useEffect(() => {
    if (import.meta.env.PROD) {
      ReactGA.initialize('G-MPT0YVV9GQ', {
        gtagOptions: { send_page_view: false },
      });
      ReactGA.send({
        hitType: 'pageview',
        title: document.title,
      });
    }
  }, []);

  return (
    <div className={classes.app}>
      <Header activeMenuId={activeMenuId} />
      <Content onChangeSection={handleChangeSection} />
      <Footer />
    </div>
  );
}

export default App;
