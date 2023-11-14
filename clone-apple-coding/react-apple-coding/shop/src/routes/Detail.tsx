import { useParams } from 'react-router-dom';
import { Data } from '../data';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Detail.module.css';
import { log } from 'console';

export const DetailProduct = (props: { shoes: Data[] }) => {

  let a = {
    display: 'block',
  }
  let [temp1, setTemp] = useState(a);
  useEffect(() => {
    setTimeout(() => {
      setTemp({ display: 'none' });
      console.log(1);
    }, 1000);

  }, [])



  let { id } = useParams<{ id?: string }>();

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

  return (

    <div className="container">
      <div className="alert alert-warning" style={temp1}>adasd </div>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{temp2?.title}</h4>
          <p>{temp2?.content}</p>
          <p>{temp2?.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>

  )
}