import React from "react";
import { GiHammerNails } from "react-icons/gi";
import { PageFooter, PageHeader } from "../../components";
import style from "./Schedule.module.scss";

const Schedule = () => {
  return (
    <div className={style["page"]}>
      <PageHeader />
      <main className={style["main"]}>
        <h1 className={style["title"]}>年間行事</h1>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            部活紹介・勧誘 (4月)
          </h1>
          <p>
            一年生を勧誘します。部活に興味のある人は一年生のフロアにきた部員についていきましょう。部室まで案内してくれます。こわくないよぉ
          </p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            NHKロボコンテーマ発表 (4・5月)
          </h1>
          <p>
            毎年４・５月に発表されます。そのあとはチームで集まってロボットのアイディアを出します。
            その後、いよいよ本格的に制作を初めます。
          </p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            中間試験 (6月)
          </h1>
          <p>
            試験一週間前から部活停止になるので、そこで勉強します。落とすな必修単位。忘れるな数学・英語・物理
          </p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            夏休み (8・9月)
          </h1>
          <p>ロボットの制作や競技の練習、最終調整を行います。</p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            ロボコン地区大会 (9・10月)
          </h1>
          <p>
            ロボコン地区大会では、他の高専・会場に行って競技をします。ついに頑張って作ってきたロボットが会場で動きます。
          </p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            ロボコン全国大会 (11月)
          </h1>
          <p>
            全国大会は毎年、東京の国技館で開催されます。全国から勝ち上がってきた高専が対戦します。
          </p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            菜の花プラザ ロボット実演 (12月)
          </h1>
          <p>地域の皆さんに、大会で使用したロボットを見ていただきます。</p>
        </div>
      </main>
      <PageFooter />
    </div>
  );
};

export default Schedule;
