
import React, {  useEffect } from 'react';
import { getListDataSlide } from '../../../store/actions/home';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import {
  CardFooter,
  Container, 
  ImageCard, 
} from "./style";
const HomeSlide = () => { 
  const dispatch = useDispatch()
  const dataHomeSlide = useSelector(state => state.dataHomeSlide.dataHomeSlideState)
  const data = dataHomeSlide.data
  useEffect(() => {
    dispatch(getListDataSlide())
  }, [dispatch])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };
  return (
    <Container className="container-fluid p-0">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <div>
                <ImageCard src={item.src}></ImageCard>
              </div>
              <CardFooter className='slide__title-container'>
                <div className='slide__title'>
                  <p>{item.title}</p>
                </div>
              </CardFooter>
            </div>
          ))}
        </Slider>
      </Container>
  )
}

export default HomeSlide