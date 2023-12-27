import { useContext, useEffect, useState } from "react";
import { Button, Navbar, Nav, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context1 } from "./../../routes/CustomRoute";

const DetailPage = (props) => {
  let { id } = useParams();

  const imgNum = props.shoes[id].id + 1;

  const [count, setCount] = useState(0);
  const [alertPopup, setAlertPopup] = useState(false);
  const [num, setNum] = useState("");
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (isNaN(num) === true) {
      setAlertPopup(true);
    }
  }, [num]);

  return (
    <>
      <Container>
        <input onChange={(e) => setNum(e.target.value)} />
        {/* {popup ? <div>2초지나면 없어짐 </div> : null} */}
        {alertPopup ? <div>숫자만 입력하세요</div> : null}
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          button
        </button>
        <Row>
          <div className="col-md-6">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" + imgNum + ".jpg"
              }
              width={"100%"}
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </Row>
      </Container>

      <Nav defaultActiveKey="link0">
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            link0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            link1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            link2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );
};

const TabContent = ({ tab }) => {
  let { stock, shoes } = useContext(Context1);
  if (tab == 0) {
    return <div>link0 {stock}</div>;
  }
  if (tab == 1) {
    return <div>link1</div>;
  }
  if (tab == 2) {
    return <div>link2</div>;
  }
};

export default DetailPage;
