import { useEffect, useState } from "react"
import styles from './ultimasConsultas.module.scss';

export default function UltimasConsultas() {
    const [dados, setDados] = useState()

    const fetchData = () => {
        fetch('https://6174b13008834f0017c709d5.mockapi.io/api/v1/municipios')
            .then((res) => res.json())
            .then((data) => {
                setDados(data)
            })
            .catch((err) => {
                return console.log("catch error", err);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className={styles.tabelaUltConsultas}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Status</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Dado</th>
                        <th scope="col">Consultado em</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dados?.map((dado, index) => {
                            return <tr key={index}>
                                <th scope='row'>{dado.status == 1 ? '🟢' : '🔴'}</th>
                                <td>{dado.nome}</td>
                                <td>{dado.tipo_extracao}</td>
                                <td>{formataData(dado.created_at)}</td>
                            </tr>
                        })
                    }
                    {(!dados || dados.length === 0) ? <tr><td colSpan='6'>Nenhuma consulta encontrada...</td></tr> : null}
                </tbody>
            </table>
        </div>
    )
}

function formataData(data) {
    data = new Date(data)
    let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
    return dataFormatada
}
