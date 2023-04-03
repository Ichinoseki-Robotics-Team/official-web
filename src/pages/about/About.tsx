import React, { useEffect, useState } from "react";
import { GiHammerNails } from "react-icons/gi";
import { PageFooter, PageHeader } from "../../components";
import style from "./About.module.scss";

import Picture1 from "../../assets/img1.png";
import Picture2 from "../../assets/img2.png";
import Picture3 from "../../assets/img3.jpg";
import Picture4 from "../../assets/img4.jpg";
import Picture5 from "../../assets/img5.jpg";
import Picture6 from "../../assets/img6.jpg";
import Picture7 from "../../assets/img7.jpg";
import Picture8 from "../../assets/img8.jpg";

const imageList = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
  Picture8,
];

const About = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const setNextImg = () => {
      if (imageList.length - 1 === imgIndex) {
        setImgIndex(() => 0);
      } else {
        setImgIndex(() => imgIndex + 1);
      }
    };
    const id = setInterval(() => {
      setNextImg();
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, [imgIndex]);

  return (
    <div className={style["page"]}>
      <PageHeader />
      <main className={style["main"]}>
        <h1 className={style["title"]}>部紹介</h1>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            はじめに
          </h1>
          <p>
            　皆さんこんにちは、このページまで飛んできて頂きありがとうございまぁす。
            このページでは、機械技術部が普段どのように部活を行っているのかや弊部の歴史、主な成績を紹介します。
            そして、これらを見て機械技術部に興味を持っていただけたら幸いです。
            また、機械・ロボット・回路・電子工作・制御プログラミングに興味のある人はぜひ機械技術部までお越しください。
          </p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            活動の様子
          </h1>
          <p>
            　機械技術部は、主に毎年NHK主催の高専ロボコンに参加しています。
            毎年春に発表されるルールに沿ってアイディアを出し、
            機械班・回路班・制御班に分かれて部品を作り組み立ててロボットを完成させます。
            <br />
            　先輩が後輩に技術を教えてくれるため、工作の経験がない人や、プログラミングをしたことがない人も大歓迎です。
            興味がある人はもちろん、技術を身につけて活かしてみたい人にもおすすめの部活です。
          </p>
          <div className={style["slide"]}>
            {imageList.map((image, index) => {
              return (
                <img
                  key={image}
                  className={
                    index === imgIndex ? style["visible"] : style["hidden"]
                  }
                  src={image}
                  alt=""
                />
              );
            })}
          </div>
          <div className={style["subcard"]}>
            <h2>
              <span>
                <GiHammerNails />
              </span>
              機械班
            </h2>
            <p>
              　ロボットの部品を設計し加工組み立てを担っている。CAD(設計ソフト)の得意技はミラーである。
            </p>
          </div>
          <div className={style["subcard"]}>
            <h2>
              <span>
                <GiHammerNails />
              </span>
              回路班
            </h2>
            <p>
              　ロボットに搭載する回路を設計し、必要に応じて注文・作成する。常にハンダの香りを身にまとっている。
            </p>
          </div>
          <div className={style["subcard"]}>
            <h2>
              <span>
                <GiHammerNails />
              </span>
              制御班
            </h2>
            <p>
              　プログラムを書きロボットの動きを制御する。この部にはVimmerがいる。
            </p>
          </div>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            部の歴史
          </h1>
          <p>準備中...</p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            主な功績
          </h1>
          <ul>
            <li>
              2008 <span>生命大進化</span>：Bチーム地区大会優勝
            </li>
            <li>
              2009 <span>ダンシング・カップル</span>：
              Bチーム地区大会準優勝&全国大会ベスト8デザイン賞
            </li>
            <li>
              2011 <span>ロボ・ボウル</span>：Bチーム地区大会アイデア賞&
              全国大会マブチモーター賞
            </li>
            <li>
              2012 <span>ベスト・ペット</span>：Bチーム地区&全国優勝
            </li>
            <li>
              2013 <span>Shall We Jump?</span>：Bチーム地区大会準優勝&Shall We
              Jump賞
            </li>
            <li>
              2015 <span>輪花繚乱</span>：Bチーム地区大会優勝
            </li>
            <li>
              2016 <span>ロボット・ニューフロンティア</span>
              ：Bチーム地区大会優勝
            </li>
            <li>
              2017 <span>大江戸ロボット忍法帳</span>
              ：Aチーム地区大会優勝&全国大会ベスト4 Bチーム地区大会準優勝
            </li>
            <li>
              2018 <span>Bottle-Flip Cafe</span>：Bチーム地区大&全国大会優勝
            </li>
            <li>
              2019 <span>らん♪ RUN Laundry</span>
              ：Bチーム地区大会準優勝&全国大会ベスト8
            </li>
            <li>
              2020 <span>はぴ☆ロボ自慢</span>：Bチーム田中貴金属グループ賞
            </li>
            <li>
              2021 <span>超絶機巧(すごロボ)</span>：Aチーム地区大会セメダイン賞
              Bチーム地区大会準優勝&全国大会第8位
            </li>
            <li>
              2022 <span>ミラクル☆フライ</span>：Aチーム地区大会優勝
              Bチームセメダイン賞
            </li>
          </ul>
        </div>
      </main>
      <PageFooter />
    </div>
  );
};

export default About;
