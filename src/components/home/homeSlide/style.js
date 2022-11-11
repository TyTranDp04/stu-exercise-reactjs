import styled from "styled-components";

export const Container = styled.div`

  padding: 0;
  .slick-slider{
    height: 100vh;
    .slick-list{
      height:100%;
      .slick-track{
        height:100%;
      }
    }
  }
  .slide__title::before{
    content: '';
    bottom: -300%;
    width: 150vw;
    height: 200vh;
    position: absolute;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.4);;
  }
.slick-slider .slick-dots{
  left: 0px;
  bottom: 20px;
  position: absolute;
  width: 100%;
  z-index: 6;
}
.slick-dots li button:before{
  opacity: 0;
}
.slick-dots li{
  margin: 0 1px;
}
.slick-active button{
  background-color: #fff;
}
.slick-slider .slick-dots li button{
  margin-bottom: 30px;
  content:'';
  padding: 2px 0px;
  width 18px;
  height: 18px;
  border-radius: 9px;
  display:inline-block;
  border: 2px solid #fff;
}
.slick-slider .slick-dots li button:hover{
  background-color: #fff;
}



.slick-prev, .slick-next {
  top: 47%;
  z-index: 100;
  cursor: pointer;
  background: rgba(0,0,0,0.5);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}
.slick-prev{
  left: 20px;
}
.slick-next{
  right: 20px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.slick-prev:before, .slick-next:before{
    position: absolute;
    content:'';
    border: solid #fff;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 4px;
}
.slick-prev:before{
  top: 11px;
  left: 13px;
}
.slick-next:before{
  top: 13px;
  right: 15px;

}

.slick-slide img{
  width:100%;
  object-fit: cover;
  height: 100vh;
}

 `
export const ImageCard = styled.img`
    width: 600px;
`;
export const CardFooter = styled.div`
@keyframes headerNotifyGrowth{
  from{
      bottom: 50px;
      opacity: 0;
  }
  to{
      bottom: 110px;
      opacity: 1;
  }
} 
  z-index: 6;

  animation: headerNotifyGrowth ease-in 0.5s;
  position: absolute;
  left: 30px;
  bottom:110px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
 
  .slide__title{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
    
    p{
      margin: auto 50px auto 0;
      display: block;
      position: absolute;
      z-index: 100;
      color: #fff;
      background-color: rgb(247, 148, 29);;
      padding: 1vw 1.4vw;
      font-size: 1.5vw;
      border-radius: 5px;
      font-weight: 600;  
       z-index: 6;
    }
  }
  @media (max-width: 1024px){
    .slide__title p{
      font-size: 2vw;
    }
  }
  @media (max-width: 768px){
    .slide__title p{
      font-size: 3vw;
    }
  }
`