import { useEffect, useState } from "react";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailPage = (props) => {
  let { id } = useParams();

  const imgNum = props.shoes[id].id + 1;

  const [popup, setPopup] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(false);
    }, 2000);
  });

  const [count, setCount] = useState(0);
  return (
    <>
      <Container>
        {popup ? <div>2초지나면 없어짐 </div> : null}

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
    </>
  );
};

export default DetailPage;
