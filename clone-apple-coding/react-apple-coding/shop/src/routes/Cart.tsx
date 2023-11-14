import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCountById } from "./../stort"

export const Cart = () => {

    type RootState = {
        item: {
            id: number, name: string, count: number
        }[]
    }


    let ref = useSelector((state: RootState) => state)

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명 </th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ref.item.map((ele) => {
                            return (
                                <Item id={ele.id} name={ele.name} count={ele.count}></Item>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

const Item = (props: { id: number, name: string, count: number }) => {
    let dispatch = useDispatch();
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.count}</td>
            <td><button onClick={() => dispatch(increaseCountById(props.id))}>+</button></td>
            
        </tr>

    )

}