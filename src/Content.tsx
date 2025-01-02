import Section from './Section';
import classes from './Content.module.scss';

function Content() {
  return (
    <div className={classes.content}>
      <Section
        title="The 9th Floor"
        description={
          <>
            <div>
              2024年～現在
              <br />
              WebGLゲーム: Blender / Babylon.js / React / TypeScript
            </div>
            <p>
              現在開発中の「8番出口」ライクな探索ゲーム。プレビュー版をリリース済み。Webブラウザ上で動作する3Dコンテンツで、上下スクロールによって操作する。
              <br />
              PCだけでなくモバイル環境もサポート。PBRとライトマップベイクを組み合わせることで、PS5にも匹敵するビジュアルを実現した。
            </p>
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
      />
      <Section
        title="PV3D Racing"
        description={
          <>
            <div>
              2008～2009年
              <br />
              Flashゲーム: LightWave / Papervision3D / ActionScript
            </div>
            <p>
              Webブラウザ上で動作する（した）Flashベースの3Dレーシングゲーム。
              タイムアタックや車体のカスタマイズ、リプレイ機能を搭載。
              <br />
              当時の技術は処理能力がとても低く、サーキットをそのままレンダリングすることは難しかった。レイヤー合成による疑似LODや一部2D描画を駆使して広大なフィールドを再現した。
            </p>
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
        ]}
      />
    </div>
  );
}

export default Content;
