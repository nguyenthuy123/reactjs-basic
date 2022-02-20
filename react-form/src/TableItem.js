
function TableItem({number,todo}) {


    return (
       
        <tr>
            <th scope="row">{number}</th>
            <td>{todo.name}</td>
            <td>{todo.email}</td>
            <td>{todo.body}</td>
        </tr>
    )
}

export default TableItem;