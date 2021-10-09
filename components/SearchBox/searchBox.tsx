import styles from "./searchBox.module.scss";

export default function SearchBox() {
  // Fetching cities names and insert them to the select
  fetch(`https://transparencia.tce.sp.gov.br/api/json/municipios`)
    .then((res: Response) => res.json())
    .then((data) => {
      let modalBody = "";
      let i = 0;
      data.forEach(function (city) {
        i++;
        modalBody += `
        <option value='${city.municipio_extenso}'>${city.municipio_extenso}</option>
      `;
      });
      document.querySelector("#cityName").innerHTML = modalBody;
    })
    .catch((err) => {
      console.log("catch error", err);
    });

  return (
    <>
      <h1>Verificar Município</h1>

      <div className={styles.searchBox}>
        <select id="cityName" name="selectCities">
          {/* <option value="01">Selecione a cidade</option> */}
        </select>

        <select name="cityInfo" id="cityInfo">
          <option value="" disabled selected>
            Selecione o ano
          </option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>

        <select name="cityMonth" id="cityMonth">
          <option value="" disabled selected>
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
          <option value="" disabled selected>
            Selecione um tipo
          </option>
          <option value="despesas">Despesas</option>
          <option value="receitas">Receitas</option>
        </select>

        <button>Pesquisar</button>
      </div>
    </>
  );
}
