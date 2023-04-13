import React from "react";
import Logo from "../../assets/logo.png";
import { PageFooter, PageHeader } from "../../components";
import style from "./Home.module.scss";
import { GiHammerNails } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style["page"]}>
      <PageHeader />
      <main className={style["main"]}>
        <div className={style["first"]}>
          <div className={style["logo"]}>
            <img src={Logo} alt="club logo" />
          </div>
          <div className={style["title"]}>
            <h1>機械技術部</h1>
            <h2>Ichinoseki Robotics Team</h2>
            <p>
              　よくぞ開いてくれたなぁ
              <br />
              ここは機械技術部の紹介ページだぁ
              <br />
              まぁゆっくり見ていってくれたまえよ
            </p>
          </div>
        </div>
        <div className={style["content"]}>
          <div className={style["card"]}>
            <h1>
              <span>
                <GiHammerNails />
              </span>
              <Link to={"/about"}>
                <a href="/about">部紹介</a>
              </Link>
            </h1>
            <p>
              ロボコン部の詳しい説明を見ることができます。機械班・回路班・制御班などの班分けや、部の歴史などを見ることができます。ぜひ一度ご覧ください。
            </p>
          </div>
          <div className={style["card"]}>
            <h1>
              <span>
                <GiHammerNails />
              </span>
              <Link to={"/schedule"}>
                <a href="/schedule">年間行事</a>
              </Link>
            </h1>
            <p>
              年間の活動について説明しています。毎年どんなことを行っているのか見てみましょう。
            </p>
            <div></div>
          </div>
          <div className={style["card"]}>
            <h1>
              <span>
                <GiHammerNails />
              </span>
              <Link to={"/contact"}>
                <a href="/contact">連絡/広報</a>
              </Link>
            </h1>
            <p>
              部で管理しているTwitter・GitHub・管理者などが乗っています。なにかあればご連絡ください。
            </p>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  );
};

export default Home;
