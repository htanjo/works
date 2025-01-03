import { useEffect, useRef, useState } from 'react';
import classes from './Menu.module.scss';

interface MenuProps {
  activeId: string;
}

function Menu({ activeId }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const activeItem = useRef<HTMLElement | null>(null);
  const [arrowPosition, setArrowPosition] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
      const MenuListItems = Array.from(
        menuRef.current.querySelectorAll(`[href^="#"]`),
      ).map((anchor) => anchor.parentElement);
      MenuListItems.forEach((item) => item?.classList.remove(classes.active));
      activeItem.current =
        menuRef.current.querySelector(`[href="#${activeId}"]`)?.parentElement ||
        null;
      if (activeItem.current) {
        activeItem.current.classList.add(classes.active);
        setArrowPosition(
          activeItem.current.offsetLeft + activeItem.current.clientWidth / 2,
        );
      } else {
        setArrowPosition(0);
      }
    }
  }, [activeId]);

  useEffect(() => {
    const handleWindowResize = () => {
      setArrowPosition(
        activeItem.current
          ? activeItem.current.offsetLeft + activeItem.current.clientWidth / 2
          : 0,
      );
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className={classes.menu} ref={menuRef}>
      <div className={classes.menuContainer}>
        <ul className={classes.menuList}>
          <li className={classes.menuListItem}>
            <a href="#game">ゲーム</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#mod">MOD</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#3dcg">3DCG</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#painting">絵画</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#animation">アニメーション</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#app">アプリ</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#model">模型</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#hardware">ハードウェア</a>
          </li>
        </ul>
        {activeItem.current && (
          <div className={classes.arrow} style={{ translate: arrowPosition }} />
        )}
      </div>
    </div>
  );
}

export default Menu;
