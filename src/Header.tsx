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
          <h1 className={classes.titleText}>
            <a href="https://htanjo.github.io/works/">
              <span>htanjo's works</span>
            </a>
          </h1>
        </div>
      </div>
      <Menu activeId={activeMenuId} />
    </>
  );
}

export default Header;
