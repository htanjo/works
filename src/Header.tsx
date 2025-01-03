import Menu from './Menu';
import classes from './Header.module.scss';

interface HeaderProps {
  activeMenuId: string;
}

function Header({ activeMenuId }: HeaderProps) {
  return (
    <>
      <div className={classes.title}>
        <div className={classes.titleContainer}>
          <h1 className={classes.titleText}>htanjo's works</h1>
        </div>
      </div>
      <Menu activeId={activeMenuId} />
    </>
  );
}

export default Header;
