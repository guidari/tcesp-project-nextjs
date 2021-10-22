import styles from "./urlValidator.module.scss";

export default function UrlValidator() {
  function create() {}
  fetch(
    `http://cors-anywhere.herokuapp.com/http://tcesp-api.eba-ev685m5m.us-east-2.elasticbeanstalk.com/municipios`
  )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("catch error", err);
    });
  function checkMunicipio() {
    const nome = document.querySelector("#municipio").value;
    const url = document.querySelector("#url").value;

    const data = {
      nome,
      url,
    };

    fetch(
      `http://cors-anywhere.herokuapp.com/http://tcesp-api.eba-ev685m5m.us-east-2.elasticbeanstalk.com/municipios`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({ data }),
      }
    );
  }

  return (
    <>
      <h1>URLs</h1>

      <div className={styles.searchBox}>
        <input id="municipio" type="text" placeholder="Município" />
        <input id="url" type="text" placeholder="URL" />

        <button onClick={() => checkMunicipio()}>Checar URL</button>
      </div>
    </>
  );
}
