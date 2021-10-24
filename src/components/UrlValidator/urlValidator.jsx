import styles from "./urlValidator.module.scss";

export default function UrlValidator() {
  function create() {}
  fetch(
    // `http://cors-anywhere.herokuapp.com/http://tcesp-api.eba-ev685m5m.us-east-2.elasticbeanstalk.com/municipios`
    `http://tcesp-api.eba-ev685m5m.us-east-2.elasticbeanstalk.com/municipios`
    // `http://localhost:3333/municipios`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("catch error", err);
    });
  function checkMunicipio() {
    const nome = document.querySelector("#municipio").value;
    const url = document.querySelector("#url").value;

    // fetch(`http://cors-anywhere.herokuapp.com/http://localhost:3333/municipios`,{
    fetch(`https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode: "no-cors",
      body: JSON.stringify({ nome, url }),
    });

    // var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    // var theUrl = "http://localhost:3333/municipios";
    // xmlhttp.open("POST", theUrl);
    // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xmlhttp.send(JSON.stringify({ response: { data } }));
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
