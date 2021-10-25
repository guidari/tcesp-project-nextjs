import { useEffect, useState } from "react";
import TableReceitas from "./components/tabelReceitas";
import TableDespesas from "./components/tableDespesas";
import styles from "./municipio.module.scss";

export default function MunicipioData({ props }) {
  const nameSpace = props.name.replaceAll(" ", "-");
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let contador = 1

  const [dados, setDados] = useState();
  const [carregando, setCarregando] = useState();

  const fetchData = () => {
    setCarregando(true)
    fetch(
      `https://transparencia.tce.sp.gov.br/api/json/${props.info}/${filterName}/${props.year}/${props.month}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCarregando(false)
        setDados(data)
      });
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1 className={styles.title}>
        Dados
        <span>
          {props.month}/{props.year} - {props.info}
        </span>
      </h1>
      <div className='row'>
        <div className='col-sm-12 col-md-12'>
          {
            carregando ?
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div> : null
          }
          {
            props.info == 'despesas' && !carregando ?
              <TableDespesas dados={dados} info={props.info} /> :
              <TableReceitas dados={dados} info={props.info} />
          }
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
