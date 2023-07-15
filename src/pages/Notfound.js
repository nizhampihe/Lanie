import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function Notfound() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Tidak ditemukan | Lanie</title>
      </Helmet>
      <h1 style={{ textAlign: "center", margin: "20px" }}>Tidak ditemukan</h1>
      <p style={{ width: "80%", margin: "auto" }}>
        Laman yang anda masukan tidak dapat ditemukan kemungkinan terdapat
        kesalahan pada kolom URL yang anda masukan harap periksa kembali. <br />
        URL yang anda masukan adalah <code>{location.pathname}</code> .
      </p>
    </>
  );
}
