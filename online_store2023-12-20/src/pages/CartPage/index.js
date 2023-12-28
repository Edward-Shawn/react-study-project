import { Table, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CartPage = () => {
  // let id = useSelector((state) => state.id);
  // let user = useSelector((state) => state.user);
  // let stock = useSelector((state) => state.stock);

  let stock = useSelector((state) => state.cart);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item, index) => {
            console.log(item);
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>변경하기</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>{id[0]}</td>
            <td>{user[0]}</td>
            <td>{stock[0]}</td>
            <td>변경하기</td>
          </tr>
          <tr>
            <td>{id[1]}</td>
            <td>{user[1]}</td>
            <td>{stock[1]}</td>
            <td>변경하기</td>
          </tr>
          <tr>
            <td>{id[2]}</td>
            <td>{user[2]}</td>
            <td>{stock[2]}</td>
            <td>변경하기</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
