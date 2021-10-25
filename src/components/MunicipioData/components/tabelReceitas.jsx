

export default function TableReceitas(props) {
    return (
        <table className="table caption-top table-striped table-hover">
            <caption>Lista de {props.info}</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Código e descrição da Fonte de Recursos</th>
                    <th scope="col">Código e descrição do Código de Aplicação Fixo</th>
                    <th scope="col">Código e descrição da Alinea</th>
                    <th scope="col">Código e descrição da Subalinea</th>
                    <th scope="col">Valor {props.info}</th>
                </tr>
            </thead>
            <tbody>
                {props.dados?.map((dado, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">#</th>
                            <td>{dado.ds_fonte_recurso}</td>
                            <td>{dado.ds_cd_aplicacao_fixo}</td>
                            <td>{dado.ds_alinea}</td>
                            <td>{dado.ds_subalinea}</td>
                            <td>{dado.vl_arrecadacao}</td>
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