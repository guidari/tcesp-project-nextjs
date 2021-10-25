

export default function TableDespesas(props) {
    return (
        <table className="table caption-top table-striped table-hover">
            <caption>Lista de {props.info}</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome Fornecedor</th>
                    <th scope="col">Evento</th>
                    <th scope="col">Orgão</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Valor {props.info}</th>
                </tr>
            </thead>
            <tbody>
                {props.dados?.map((dado, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">#</th>
                            <td>{dado.nm_fornecedor}</td>
                            <td>{dado.evento}</td>
                            <td>{dado.orgao}</td>
                            <td>{dado.mes}</td>
                            <td>{dado.vl_despesa}</td>
                        </tr>
                    );
                })}
                {!props.dados || props.dados.length === 0 ? (
                    <tr>
                        <td colSpan="6">Nenhuma consulta encontrada...</td>
                    </tr>
                ) : null}
            </tbody>
        </table>
    )
}