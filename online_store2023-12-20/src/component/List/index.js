import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
const ListItem = (props) => {
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width={"80%"}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  );
};

export default ListItem;
