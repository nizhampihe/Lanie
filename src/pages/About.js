import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Lanie</title>
      </Helmet>
      <h1>Tentang Lanie</h1>
      <p>
        Lanie Sinalia yang merupakan singkatan dari &ldquo;<strong>Lan</strong>d
        <strong>i</strong>ng Pag<strong>e</strong> using ReactJS{" "}
        <strong>Sin</strong>gle P<strong>a</strong>ge App
        <strong>li</strong>c<strong>a</strong>tion&rdquo; yaitu suatu halaman web 
      </p>
    </>
  );
}
