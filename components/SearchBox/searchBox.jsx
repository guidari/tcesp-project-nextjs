import styles from "./searchBox.module.scss";
import { useTable } from "react-table";
import React from "react";

// interface ICity {
//   municipio_extenso: string;
// }

export default function SearchBox() {
  // Fetching cities names and insert them to the select
  fetch(`https://transparencia.tce.sp.gov.br/api/json/municipios`)
    .then((res) => res.json())
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

  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Header 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Header 2",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <h1>Verificar Município</h1>

      <div className={styles.searchBox}>
        <select id="cityName" name="selectCities"></select>

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

      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
