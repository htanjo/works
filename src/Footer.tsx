import { useTranslation } from 'react-i18next';
import classes from './Footer.module.scss';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.primaryFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.avatar}>
            <img src="./avatar.jpg" alt="アバター" />
          </div>
          <div className={classes.profile}>
            <div className={classes.name}>
              <div className={classes.mainName}>htanjo</div>
              <div>Hiroyuki Tanjo</div>
            </div>
            <div className={classes.description}>
              {t('Web開発者。趣味でいろいろなものを作っています。')}
            </div>
            <ul className={classes.social}>
              <li>
                <a
                  href="https://github.com/htanjo"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://qiita.com/htanjo"
                  target="_blank"
                  rel="noopener"
                >
                  Qiita
                </a>
              </li>
              <li>
                <a
                  href="https://www.pixiv.net/users/3063376"
                  target="_blank"
                  rel="noopener"
                >
                  Pixiv
                </a>
              </li>
              <li>
                <a
                  href="https://www.deviantart.com/htanjo"
                  target="_blank"
                  rel="noopener"
                >
                  DeviantArt
                </a>
              </li>
              <li>
                <a
                  href="https://next.nexusmods.com/profile/htanjo"
                  target="_blank"
                  rel="noopener"
                >
                  Nexus Mods
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@htanjo"
                  target="_blank"
                  rel="noopener"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://x.com/htanjo" target="_blank" rel="noopener">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/htanjo.bsky.social"
                  target="_blank"
                  rel="noopener"
                >
                  BlueSky
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.secondaryFooter}>
        <div className={classes.copyright}>
          Copyright &copy; {year} htanjo. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
