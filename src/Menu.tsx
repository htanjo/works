import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Menu.module.scss';

interface MenuProps {
  activeId: string;
}

function Menu({ activeId }: MenuProps) {
  const { t, i18n } = useTranslation();
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
        if (menuList.current) {
          if (activeItem.current.getBoundingClientRect().left < 0) {
            menuList.current.scrollLeft = activeItem.current.offsetLeft;
          } else if (
            activeItem.current.getBoundingClientRect().right >
            menu.current.scrollWidth
          ) {
            menuList.current.scrollLeft =
              activeItem.current.offsetLeft +
              activeItem.current.clientWidth -
              menu.current.scrollWidth;
          }
        }
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
            <a href="#game">{t('ゲーム')}</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#mod">{t('MOD')}</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#3dcg">{t('3DCG')}</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#painting">{t('絵画')}</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#animation">{t('アニメーション')}</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#app">{t('アプリ')}</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#model">{t('模型')}</a>
          </li>
          <li className={classes.menuListItem}>
            <a href="#hardware">{t('ハードウェア')}</a>
          </li>
        </ul>
        <ul className={`${classes.menuList} ${classes.languageList}`}>
          <li
            className={`${classes.menuListItem}${
              i18n.language === 'ja' ? ` ${classes.active}` : ''
            }`}
          >
            <button
              type="button"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                i18n.changeLanguage('ja');
                event.currentTarget.blur();
              }}
            >
              日本語
            </button>
          </li>
          <li
            className={`${classes.menuListItem}${
              i18n.language === 'en' ? ` ${classes.active}` : ''
            }`}
          >
            <button
              type="button"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                i18n.changeLanguage('en');
                event.currentTarget.blur();
              }}
            >
              English
            </button>
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
