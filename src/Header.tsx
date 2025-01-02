import classes from './Header.module.scss';

function Header() {
  return (
    <>
      <h1 className={classes.title}>htanjo's works</h1>
      <div className={classes.menu}>Menu</div>
    </>
  );
}

export default Header;
