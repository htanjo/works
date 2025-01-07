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
              現在開発中の「8番出口」ライクな探索ゲーム。
              異変を探しながら、不思議な洋館からの脱出を目指す。
              Webブラウザ上で動作する3Dコンテンツで、上下スクロールを主体としたシンプルな操作性が特徴。
            </p>
            <p>
              現在は技術デモ版として公開している。
              PCだけでなくモバイルからもアクセスが可能。
              環境に合わせて最適なレンダリングを行うよう構成した。
            </p>
            <p>
              既存のアセットは極力使わず、モデリングからマテリアル作成、プログラミングまで、スクラッチで制作した。
              箱庭ゲームであることを活かし、PBR（物理ベースレンダリング）にライトマップベイクを組み合わせることで、PS5に迫るほどのビジュアルを実現している。
            </p>
            <div>
              作品ページ（技術デモ版）
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
            src: './9th-floor-01.jpg',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
          {
            src: './9th-floor-02.jpg',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
          {
            src: './9th-floor-03.jpg',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
          {
            src: './9th-floor-04.jpg',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
          {
            src: './9th-floor-05.jpg',
            alt: 'The 9th Floor',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#a43768"
        secondaryColor="#f29d8a"
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
              大学の卒業制作でもある。
              タイムアタックや車体のカスタマイズ、リプレイ機能を搭載。
              車の挙動も自らプログラミングした。
            </p>
            <p>
              当時の技術は処理能力がとても低く、サーキットを丸ごとレンダリングすることは難しかった。
              そこでレイヤー合成による疑似LODや一部2D描画を駆使して、広大なフィールドを再現した。
            </p>
            <div>
              体験版の紹介動画
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
            src: './pv3d-racing-01.jpg',
            alt: 'PV3D Racing',
            aspectRatio: 4 / 3,
          },
          {
            src: './pv3d-racing-02.jpg',
            alt: 'PV3D Racing',
            aspectRatio: 4 / 3,
          },
          {
            src: './pv3d-racing-03.jpg',
            alt: 'PV3D Racing',
            aspectRatio: 4 / 3,
          },
          {
            src: './pv3d-racing-04.jpg',
            alt: 'PV3D Racing',
            aspectRatio: 4 / 3,
          },
        ]}
        primaryColor="#a43768"
        secondaryColor="#f29d8a"
      />
      <div id="mod" className={classes.anchor}>
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
              PCゲーム「Cyberpunk 2077」の画質を改善するMOD。
              ゲーム内のLUT（カラールックアップテーブル）を置き換えることで、白飛びを防ぎ、さらにオリジナルの状態よりも色の再現性を高める。
            </p>
            <p>
              スクリーンショットでは僅かな違いに見えるが、実際にプレイしてみるとその差は歴然。
              ゲーム本来の良さを残しながら、さらに表現力豊かな色彩が得られるとして、海外のMODコミュニティNexus
              Modsで高く評価された。
            </p>
            <p>
              リリース時にはHot Mods
              1位を獲得、リリース7ヶ月目の2024年末時点で1.4万ダウンロードを記録した。
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
            src: './emotional-vision-01.jpg',
            alt: 'Emotional Vision 2077',
            aspectRatio: 16 / 9,
          },
          {
            src: './emotional-vision-02.jpg',
            alt: 'Emotional Vision 2077',
            aspectRatio: 16 / 9,
          },
          {
            src: './emotional-vision-03.jpg',
            alt: 'Emotional Vision 2077',
            aspectRatio: 16 / 9,
          },
          {
            src: './emotional-vision-04.jpg',
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
              PCゲーム「Witcher 3」に登場するトゥサンエリアの色調を整えるMOD。
              絵画的でやや非現実感のあるトゥサンの風景を、自然なものへと変更する。
              MODにより天候設定が書き換えられ、空や遠景のシアンが抑えられている。
            </p>
            <p>
              しかし残念ながら、ゲーム本体の最新パッチにより互換性がなくなり、このMODは一般公開しなかった。
            </p>
          </>
        }
        images={[
          {
            src: './toussaint-natural-weather-01.jpg',
            alt: 'Toussaint Natural Weather',
            aspectRatio: 16 / 9,
          },
          {
            src: './toussaint-natural-weather-02.jpg',
            alt: 'Toussaint Natural Weather',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#2b866f"
        secondaryColor="#c0c866"
      />
      <div id="3dcg" className={classes.anchor}>
        <div className={classes.anchorTitle}>3DCG</div>
      </div>
      <Section
        title="変形！黄金剣士ドラン！"
        info={
          <>
            2024年
            <br />
            WebGLアニメーション: Blender / Babylon.js / React / TypeScript
          </>
        }
        description={
          <>
            <p>
              アニメ「黄金勇者ゴルドラン」を題材にしたインタラクティブな3D
              Webアニメーション。
              ページをスクロールしていくと車からロボットへと変形する。
              <br />
              自動再生機能も実装した。普通の動画との違いは、マウスやデバイスの動きに合わせて視点を動かせること。
              好きなアングルで変形の様子を眺めることができる。
            </p>
            <p>
              またVRモードもサポートし、対応スマホやVRヘッドセットでアクセスすると、実寸大のロボット変形が間近で楽しめる。
            </p>
            <div>
              作品ページ
              <br />
              <a
                href="https://htanjo.github.io/goldran/"
                target="_blank"
                rel="noopener"
              >
                https://htanjo.github.io/goldran/
              </a>
            </div>
            <div>
              プロモーション動画
              <br />
              <a
                href="https://www.youtube.com/watch?v=-gET1vW6Szk"
                target="_blank"
                rel="noopener"
              >
                https://www.youtube.com/watch?v=-gET1vW6Szk
              </a>
            </div>
            <div>
              技術解説
              <br />
              <a
                href="https://qiita.com/htanjo/items/fbb5eeab8e66b3dcb78c"
                target="_blank"
                rel="noopener"
              >
                https://qiita.com/htanjo/items/fbb5eeab8e66b3dcb78c
              </a>
            </div>
          </>
        }
        images={[
          {
            src: './dran-01.jpg',
            alt: '変形！黄金剣士ドラン！',
            aspectRatio: 1 / 1,
          },
          {
            src: './dran-02.jpg',
            alt: '変形！黄金剣士ドラン！',
            aspectRatio: 16 / 9,
          },
          {
            src: './dran-03.jpg',
            alt: '変形！黄金剣士ドラン！',
            aspectRatio: 16 / 9,
          },
          {
            src: './dran-04.jpg',
            alt: '変形！黄金剣士ドラン！',
            aspectRatio: 16 / 10,
          },
        ]}
        primaryColor="#b34739"
        secondaryColor="#e8a855"
      />
      <Section
        title="3Dスカルプト"
        info={
          <>
            2022年～現在
            <br />
            Blender / ZBrush / Corel Painter
          </>
        }
        description={
          <>
            <p>
              3Dスカルプトによるモデリングの習作。
              頭部から体まで、美術解剖学を参考にゼロからモデリングしている。
              ソフトウェアはZBrushとBlenderを体験した。
            </p>
            <p>
              また、3Dレンダリングの上から2Dでペインティングする技法（右下の作品）など、表現力の向上を目指して制作している。
            </p>
          </>
        }
        images={[
          {
            src: './sculpt-01.jpg',
            alt: '3Dスカルプト',
            aspectRatio: 935 / 772,
          },
          {
            src: './sculpt-02.jpg',
            alt: '3Dスカルプト',
            aspectRatio: 3 / 4,
          },
          {
            src: './sculpt-03.jpg',
            alt: '3Dスカルプト',
            aspectRatio: 1 / 1,
          },
        ]}
        primaryColor="#b34739"
        secondaryColor="#e8a855"
      />
      <Section
        title="インテリアのVR再現"
        info={
          <>
            2018年
            <br />
            SketchUp / Unity / Photoshop
          </>
        }
        description={
          <>
            <p>
              新居のインテリアを検討するにあたり、部屋全体を3Dでモデリングした。
              モデルはUnityにインポートしてVR空間へと落とし込み、実際に歩き回りながら家具の配置を吟味した。
            </p>
            <p>
              一方で配色については、Photoshopを使い複数のカラーバリエーションを作成、家具選びの参考とした。
              向かって左側の画像が、実際に採用となったもの。
            </p>
          </>
        }
        images={[
          {
            src: './interior-vr-01.jpg',
            alt: 'インテリアのVR再現',
            aspectRatio: 16 / 9,
          },
          {
            src: './interior-vr-02.jpg',
            alt: 'インテリアのVR再現',
            aspectRatio: 16 / 9,
          },
          {
            src: './interior-vr-03.jpg',
            alt: 'インテリアのVR再現',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#b34739"
        secondaryColor="#e8a855"
      />
      <div id="painting" className={classes.anchor}>
        <div className={classes.anchorTitle}>絵画</div>
      </div>
      <Section
        title="ファンアート"
        info={
          <>
            2011年～現在
            <br />
            デジタルペインティング: Corel Painter / Photoshop
          </>
        }
        description={
          <>
            <p>
              ゲームキャラクターを中心に、さまざまなファンアートを制作。
              作品はPixivやDeviantArtなどのアートコミュニティサイトに投稿している。
            </p>
            <p>
              特に海外での評判が良く、DeviantArtではこれまでDaily
              Deviations（サイトの全投稿作品の中から推薦で与えられる賞）を2度獲得した。
            </p>
            <div>
              Pixiv
              <br />
              <a
                href="https://www.pixiv.net/users/3063376"
                target="_blank"
                rel="noopener"
              >
                https://www.pixiv.net/users/3063376
              </a>
            </div>
            <div>
              DeviantArt
              <br />
              <a
                href="https://www.deviantart.com/htanjo/gallery/all"
                target="_blank"
                rel="noopener"
              >
                https://www.deviantart.com/htanjo/gallery/all
              </a>
            </div>
          </>
        }
        images={[
          {
            src: './fanart-01.jpg',
            alt: 'ファンアート',
            aspectRatio: 4 / 3,
          },
          {
            src: './fanart-02.jpg',
            alt: 'ファンアート',
            aspectRatio: 3 / 4,
          },
          {
            src: './fanart-03.jpg',
            alt: 'ファンアート',
            aspectRatio: 16 / 9,
          },
          {
            src: './fanart-04.jpg',
            alt: 'ファンアート',
            aspectRatio: 64 / 27,
          },
          {
            src: './fanart-05.jpg',
            alt: 'ファンアート',
            aspectRatio: 24 / 13,
          },
        ]}
        primaryColor="#197593"
        secondaryColor="#8dc69c"
      />
      <Section
        title="スケッチ"
        info={
          <>
            2012年～現在
            <br />
            シャープペン / Corel Painter
          </>
        }
        description={
          <>
            <p>
              より早く、特徴を捉えて描けるように、クロッキーやスピードペンディングを練習している。
              右下のデッサンはCorel Painterの木炭ブラシで描いたデジタル作品。
            </p>
            <p>
              各作品とも数十分から数時間で制作した。
              その一部はPixivやDeviantArt、X（Twitter）で公開している。
            </p>
          </>
        }
        images={[
          {
            src: './sketch-01.jpg',
            alt: 'スケッチ',
            aspectRatio: 2100 / 1438,
          },
          {
            src: './sketch-02.jpg',
            alt: 'スケッチ',
            aspectRatio: 800 / 1165,
          },
          {
            src: './sketch-03.jpg',
            alt: 'スケッチ',
            aspectRatio: 10 / 13,
          },
          {
            src: './sketch-04.jpg',
            alt: 'スケッチ',
            aspectRatio: 3 / 2,
          },
        ]}
        primaryColor="#197593"
        secondaryColor="#8dc69c"
      />
      <Section
        title="アーチ"
        info={
          <>
            2004年
            <br />
            屋外用水性絵の具 / ベニヤ板
          </>
        }
        description={
          <>
            <p>
              高校の体育祭に向けて制作した「アーチ」と呼ばれる巨大壁画。
              そのサイズは横7.2m、縦5.4mにもなる。
              大きさで言えば、私の人生最大の作品だ。
            </p>
            <p>
              白組所属だったため白虎をモチーフとした。
              全8組の作品から来場者投票によって選ばれる「アーチ賞」を受賞した。
            </p>
          </>
        }
        images={[
          {
            src: './arch-01.jpg',
            alt: 'アーチ',
            aspectRatio: 4 / 3,
          },
          {
            src: './arch-02.jpg',
            alt: 'アーチ',
            aspectRatio: 4 / 3,
          },
        ]}
        primaryColor="#197593"
        secondaryColor="#8dc69c"
      />
      <div id="animation" className={classes.anchor}>
        <div className={classes.anchorTitle}>アニメーション</div>
      </div>
      <Section
        title="究極変形！グランドくまモン！"
        info={
          <>
            2016年
            <br />
            手描きアニメーション: Photoshop / After Effects
          </>
        }
        description={
          <>
            <p>
              熊本地震からの復興を応援するために制作した、手描きのアニメーション作品。
              くまモンがロボットへと変形する。
            </p>
            <p>
              3Dソフトは使わず、Photoshopで1枚ずつ描いた絵をAfter
              Effectsで映像化。
              ニコニコ動画では人気を得て、1万回以上の再生とたくさんのコメントが寄せられた。
            </p>
            <div>
              ニコニコ動画
              <br />
              <a
                href="https://www.nicovideo.jp/watch/sm28850724"
                target="_blank"
                rel="noopener"
              >
                https://www.nicovideo.jp/watch/sm28850724
              </a>
            </div>
            <div>
              YouTube
              <br />
              <a
                href="https://www.youtube.com/watch?v=MOs5TOVRKfA"
                target="_blank"
                rel="noopener"
              >
                https://www.youtube.com/watch?v=MOs5TOVRKfA
              </a>
            </div>
          </>
        }
        images={[
          {
            src: './kumamon-01.jpg',
            alt: '究極変形！グランドくまモン！',
            aspectRatio: 16 / 9,
          },
          {
            src: './kumamon-02.jpg',
            alt: '究極変形！グランドくまモン！',
            aspectRatio: 16 / 9,
          },
          {
            src: './kumamon-03.jpg',
            alt: '究極変形！グランドくまモン！',
            aspectRatio: 16 / 9,
          },
          {
            src: './kumamon-04.jpg',
            alt: '究極変形！グランドくまモン！',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#bd671b"
        secondaryColor="#dac135"
      />
      <div id="app" className={classes.anchor}>
        <div className={classes.anchorTitle}>アプリ</div>
      </div>
      <Section
        title="Smart Controller"
        info={
          <>
            2020年
            <br />
            Androidアプリ: React Native / Node-RED
          </>
        }
        description={
          <>
            <p>
              家中の家電を一括管理するためのスマホアプリ。
              公開用のアプリではなく、我が家専用に開発されたもの。
            </p>
            <p>
              私の家では、家電の制御方式が赤外線、HTTP、ZigBeeとそれぞれ異なり、スマート家電として扱うには別々の専用アプリが必要だった。
            </p>
            <p>
              そこで異なるプロトコルの制御をNode-REDバックエンドで一元化し、フロントエンドはReact
              Nativeを使って単体アプリとしてビルド。
              家族のスマホにインストールした。
            </p>
            <div>
              リポジトリ（フロントエンドのみ）
              <br />
              <a
                href="https://github.com/htanjo/smart-controller"
                target="_blank"
                rel="noopener"
              >
                https://github.com/htanjo/smart-controller
              </a>
            </div>
          </>
        }
        images={[
          {
            src: './smart-controller-01.jpg',
            alt: 'Smart Controller',
            aspectRatio: 3 / 4,
          },
        ]}
        primaryColor="#4364c4"
        secondaryColor="#7eb9c4"
      />
      <div id="model" className={classes.anchor}>
        <div className={classes.anchorTitle}>模型</div>
      </div>
      <Section
        title="ドイツ重戦車 タイガー I"
        info={
          <>
            2020～2021年
            <br />
            タミヤ 1/35スケールプラモデル
          </>
        }
        description={
          <>
            <p>
              コロナ禍に制作した、戦車のプラモデル。キットをそのまま組むのではなく、ディテールアップやウェザリングを施し、戦車の重厚感を演出した。
            </p>
            <p>
              陰影の強調、木目、金属質、塗装やマーキングの剥がれ、雨だれ跡、泥汚れ、錆など、さまざまな表現を凝縮させた。
              また、兵士フィギュアの顔は綿棒の先端よりも小さいが、目鼻口まで丁寧に面相筆で塗り分けた。
            </p>
          </>
        }
        images={[
          {
            src: './tiger-1-01.jpg',
            alt: 'ドイツ重戦車 タイガー I',
            aspectRatio: 16 / 9,
          },
          {
            src: './tiger-1-02.jpg',
            alt: 'ドイツ重戦車 タイガー I',
            aspectRatio: 16 / 9,
          },
          {
            src: './tiger-1-03.jpg',
            alt: 'ドイツ重戦車 タイガー I',
            aspectRatio: 16 / 9,
          },
          {
            src: './tiger-1-04.jpg',
            alt: 'ドイツ重戦車 タイガー I',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#5c862b"
        secondaryColor="#ccc24e"
      />
      <Section
        title="リバース・トライク"
        info={
          <>
            2021～2022年
            <br />
            コトブキヤ 1/12スケールプラモデル
          </>
        }
        description={
          <>
            <p>
              ゲーム「DEATH STRANDING」に登場するバイクの模型。
              こちらは基本に忠実をコンセプトに制作した。
            </p>
            <p>
              実際のゲーム画面を参考に全塗装し、パーツ同士の合わせ目消しやデカールの段差消しまで丁寧に処理した。
              いずれウェザリング塗装を施す予定で、あえてマット調の仕上げとしている。
            </p>
          </>
        }
        images={[
          {
            src: './reverse-trike-01.jpg',
            alt: 'リバース・トライク',
            aspectRatio: 16 / 9,
          },
          {
            src: './reverse-trike-02.jpg',
            alt: 'リバース・トライク',
            aspectRatio: 16 / 9,
          },
          {
            src: './reverse-trike-03.jpg',
            alt: 'リバース・トライク',
            aspectRatio: 16 / 9,
          },
          {
            src: './reverse-trike-04.jpg',
            alt: 'リバース・トライク',
            aspectRatio: 16 / 9,
          },
        ]}
        primaryColor="#5c862b"
        secondaryColor="#ccc24e"
      />
      <div id="hardware" className={classes.anchor}>
        <div className={classes.anchorTitle}>ハードウェア</div>
      </div>
      <Section
        title="自作PC"
        info={
          <>
            2005年～現在
            <br />
            Windows / Linuxパソコン
          </>
        }
        description={
          <>
            <p>
              PCの自作は学生時代から行っている。
              現在使用しているPCは、クリエイティブとゲーミング性能に特化させたもの。
            </p>
            <p>
              処理能力と静音性を両立させるため、パーツ選定にとどまらず、電圧からファン回転数まで細かくチューニングが施してある。
              近年巨大化したグラフィックスカードの固定や、裏配線もバッチリ。
            </p>
            <p>
              他にも家庭内のサーバとして、Raspberry
              PiベースのLinuxマシンも運用している。
            </p>
          </>
        }
        images={[
          {
            src: './pc-01.jpg',
            alt: '自作PC',
            aspectRatio: 4 / 3,
          },
          {
            src: './pc-02.jpg',
            alt: '自作PC',
            aspectRatio: 4 / 5,
          },
          {
            src: './pc-01.jpg',
            alt: '自作PC',
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
