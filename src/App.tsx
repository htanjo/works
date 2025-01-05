import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import classes from './App.module.scss';
import { useCallback, useState } from 'react';

function App() {
  const [activeMenuId, setActiveMenuId] = useState('');
  const handleChangeSection = useCallback((id: string) => {
    setActiveMenuId(id);
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
