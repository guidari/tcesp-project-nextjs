import { useEffect, useState } from "react";
import styles from "./urlValidator.module.scss";
import Router from "next/router";

export default function UrlValidator() {
  const [dados, setDados] = useState();
  const [carregando, setCarregando] = useState();

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

  const getPython = (url) => {
    setCarregando(true);
    //console.log(url);
    fetch("http://localhost:8080/?url=" + url)
      .then((res) => {
        res.json;
      })
      .then((data) => {
        setCarregando(false);
        return data;
      })
      .finally(() => {
        setCarregando(false);
      });
  };

  function checkMunicipio() {
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

        const dataPython = getPython(data[0].url);
        console.log(dataPython);

        const tipo_extracao = dataPython;

        const date = new Date();

        fetch("https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // mode: "no-cors",
          body: JSON.stringify({ nome, tipo_extracao, date }),
        });
        alert("Verificando a URL, aguarde....");


        //Router.push({ 
        //  pathname: "/municipio/municipio",
        //  query: {
        //    name: data[0].nome,
        //    url: data[0].url,
        //    tipo_url: data[0].tipo_url
        //  },
        //});
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

<<<<<<< HEAD
  {
    carregando ? (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <button onClick={() => checkMunicipio()}>Checar URL</button>
    )
  }
=======
        {
          carregando ?
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> :
            <button onClick={() => checkMunicipio()}>Checar URL</button>
        }
>>>>>>> integracao_python
      </div >
    </>
  );
}
