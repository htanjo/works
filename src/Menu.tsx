import { useEffect, useRef, useState } from 'react';
import classes from './Menu.module.scss';

interface MenuProps {
  activeId: string;
}

function Menu({ activeId }: MenuProps) {
  const menu = useRef<HTMLDivElement>(null);
  const menuList = useRef<HTMLUListElement>(null);
  const activeItem = useRef<HTMLElement | null>(null);
  const [arrowPosition, setArrowPosition] = useState(0);

  const getArrowPosition = () => {
    if (activeItem.current && menuList.current) {
      return (
        activeItem.current.offsetLeft +
        activeItem.current.clientWidth / 2 -
        menuList.current.scrollLeft
      );
    }
    return 0;
  };

  useEffect(() => {
    if (menu.current) {
      const menuListItems = Array.from(
        menu.current.querySelectorAll(`[href^="#"]`),
      ).map((anchor) => anchor.parentElement);
      menuListItems.forEach((item) => item?.classList.remove(classes.active));
      activeItem.current =
        menu.current.querySelector(`[href="#${activeId}"]`)?.parentElement ||
        null;
      if (activeItem.current) {
        activeItem.current.classList.add(classes.active);
      }
      setArrowPosition(getArrowPosition());
    }
  }, [activeId]);

  useEffect(() => {
    const handleWindowResize = () => {
      setArrowPosition(getArrowPosition());
    };
    const handleMenuScroll = () => {
      setArrowPosition(getArrowPosition());
    };
    window.addEventListener('resize', handleWindowResize);
    menuList.current?.addEventListener('scroll', handleMenuScroll);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      menuList.current?.removeEventListener('scroll', handleMenuScroll);
    };
  }, []);

  return (
    <div className={classes.menu} ref={menu}>
      <div className={classes.menuContainer}>
        <ul className={classes.menuList} ref={menuList}>
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
