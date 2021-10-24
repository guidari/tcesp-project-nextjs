import styles from "./municipioStatus.module.scss";

export default function MunicipioStatus({ props }) {
  const nameSpace = props.name.replaceAll(" ", "-");
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  fetch(
    `https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios/?search=${filterName}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // const municipio = data.find((municipio) => municipio.nome === filterName);
      // console.log(municipio);
    });

  return (
    <>
      <h1 className={styles.title}>Status</h1>
    </>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios`
//   );
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
