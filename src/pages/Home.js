import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lanie</title>
      </Helmet>
      <h1>Lanie Sinalia</h1>
      <p>
        <strong>Lan</strong>d<strong>i</strong>ng Pag<strong>e</strong> using
        ReactJS <strong>Sin</strong>gle P<strong>a</strong>ge App
        <strong>li</strong>c<strong>a</strong>tion (<em>Lanie Sinalia</em>)
      </p>
      <div style={{height: "200vh"}}></div>
    </>
  );
}
