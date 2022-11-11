import styled from "styled-components";

const PartnersStyled = styled.div`
    background-color: #F5F5F5;
    padding-top: 90px;
    padding-bottom: 35px;
    height: 434px;
  .silde__container{
    .slide__title{
      height: 65px;
      display: flex;
      align-items: start;
      margin-bottom: 20px;
      h2{
        margin-left: 5px;
        font-size: 24px;
        line-height: 32px;
        font-family: Roboto;
         font-weight: 500;
        text-transform: inherit;
        text-align: inherit;
      }
    }
    .slide__items{
      
    }
  }
  .slick-arrow{
    top: -30px;
    background-color: red;
    right: 30px;
    width: 46px;
    height: 20px;
    border: 1px solid #00AEEF;
    background-color: transparent;
    margin: 0;
    display: inline-block;
    border-radius: 3px;
  }
 
  .slick-slider{
    margin-left: 1px;
    .slick-list{
      padding: 0 -12px;
      .slick-track{
        height: 185px;
        .slick-slide{
          box-shadow: 0 0 3px rgb(0 0 0 / 15%);
          display: flex;
          align-items: center;
          justify-content: center; 
          background-color: #fff;

        }
        .slick-slick-cloned{
      }
    }
  }
  
  .slick-slide img{
    margin: auto;
    height: 150px;
  }
  .slick-prev{
    position: absolute;
    left: 92.5%;
  }
  .slick-next{
    position: absolute;
    right: 0;
  }
  .slick-prev:before{
    content:"Prev";
  }
  .slick-next:before{
    content:"Next";
  }
  .slick-arrow:before{
    font-size: 10px;
    height: 20px;
    color: #00AEEF;
    font-family: 'Roboto';
    font-weight: 400;
  }
  .slick-dots{
    bottom: -20%;
    li{
      margin: -1px -2px;
      padding: 0;
      button:before{  
        font-size: 12px;
      }
    }  
  }
  @media (max-width: 1290px){
      .slick-prev{
        left: 88%;
      }   
  }
  @media (max-width: 1024px){
      .slick-prev{
        left: 86%;
      }
  } 
  @media (max-width: 768px){
      .slick-arrow{
        display: none!important;
      }
  }
`


export default PartnersStyled