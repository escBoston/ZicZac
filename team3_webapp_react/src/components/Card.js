
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProductDetails from './ProductDetail';

function CardItem(props) {
  const history = useHistory();

  function itemSelect(title) {
    history.push({
      pathname: "./ProductDetails",
      title: title
    });
  };

  return (
    <>
      <li className='cards__item'>
        <button className='cards__item__link' onClick={() => itemSelect(props.text)}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Product Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </button>
      </li>
    </>
  );
}

export default CardItem;
