
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { getListDataSlide } from '../../../store/actions/home';
import LoadingHome from '../../Loading/LoadingHome';
import {
  CardFooter,
  Container,
  ImageCard
} from "./style";

const HomeSlide = () => {
  const dataHomeSlide = useSelector(state => state.dataHomeSlide.dataHomeSlideState)
  const dispatch = useDispatch()
  const data = dataHomeSlide.data
  const loading = dataHomeSlide.loading;
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
    <>
      {loading ? <LoadingHome /> 
      : <Container className="container-fluid p-0">
        <Slider {...settings}>
          {data?.map((item) => (
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
      </Container>}

    </>
  )
}

export default HomeSlide