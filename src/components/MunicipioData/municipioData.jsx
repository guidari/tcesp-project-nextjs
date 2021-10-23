import styles from "./municipio.module.scss";

export default function MunicipioData({ props }) {
  const nameSpace = props.name.replaceAll(" ", "-");
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  fetch(
    `https://transparencia.tce.sp.gov.br/api/json/${props.info}/${filterName}/${props.year}/${props.month}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <>
      <h1 className={styles.title}>
        Dados
        <span>
          {props.month}/{props.year} - {props.info}
        </span>
      </h1>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
