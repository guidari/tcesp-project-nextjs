import styles from "./municipioStatus.module.scss";
import { useEffect } from "react";

export default function MunicipioStatus({ props }) {
  const nameSpace = props.name.replaceAll(" ", "-");
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  fetch(
    `https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios/?search=${filterName}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <>
      <h1 className={styles.title}>Status</h1>

      <div className={styles.infoMunicipio}>
        <h4>
          Município: <span>nome</span>
        </h4>
        <h4>
          URL: <span>URL sddsd sds d</span>
        </h4>
        <h4>
          Disponibilidade dos dados: <span>URL sddsd sds d</span>
        </h4>
        <h4>
          Permite download nos formatos: <span>URL sddsd sds d</span>
        </h4>
      </div>
    </>
  );
}
