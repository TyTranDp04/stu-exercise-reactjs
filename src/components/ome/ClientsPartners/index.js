import React, { useEffect } from 'react';
import Slider from "react-slick";

import { useDispatch, useSelector } from 'react-redux';
import { getListDataPartners } from '../../../store/actions/Home';
import PartnersStyled from './style';

const ClientsPartners = () => {

  const dataPartners = useSelector(state => state.listDataPartners.listDataPartnersState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListDataPartners())
  }, [dispatch])
  const data = dataPartners.data
  var settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <PartnersStyled className='container-fluid'>
      <div className='silde__container'>
        <div className='slide__title'>
          <h2> Trusted by the Clients & Partners </h2>
        </div>
        <div className='slide__items '>
        <Slider  {...settings}>
          {
            data.map((e, index) => (
              <div key={index}>
                <a href={e.link}>
                  <img src={e.src} alt='Partners'></img>
                </a>
              </div>
            ))
          }
        </Slider>
        </div>
      </div>
    </PartnersStyled>
  )
}

export default ClientsPartners;