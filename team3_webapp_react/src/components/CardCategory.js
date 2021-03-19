import { React, useEffect, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { Image } from 'react-native'

function CardCategory(props) {

  const history = useHistory();
    const [category, setCategory] = useState('')

    function categorySelect(category) {
      history.push({
        pathname: "../Products",
        category: category
      });
    };


  return (
    <>
      <li className='cards__item'>
        <button className='category_link' onClick={() => categorySelect(props.category)}>
            <img style={{width: 100, height: 100, borderRadius: 400/ 2}}
              className='img'
              alt='category_image'
              src={props.src}
              category={props.category}
            />
          <div>
            <h5 className='category_text'>{props.text}</h5>
          </div>
        </button>
      </li>
    </>
  );
}

export default CardCategory;
