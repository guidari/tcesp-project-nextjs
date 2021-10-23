import styles from "./searchBox.module.scss";
import Router from "next/router";

export default function SearchBox() {
  // Fetching cities names and insert them to the select
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
      document.querySelector("#cityName").innerHTML = selectCity;
    })
    .catch((err) => {
      console.log("catch error", err);
    });

  function searchMunicipio() {
    const name = document.querySelector("#cityName").value;
    const year = document.querySelector("#cityYear").value;
    const month = document.querySelector("#cityMonth").value;
    const info = document.querySelector("#cityInfo").value;

    Router.push({
      pathname: "/municipio/municipio",
      query: {
        name: name,
        year: year,
        month: month,
        info: info,
      },
    });
  }

  return (
    <>
      <h1>Verificar Município</h1>

      <div className={styles.searchBox}>
        <select id="cityName" name="cityName"></select>

        <select name="cityYear" id="cityYear">
          <option value="" disabled defaultValue>
            Selecione o ano
          </option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>

        <select name="cityMonth" id="cityMonth">
          <option value="" disabled defaultValue>
            Selecione um mês
          </option>
          <option value="01">Janeiro</option>
          <option value="02">Fevereiro</option>
          <option value="03">Março</option>
          <option value="04">Abril</option>
          <option value="05">Maio</option>
          <option value="06">Junho</option>
          <option value="07">Julho</option>
          <option value="08">Agosto</option>
          <option value="09">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>

        <select name="cityInfo" id="cityInfo">
          <option value="" disabled defaultValue>
            Selecione um tipo
          </option>
          <option value="despesas">Despesas</option>
          <option value="receitas">Receitas</option>
        </select>

        <button onClick={() => searchMunicipio()}>Pesquisar</button>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://transparencia.tce.sp.gov.br/api/json/municipios`
//   );
//   const data = await res.json();

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
