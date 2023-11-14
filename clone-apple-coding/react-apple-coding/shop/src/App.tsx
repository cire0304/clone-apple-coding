import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import { data, Data } from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { DetailProduct } from './routes/Detail';
import axios from 'axios';


function App() {

  let [shoes, setShoes] = useState(data);
  let [imageUrl] = useState([
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg"]);

  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>


      <Routes>
        <Route path="/" element={<div>
          <Container>
            <Row>
              {
                shoes.map((item, i) => {
                  return <ProductProfile data={shoes[i]} imageUrl={imageUrl[i]} ></ProductProfile>
                })
              }
            </Row>
          </Container>
        </div>}></Route>
        <Route path="/detail/:id" element={<DetailProduct shoes={shoes} />}></Route>

      </Routes>


        <button onClick={() => {
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((data) => {
            let copyShoes = [...shoes];
            copyShoes.push(...data.data)
            console.log(copyShoes);
            
            setShoes(copyShoes);
          })
        }}>button</button>

    </div>
  );
}


const ProductProfile = (props: { data: Data, imageUrl: string }) => {
  let data: Data = props.data;

  return (
    <>
      <Col>
        <img src={props.imageUrl} width='80%' />
        <h4> {data.title} </h4>
        <p> {data.price} </p>
      </Col>
    </>
  )
}

function Profile(props: { name: string, age: string }): JSX.Element {

  let [user, setUser] = useState('kim');

  return (
    <div></div>
  )
}

export default App;
