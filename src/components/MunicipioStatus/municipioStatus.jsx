import styles from "./municipioStatus.module.scss";
import { useEffect, useState } from "react";

export default function MunicipioStatus({ props }) {
  const nameSpace = props.name.replaceAll(" ", "-");
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const [municipio, setMunicipio] = useState();

  const fetchData = () => {
    fetch(
      `https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios/?search=${filterName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMunicipio(data);
      })
      .catch((err) => {
        return console.log("catch error", err);
      });
  };

  console.log("municipio", municipio);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Status</h1>
      <div className={styles.infoMunicipio}>
        {municipio?.map((municipio, index) => {
          return (
            <div key={index}>
              <h4>
                Município: <span> {municipio.nome}</span>
              </h4>
              <h4>
                URL:
                <span>
                  <a href={municipio.url}>{municipio.url}</a>
                </span>
              </h4>
              <h4>
                Disponibilidade dos dados:
                <span> {municipio.status == 1 ? "🟢" : "🔴"}</span>
              </h4>
              <h4>
                Permite download nos formatos:
                <span> {municipio.tipo_extracao}</span>
              </h4>
            </div>
          );
        })}

        {!municipio || municipio.length === 0 ? (
          <tr>
            <td colSpan="6">Nenhuma consulta encontrada...</td>
          </tr>
        ) : null}
      </div>
    </>
  );
}
