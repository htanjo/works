import Menu from './Menu';
import classes from './Header.module.scss';

function Header() {
  return (
    <>
      <div className={classes.title}>
        <div className={classes.titleContainer}>
          <h1 className={classes.titleText}>htanjo's works</h1>
        </div>
      </div>
      <Menu activeId="game" />
    </>
  );
}

export default Header;
