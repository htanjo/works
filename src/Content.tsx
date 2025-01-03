import { useEffect, useRef } from 'react';
import Section from './Section';
import classes from './Content.module.scss';

interface ContentProps {
  onChangeSection: (id: string) => void;
}

function Content({ onChangeSection }: ContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const anchors = Array.from(
          contentRef.current.querySelectorAll(`[class*="${classes.anchor}"]`),
        );
        let activeSectionId = anchors[0].id;
        anchors.forEach((anchor) => {
          if (anchor.getBoundingClientRect().top <= 0) {
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
        <div className={classes.anchorTitle}>ゲーム</div>
      </div>
      <Section
        title="The 9th Floor"
        info={
          <>
            2024年～現在
            <br />
            WebGLゲーム: Blender / Babylon.js / React / TypeScript
          </>
        }
        description={
          <>
            <p>
              開発中の「8番出口」ライクな探索ゲーム。
              異変を探しながら、不思議な洋館からの脱出を目指す。
              Webブラウザ上で動作する3Dコンテンツで、上下スクロールによって操作する。
              <br />
              現在、技術デモとして公開。
              PCだけでなくモバイル環境もサポートしている。
              PBRとライトマップベイクを組み合わせることで、PS5にも匹敵するほどのビジュアルを実現した。
            </p>
            <div>
              作品ページ（技術デモ）
              <br />
              <a
                href="https://htanjo.github.io/9th-floor/"
                target="_blank"
                rel="noopener"
              >
                https://htanjo.github.io/9th-floor/
              </a>
            </div>
            <div>
              リポジトリ
              <br />
              <a
                href="https://github.com/htanjo/9th-floor/"
                target="_blank"
                rel="noopener"
              >
                https://github.com/htanjo/9th-floor/
              </a>
            </div>
          </>
        }
        images={[
          {
            src: 'https://placehold.co/1600x900?text=1',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=2',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=3',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=4',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#a43768"
        secondaryColor="#e5af70"
      />
      <Section
        title="PV3D Racing"
        info={
          <>
            2008～2009年
            <br />
            Flashゲーム: LightWave / Papervision3D / ActionScript
          </>
        }
        description={
          <>
            <p>
              Webブラウザ上で動作する（した）Flashベースの3Dレーシングゲーム。
              タイムアタックや車体のカスタマイズ、リプレイ機能を搭載。
              <br />
              当時の技術は処理能力がとても低く、サーキットをそのままレンダリングすることは難しかった。
              レイヤー合成による疑似LODや一部2D描画を駆使して広大なフィールドを再現した。
            </p>
            <div>
              紹介動画
              <br />
              <a
                href="https://www.youtube.com/watch?v=_WSd-cR0c5Y"
                target="_blank"
                rel="noopener"
              >
                https://www.youtube.com/watch?v=_WSd-cR0c5Y
              </a>
            </div>
          </>
        }
        images={[
          {
            src: 'https://placehold.co/1600x900?text=1',
            alt: 'PV3D Racing',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=2',
            alt: 'PV3D Racing',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=3',
            alt: 'PV3D Racing',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=4',
            alt: 'PV3D Racing',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#a43768"
        secondaryColor="#e5af70"
      />
      <div id="mod" className={classes.anchor}>
        {' '}
        <div className={classes.anchorTitle}>MOD</div>
      </div>
      <Section
        title="Emotional Vision 2077"
        info={
          <>
            2024年
            <br />
            グラフィックスMOD: DaVinci Resolve / Photoshop / WolvenKit
          </>
        }
        description={
          <>
            <p>
              「Cyberpunk 2077」の画質を改善するMOD。
              ゲーム内LUTとビネット効果を置き換えることで、白飛びを防ぎ、さらに色の再現性を標準の状態よりも高める。
              <br />
              海外のMODコミュニティNexus Modsで高く評価され、リリース時にはHot
              Mods
              1位を獲得、リリース7ヶ月目の2024年末時点では1.4万ダウンロードを達成した。
            </p>
            <div>
              MOD配布ページ
              <br />
              <a
                href="https://www.nexusmods.com/cyberpunk2077/mods/14467"
                target="_blank"
                rel="noopener"
              >
                https://www.nexusmods.com/cyberpunk2077/mods/14467
              </a>
            </div>
          </>
        }
        images={[
          {
            src: 'https://placehold.co/1600x900?text=1',
            alt: 'Emotional Vision 2077',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=2',
            alt: 'Emotional Vision 2077',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=3',
            alt: 'Emotional Vision 2077',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=4',
            alt: 'Emotional Vision 2077',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#2b866f"
        secondaryColor="#c0c866"
      />
      <Section
        title="Toussaint Natural Weather"
        info={
          <>
            2017年
            <br />
            グラフィックスMOD: MODkit / W3Edit
          </>
        }
        description={
          <>
            <p>
              「Witcher 3」に登場するトゥサンエリアの色調を整えるMod。
              絵画的でやや非現実的だったトゥサンの風景を、天候設定を書き換えることでより自然なものへと変更する。
              <br />
              ゲーム本体の最新パッチによって互換性がなくなったため、このMODは一般公開していない。
            </p>
          </>
        }
        images={[
          {
            src: 'https://placehold.co/1600x900?text=1',
            alt: 'Toussaint Natural Weather',
            aspectRatio: 16 / 9,
          },
          {
            src: 'https://placehold.co/1600x900?text=2',
            alt: 'Toussaint Natural Weather',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#2b866f"
        secondaryColor="#c0c866"
      />
    </div>
  );
}

export default Content;
