import { useEffect, useState } from "react";
import styles from "./urlValidator.module.scss";
import Router from "next/router";

export default function UrlValidator() {
  fetch(`https://transparencia.tce.sp.gov.br/api/json/municipios`)
    .then((res) => res.json())
    .then((data) => {
      let selectCity = "";
      let i = 0;
      data.forEach(function (city) {
        i++;
        selectCity += `
      <option value='${city.municipio_extenso}'>${city.municipio_extenso}</option>
    `;
      });
      document.querySelector("#municipio").innerHTML = selectCity;
    })
    .catch((err) => {
      console.log("catch error", err);
    });

  function checkMunicipio() {
    // const nome = document.querySelector("#municipio").value;
    // const tipo_url = document.querySelector("#tipo_url").value;
    // const date = new Date();

    // if (!nome || !tipo_url) {
    //   return alert("Preencha os campos para verificar a URL");
    // }

    // fetch(`https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   // mode: "no-cors",
    //   body: JSON.stringify({ nome, tipo_url, date }),
    // });
    // alert("Verificando a URL, aguarde....");
    const nome = document.querySelector("#municipio").value;
    const nameSpace = nome.replaceAll(" ", "-");
    const filterName = nameSpace
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    fetch(
      `https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios/?search=${filterName}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);




        alert(`Municipio ${data[0].nome} encontrado`);

        Router.push({
          pathname: "/testeUrl/testeUrl",
          query: {
            name: data[0].nome,
            url: data[0].url,
            tipo_url: data[0].tipo_url
          },
        });

      })
      .catch((err) => {
        console.log("catch error", err);
        return alert("Municipio não encontrado");
      });
  }

  return (
    <>
      <h1>URLs</h1>

      <div className={styles.searchBox}>
        <select id="municipio" name="municipio"></select>
        <select name="tipo_url  " id="tipo_url">
          <option value="" disabled defaultValue>
            Selecione um tipo
          </option>
          <option value="despesas">Despesas</option>
          <option value="receitas">Receitas</option>
        </select>

        <button onClick={() => checkMunicipio()}>Checar URL</button>
      </div>
    </>
  );
}
