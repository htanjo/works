import classes from './Header.module.scss';

function Header() {
  return (
    <>
      <div className={classes.title}>
        <div className={classes.titleContainer}>
          <h1 className={classes.titleText}>htanjo's works</h1>
        </div>
      </div>
      <div className={classes.menu}>
        <div className={classes.menuContainer}>Menu</div>
      </div>
    </>
  );
}

export default Header;
