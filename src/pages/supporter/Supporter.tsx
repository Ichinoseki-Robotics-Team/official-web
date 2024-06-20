import React from "react";
import { GiHammerNails } from "react-icons/gi";
import { PageFooter, PageHeader } from "../../components";
import style from "./Supporter.module.scss";

import Picture1 from "../../assets/jlcpcb_box.jpg";
import Picture2 from "../../assets/jlcpcb_circuit.png";
import Picture3 from "../../assets/jlcpcb_impl.png";

const Schedule = () => {
  return (
    <div className={style["page"]}>
      <PageHeader />
      <main className={style["main"]}>
        <h1 className={style["title"]}>サポーター</h1>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            JLCPCB 社様
          </h1>
          <p>
            機会技術部では、JLCPCB
            社様のスポンサーシップに参加させていただいております。
            <br />
            JLCPCB
            社様は、基盤製造・部品実装・3Dプリントなどのサービスを提供している企業です。
            <br />
            弊部では、日頃よりJLCPCB
            社様のサービスを利用させていただいておりますが、
            今回のスポンサーシップを活用させていただき、より一層制作活動に励んで行きたいと考えております。
            <br />
          </p>
          <a
            href="https://jlcpcb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JLCPCB 社様のサイト
          </a>
          <div className={style["subcard"]}>
            <h2>
              <span>
                <GiHammerNails />
              </span>
              申込みの経緯
            </h2>
            <p>
              日頃より、弊部の活動の中で基盤の制作を行う際には、
              JLCPCB社様の基盤製造サービスを利用しておりました。
              そんなときに、他の高専や大学でロボコンの活動をされている方が、
              JLCPCB社様の提供するスポンサーシップを利用しているという記事を見かけ、
              弊部でも申込みを行いました。
            </p>
          </div>
          <div className={style["subcard"]}>
            <h2>
              <span>
                <GiHammerNails />
              </span>
              概要
            </h2>
            <p>
              JLCPCB社様が提供するスポンサーシップは、基盤・3D造形物などの設計・制作を行う学生団体に対して
              サポートを行うもので、指定のフォームまたはSNSアカウントに問い合わせることで申込みが可能です。
              <br />
              なんと、無料で基盤を製造していただけるということで、学生にとっては非常にありがたいサービスです😀
            </p>
            <a
              href="https://jlcpcb.com/help/article/152-how-to-apply-for-free-pcb"
              target="_blank"
              rel="noopener noreferrer"
            >
              JLCPCB - Education Programの案内
            </a>
          </div>
          <div className={style["subcard"]}>
            <h2>
              <span>
                <GiHammerNails />
              </span>
              制作した基盤
            </h2>
            <p>
              今回、制作した基盤はモータードライバとLEDドライバの基盤です。
              基盤は、左の箱のような感じで届きます。
              <br />
              中央の基盤は実装前で、右の基盤は実装後のものです。
            </p>
            <div className={style["image"]}>
              <img src={Picture1} alt="" />
              <img src={Picture2} alt="" />
              <img src={Picture3} alt="" />
            </div>
          </div>
          <p>今後とも、サポートよろしくお願いいたします。</p>
        </div>
        <div className={style["card"]}>
          <h1>
            <span>
              <GiHammerNails />
            </span>
            STM 社様
          </h1>
          <p>
            弊部では、STM社様の提供するユニバーシティ・プログラムを利用させていただき
            ロボットの制御に使用する、STM32マイコンをご提供いただいております。
          </p>
          <a
            href="https://www.stmcu.jp/university/"
            target="_blank"
            rel="noopener noreferrer"
          >
            STM ユニバーシティ・プログラム
          </a>
          <div className={style["subcard"]}>
            <h2>
              <span>
                <GiHammerNails />
              </span>
              概要
            </h2>
            <p>
              STM社様の提供するユニバーシティ・プログラムは、
              学生団体に対してSTMマイコンを無償で提供し、技術研鑽を支援するものです。
              選択するマイコンごとにポイントが決まっており、その制限の中でマイコンを選択することができます。
              <br />
              制限と言っても、ロボコンで活用させていただくには十分過ぎるくらいのご提供を頂けます。
              マイコンの種類も多岐にわたり、マイコンのチップ単体から評価ボードまで選択することができます。
            </p>
          </div>
          <p>今後とも、ご提供頂いたマイコンを利用し活動に励んでまいります。</p>
        </div>
      </main>
      <PageFooter />
    </div>
  );
};

export default Schedule;
