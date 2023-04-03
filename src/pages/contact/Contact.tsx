import React from "react";
import { VscTwitter, VscGithub } from "react-icons/vsc";
import { PageFooter, PageHeader } from "../../components";
import style from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={style["page"]}>
      <PageHeader />
      <main className={style["main"]}>
        <h1 className={style["title"]}>連絡・広報</h1>
        <div className={style["card"]}>
          <div className={style["icon"]}>
            <div className={style["frame"]}>
              <VscTwitter className={style["twitter"]} />
            </div>
          </div>
          <div className={style["content"]}>
            <h1>Twitter</h1>
            <p>
              　部の公式Twitterです。部の動向を随時投稿しております。ぜひフォローお願いします。
            </p>
            <a
              href="https://twitter.com/inct_robocoso"
              target="_blank"
              rel="noopener noreferrer"
            >
              一関高専機械技術部【公式】@inct_robocoso
            </a>
          </div>
        </div>
        <div className={style["card"]}>
          <div className={style["icon"]}>
            <div className={style["frame"]}>
              <VscGithub className={style["github"]} />
            </div>
          </div>
          <div className={style["content"]}>
            <h1>GitHub</h1>
            <p>
              　部の制御班が主に使用しているGitHubです。良ければ覗いてみてください。
            </p>
            <a
              href="https://github.com/Ichinoseki-Robotics-Team"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ichinoseki-Robotics-Team
            </a>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  );
};

export default Contact;
