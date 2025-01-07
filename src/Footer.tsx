import classes from './Footer.module.scss';

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.avatar}>
        <img src="./avatar.jpg" alt="アバター" />
      </div>
      <div className={classes.profile}>
        <div className={classes.name}>
          <div className={classes.mainName}>htanjo</div>
          <div>Hiroyuki Tanjo</div>
        </div>
        <div className={classes.description}>
          Web開発者。趣味でいろいろなものを作っています。
        </div>
        <ul className={classes.social}>
          <li>
            <a href="https://github.com/htanjo" target="_blank" rel="noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://qiita.com/htanjo" target="_blank" rel="noopener">
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
  );
}

export default Footer;
