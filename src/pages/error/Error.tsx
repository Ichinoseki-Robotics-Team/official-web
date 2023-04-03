import React from "react";
import { PageFooter, PageHeader } from "../../components";
import style from "./Error.module.scss";

const Error = () => {
  return (
    <div className={style["page"]}>
      <PageHeader />
      <main className={style["main"]}>
        <h1>Oops !! Not Found ...</h1>
        <p>どんまい。</p>
      </main>
      <PageFooter />
    </div>
  );
};

export default Error;
