import Header from './Header';
import Content from './Content';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
