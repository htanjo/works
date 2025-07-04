import { useEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Section from './Section';
import classes from './Content.module.scss';

interface ContentProps {
  onChangeSection: (id: string) => void;
}

function Content({ onChangeSection }: ContentProps) {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const anchors = Array.from(
          contentRef.current.querySelectorAll(`[class*="${classes.anchor}"]`),
        );
        let activeSectionId = anchors[0].id;
        anchors.forEach((anchor) => {
          // 100px offset
          if (anchor.getBoundingClientRect().top < 100) {
            activeSectionId = anchor.id;
          }
        });
        onChangeSection(activeSectionId);
      }
    };
    handleScroll(); // Set the initial state.
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className={classes.content} ref={contentRef}>
      <div id="game" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('ゲーム')}</div>
      </div>
      <Section
        title={t('9thFloor.title')}
        info={<Trans i18nKey="9thFloor.info" />}
        description={
          <Trans
            i18nKey="9thFloor.description"
            components={{
              link1: (
                <a
                  href="https://htanjo.github.io/9th-floor/"
                  target="_blank"
                  rel="noopener"
                >
                  https://htanjo.github.io/9th-floor/
                </a>
              ),
              link2: (
                <a
                  href="https://github.com/htanjo/9th-floor/"
                  target="_blank"
                  rel="noopener"
                >
                  https://github.com/htanjo/9th-floor/
                </a>
              ),
            }}
          />
        }
        images={[
          {
            src: './images/9th_floor_01.webp',
            alt: t('9thFloor.title'),
            aspectRatio: 16 / 9,
            disableLazyLoad: true,
          },
          {
            src: './images/9th_floor_02.webp',
            alt: t('9thFloor.title'),
            aspectRatio: 16 / 9,
            disableLazyLoad: true,
          },
          {
            src: './images/9th_floor_03.webp',
            alt: t('9thFloor.title'),
            aspectRatio: 16 / 9,
            disableLazyLoad: true,
          },
          {
            src: './images/9th_floor_04.webp',
            alt: t('9thFloor.title'),
            aspectRatio: 16 / 9,
            disableLazyLoad: true,
          },
          {
            src: './images/9th_floor_05.webp',
            alt: t('9thFloor.title'),
            aspectRatio: 16 / 9,
            disableLazyLoad: true,
          },
        ]}
        primaryColor="#a43768"
        secondaryColor="#f29d8a"
      />
      <Section
        title={t('pv3dRacing.title')}
        info={<Trans i18nKey="pv3dRacing.info" />}
        description={
          <Trans
            i18nKey="pv3dRacing.description"
            components={{
              link1: (
                <a
                  href="https://www.youtube.com/watch?v=_WSd-cR0c5Y"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.youtube.com/watch?v=_WSd-cR0c5Y
                </a>
              ),
            }}
          />
        }
        images={[
          {
            src: './images/pv3d_racing_01.webp',
            alt: t('pv3dRacing.title'),
            aspectRatio: 4 / 3,
          },
          {
            src: './images/pv3d_racing_02.webp',
            alt: t('pv3dRacing.title'),
            aspectRatio: 4 / 3,
          },
          {
            src: './images/pv3d_racing_03.webp',
            alt: t('pv3dRacing.title'),
            aspectRatio: 4 / 3,
          },
          {
            src: './images/pv3d_racing_04.webp',
            alt: t('pv3dRacing.title'),
            aspectRatio: 4 / 3,
          },
        ]}
        primaryColor="#a43768"
        secondaryColor="#f29d8a"
      />
      <div id="mod" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('MOD')}</div>
      </div>
      <Section
        title={t('emotionalVision.title')}
        info={<Trans i18nKey="emotionalVision.info" />}
        description={
          <Trans
            i18nKey="emotionalVision.description"
            components={{
              link1: (
                <a
                  href="https://www.nexusmods.com/cyberpunk2077/mods/14467"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.nexusmods.com/cyberpunk2077/mods/14467
                </a>
              ),
            }}
          />
        }
        images={[
          {
            src: './images/emotional_vision_01.webp',
            alt: t('emotionalVision.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/emotional_vision_02.webp',
            alt: t('emotionalVision.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/emotional_vision_03.webp',
            alt: t('emotionalVision.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/emotional_vision_04.webp',
            alt: t('emotionalVision.title'),
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#2b866f"
        secondaryColor="#c0c866"
      />
      <Section
        title={t('toussaintNaturalWeather.title')}
        info={<Trans i18nKey="toussaintNaturalWeather.info" />}
        description={<Trans i18nKey="toussaintNaturalWeather.description" />}
        images={[
          {
            src: './images/toussaint_natural_weather_01.webp',
            alt: t('toussaintNaturalWeather.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/toussaint_natural_weather_02.webp',
            alt: t('toussaintNaturalWeather.title'),
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#2b866f"
        secondaryColor="#c0c866"
      />
      <div id="3dcg" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('3DCG')}</div>
      </div>
      <Section
        title={t('goldran.title')}
        info={<Trans i18nKey="goldran.info" />}
        description={
          <Trans
            i18nKey="goldran.description"
            components={{
              link1: (
                <a
                  href="https://htanjo.github.io/goldran/"
                  target="_blank"
                  rel="noopener"
                >
                  https://htanjo.github.io/goldran/
                </a>
              ),
              link2: (
                <a
                  href="https://www.youtube.com/watch?v=-gET1vW6Szk"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.youtube.com/watch?v=-gET1vW6Szk
                </a>
              ),
              link3: (
                <a
                  href="https://qiita.com/htanjo/items/fbb5eeab8e66b3dcb78c"
                  target="_blank"
                  rel="noopener"
                >
                  https://qiita.com/htanjo/items/fbb5eeab8e66b3dcb78c
                </a>
              ),
            }}
          />
        }
        images={[
          {
            src: './images/goldran_01.webp',
            alt: t('goldran.title'),
            aspectRatio: 1 / 1,
          },
          {
            src: './images/goldran_02.webp',
            alt: t('goldran.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/goldran_03.webp',
            alt: t('goldran.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/goldran_04.webp',
            alt: t('goldran.title'),
            aspectRatio: 16 / 10,
          },
        ]}
        primaryColor="#b34739"
        secondaryColor="#e8a855"
      />
      <Section
        title={t('sculpt.title')}
        info={<Trans i18nKey="sculpt.info" />}
        description={<Trans i18nKey="sculpt.description" />}
        images={[
          {
            src: './images/sculpt_01.webp',
            alt: t('sculpt.title'),
            aspectRatio: 935 / 772,
          },
          {
            src: './images/sculpt_02.webp',
            alt: t('sculpt.title'),
            aspectRatio: 3 / 4,
          },
          {
            src: './images/sculpt_03.webp',
            alt: t('sculpt.title'),
            aspectRatio: 1 / 1,
          },
        ]}
        primaryColor="#b34739"
        secondaryColor="#e8a855"
      />
      <Section
        title={t('interior.title')}
        info={<Trans i18nKey="interior.info" />}
        description={<Trans i18nKey="interior.description" />}
        images={[
          {
            src: './images/interior_vr_01.webp',
            alt: t('interior.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/interior_vr_02.webp',
            alt: t('interior.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/interior_vr_03.webp',
            alt: t('interior.title'),
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#b34739"
        secondaryColor="#e8a855"
      />
      <div id="painting" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('絵画')}</div>
      </div>
      <Section
        title={t('fanart.title')}
        info={<Trans i18nKey="fanart.info" />}
        description={
          <Trans
            i18nKey="fanart.description"
            components={{
              link1: (
                <a
                  href="https://www.pixiv.net/users/3063376"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.pixiv.net/users/3063376
                </a>
              ),
              link2: (
                <a
                  href="https://www.deviantart.com/htanjo/gallery/all"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.deviantart.com/htanjo/gallery/all
                </a>
              ),
            }}
          />
        }
        images={[
          {
            src: './images/fanart_01.webp',
            alt: t('fanart.title'),
            aspectRatio: 4 / 3,
          },
          {
            src: './images/fanart_02.webp',
            alt: t('fanart.title'),
            aspectRatio: 3 / 4,
          },
          {
            src: './images/fanart_03.webp',
            alt: t('fanart.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/fanart_04.webp',
            alt: t('fanart.title'),
            aspectRatio: 64 / 27,
          },
          {
            src: './images/fanart_05.webp',
            alt: t('fanart.title'),
            aspectRatio: 4 / 3,
          },
        ]}
        primaryColor="#197593"
        secondaryColor="#8dc69c"
      />
      <Section
        title={t('sketch.title')}
        info={<Trans i18nKey="sketch.info" />}
        description={<Trans i18nKey="sketch.description" />}
        images={[
          {
            src: './images/sketch_01.webp',
            alt: t('sketch.title'),
            aspectRatio: 2100 / 1438,
          },
          {
            src: './images/sketch_02.webp',
            alt: t('sketch.title'),
            aspectRatio: 800 / 1165,
          },
          {
            src: './images/sketch_03.webp',
            alt: t('sketch.title'),
            aspectRatio: 10 / 13,
          },
          {
            src: './images/sketch_04.webp',
            alt: t('sketch.title'),
            aspectRatio: 3 / 2,
          },
        ]}
        primaryColor="#197593"
        secondaryColor="#8dc69c"
      />
      <Section
        title={t('arch.title')}
        info={<Trans i18nKey="arch.info" />}
        description={<Trans i18nKey="arch.description" />}
        images={[
          {
            src: './images/arch_01.webp',
            alt: t('arch.title'),
            aspectRatio: 581 / 428,
          },
          {
            src: './images/arch_02.webp',
            alt: t('arch.title'),
            aspectRatio: 4 / 3,
          },
        ]}
        primaryColor="#197593"
        secondaryColor="#8dc69c"
      />
      <div id="animation" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('アニメーション')}</div>
      </div>
      <Section
        title={t('kumamon.title')}
        info={<Trans i18nKey="kumamon.info" />}
        description={
          <Trans
            i18nKey="kumamon.description"
            components={{
              link1: (
                <a
                  href="https://www.nicovideo.jp/watch/sm28850724"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.nicovideo.jp/watch/sm28850724
                </a>
              ),
              link2: (
                <a
                  href="https://www.youtube.com/watch?v=MOs5TOVRKfA"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.youtube.com/watch?v=MOs5TOVRKfA
                </a>
              ),
            }}
          />
        }
        images={[
          {
            src: './images/kumamon_01.webp',
            alt: t('kumamon.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/kumamon_02.webp',
            alt: t('kumamon.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/kumamon_03.webp',
            alt: t('kumamon.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/kumamon_04.webp',
            alt: t('kumamon.title'),
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#bd671b"
        secondaryColor="#dac135"
      />
      <div id="app" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('アプリ')}</div>
      </div>
      <Section
        title={t('smartController.title')}
        info={<Trans i18nKey="smartController.info" />}
        description={
          <Trans
            i18nKey="smartController.description"
            components={{
              link1: (
                <a
                  href="https://github.com/htanjo/smart-controller"
                  target="_blank"
                  rel="noopener"
                >
                  https://github.com/htanjo/smart-controller
                </a>
              ),
            }}
          />
        }
        images={[
          {
            src: './images/smart_controller_01.webp',
            alt: t('smartController.title'),
            aspectRatio: 3 / 4,
          },
        ]}
        primaryColor="#4364c4"
        secondaryColor="#7eb9c4"
      />
      <div id="model" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('模型')}</div>
      </div>
      <Section
        title={t('tiger1.title')}
        info={<Trans i18nKey="tiger1.info" />}
        description={<Trans i18nKey="tiger1.description" />}
        images={[
          {
            src: './images/tiger_1_01.webp',
            alt: t('tiger1.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/tiger_1_02.webp',
            alt: t('tiger1.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/tiger_1_03.webp',
            alt: t('tiger1.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/tiger_1_04.webp',
            alt: t('tiger1.title'),
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#5c862b"
        secondaryColor="#ccc24e"
      />
      <Section
        title={t('reverseTrike.title')}
        info={<Trans i18nKey="reverseTrike.info" />}
        description={<Trans i18nKey="reverseTrike.description" />}
        images={[
          {
            src: './images/reverse_trike_01.webp',
            alt: t('reverseTrike.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/reverse_trike_02.webp',
            alt: t('reverseTrike.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/reverse_trike_03.webp',
            alt: t('reverseTrike.title'),
            aspectRatio: 16 / 9,
          },
          {
            src: './images/reverse_trike_04.webp',
            alt: t('reverseTrike.title'),
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#5c862b"
        secondaryColor="#ccc24e"
      />
      <div id="hardware" className={classes.anchor}>
        <div className={classes.anchorTitle}>{t('ハードウェア')}</div>
      </div>
      <Section
        title={t('pc.title')}
        info={<Trans i18nKey="pc.info" />}
        description={<Trans i18nKey="pc.description" />}
        images={[
          {
            src: './images/pc_01.webp',
            alt: t('pc.title'),
            aspectRatio: 4 / 3,
          },
          {
            src: './images/pc_02.webp',
            alt: t('pc.title'),
            aspectRatio: 4 / 5,
          },
          {
            src: './images/pc_03.webp',
            alt: t('pc.title'),
            aspectRatio: 4 / 3,
          },
        ]}
        primaryColor="#7857a0"
        secondaryColor="#a8b1e5"
      />
    </div>
  );
}

export default Content;
