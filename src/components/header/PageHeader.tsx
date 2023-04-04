import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { GiGearHammer } from "react-icons/gi";
import style from "./PageHeader.module.scss";
import { Link } from "react-router-dom";

const PageHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style["base"]}>
      <div className={style["content"]}>
        <div className={style["button"]} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
        <div className={style["mark"]}>
          <GiGearHammer />
        </div>
        <div className={style["title"]}>
          <span>機械技術部</span>
        </div>
      </div>
      <nav className={style[isOpen ? "menu-open" : "menu-close"]}>
        <div className={style["item"]}>
          <Link to={"/home"}>
            <a href="/home">ホーム</a>
          </Link>
        </div>
        <div className={style["item"]}>
          <Link to={"/about"}>
            <a href="/about">部紹介</a>
          </Link>
        </div>
        <div className={style["item"]}>
          <Link to={"/schedule"}>
            <a href="/schedule">年間行事</a>
          </Link>
        </div>
        <div className={style["item"]}>
          <Link to={"/contact"}>
            <a href="/contact">連絡/広報</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
