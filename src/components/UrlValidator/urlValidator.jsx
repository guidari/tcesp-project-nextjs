import styles from "./urlValidator.module.scss";

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
    const nome = document.querySelector("#municipio").value;
    const url = document.querySelector("#url").value;

    fetch(`https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode: "no-cors",
      body: JSON.stringify({ nome, url }),
    });
  }

  return (
    <>
      <h1>URLs</h1>

      <div className={styles.searchBox}>
        <select id="municipio" name="municipio"></select>
        <input id="url" type="text" placeholder="URL" />

        <button onClick={() => checkMunicipio()}>Checar URL</button>
      </div>
    </>
  );
}
