import { useParams } from 'react-router-dom';
import { Data } from '../data';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Detail.module.css';
import { log } from 'console';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { addItem } from '../stort';
import { useDispatch } from 'react-redux';
export const DetailProduct = (props: { shoes: Data[] }) => {
  let dispatch = useDispatch();

  let [tab, setTab] = useState(1);

  let a = {
    display: 'block',
  }
  let [temp1, setTemp] = useState(a);
  useEffect(() => {
    setTimeout(() => {
      setTemp({ display: 'none' });
    }, 1000);

  }, [])

  let { id } = useParams<{ id?: string }>();


  let [b, setb] = useState(true);
  const cs = classNames(styles.start,
    b == true ? styles.end : null
  )
  useEffect(() => {
    setTimeout(() => setb(true), 100)
    return () => {
      setb(false);
    }
  }, [])




  if (typeof id === 'undefined') {
    return (
      <>
        없어용
      </>
    )
  }

  let shoes = props.shoes;
  let temp = parseInt(id);
  let temp2 = shoes.find((item) => item.id == temp)

  if (typeof temp2 == 'undefined') {
    return (
      <>
        없어용
      </>
    )
  }


  return (

    <div className={`container ${cs}`}>

      <div className="alert alert-warning" style={temp1}>adasd </div>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{temp2.title}</h4>
          <p>{temp2.content}</p>
          <p>{temp2.price}</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({
              id: typeof temp2 != 'undefined' ? temp2.id : 0,
              count: 1,
              name: typeof temp2 != 'undefined' ? temp2.title : '',
            })
            )

          }}>주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='link-1'>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link-3">hi</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tabs id={tab}></Tabs>


    </div>
  )
}

const Tabs = (props: { id: number }) => {


  let [fade, setFade] = useState(true);
  let cn = classNames(styles.start,
    fade == true ? styles.end : '')

  useEffect(() => {
    setTimeout(() => setFade(true), 100);
    return () => {
      setFade(false);
    }
  }, [props.id])


  return (
    <div className={cn}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.id]}
    </div>
  )
}