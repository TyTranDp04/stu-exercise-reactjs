import styled from "styled-components";

const HeaderContainer = styled.div`
  *{
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }
  @keyframes headerNotifyGrowth{
    from{
        opacity: 0;
        transform: scaleY(0); 
    }
    to{
        opacity: 1;
        transform: scaleY(1);
    }
  }
  position:absolute;
  width: 100%;
  .header__section{
    .header__logo{
      position: relative;
      left: 21px;
    }
    .nav__container{
      .nav__bar{
        height: 106px;
        width: 100vw;

        .nav__content{

          .nav__content-list{
            margin-left: 45px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  .header__mobile{
    display:none;
  }
  .nav__container{
    margin-left: 5%;
  }
  .nav__bar{
    height: 106px;
    width: 100vw;
  }
  .nav__content{
    .nav__content-list{
      display: flex;
      list-style: none;
      margin-bottom: 0;
      padding: 0 0 4px 0;
      .nav__link--href{
        padding: 0 15px;
        font-weight: 500;                       
        font-size: 15px;
        color: #fff;
        
      }  
      .sub__menu {
        display: flex;
        align-items: center;
        position: relative;
        .nav__link-content{
        
          .list__option-icon{
            display: flex;
            align-items: center;
            span{
              font-size: 14px;
              top: 5px;
              right: -2px;
              position: absolute;
              color: #fff;
            }
          }
        }
        .sub__menu-option{
          padding: 0;
          top: 230%;
          position: absolute;
          list-style: none;
          display: block;
          width: 150%;
          visibility: hidden;
          transition: .2s;
          opacity: 0;
          .nav__link-option{
            text-align: start;
            padding:12px 15px;
            border-top: 1px solid #e6e6e6;
             background-color: rgba(255,255,255,0.95);
            .nav__link-option--href{
              color:#2e3e49;
              font-weight: 500;
            }
            
          }
          .nav__link-option:first-child {
            border: none;
          }
          .nav__link-option:hover .nav__link-option--href{
            color: #00AEEF;
          }
        } 
      }
      .nav__link:hover .nav__link--href{
        color: #00AEEF;
      }
      .sub__menu:hover span svg{
        transform: scale(.9)

      }
      .sub__menu:hover .list__option-icon span{
        color: #00AEEF;
      }
      .sub__menu::before{
        top: 100%;
        content: '';
        position: absolute;
        width: 100%;
        height: 12vh;    
       }
      .sub__menu:hover .sub__menu-option{
        visibility: visible;
        top: 200%;
        opacity: 1;
        transform: scale3d(1,1,1); 
      }
    }
  }
 
  @media screen and (max-width: 990px) { 
  .header__mobile{
    display: block;
    background-color: #49A9E3;
    .nav__container{
      display: flex;
      justify-content: start;
      .nav__list {
        position: relative;
        display: flex;
        justify-content: start;
        align-items: center;
      }
      .nav__bar{
        top: 62.4px;
        position: absolute;
        left: 12px;
        width: 100vw;
        .nav__content{
          .nav__content-list{
            padding: 0;
            margin: 0;
            width: 100%;
            flex-direction: column;
            background-color: #fff;
            z-index; 100;
            box-shadow: 0 4px 5px rgb(0 0 0 / 15%);
            .nav__link{
              border-top: 1px solid #fff;
              width: 100%;
              display: flex;
              align-items: start;
              .nav__link-content{
                width: 100%;
               
                 display: flex;
                 flex-derection: column;
                .nav__link--href{
                  left: 0;
                }
                .nav__link-content--active{
                  background-color: color: #004274;
                }
                .list__option-icon{
                  display: flex;
                  position: relative;
                  top:  -12px;
                  right: 20px;
                  transform: rotate(-0.25turn);
                  span{
                    color: #004274;
                  }
                }
                
              }
              .nav__link-content:hover{
                background-color: #00AEEF;
              }
              .nav__link-content:hover .nav__link--href{
                color: #fff;
              }
              .sub__menu-option{
                position: relative;
                top: 100%;
                display:none;
                width: 100%;
                over-flow: hidden;
                animation: headerNotifyGrowth ease-in 0.3s;

                .nav__link-option{
                  padding: 12px 15px 12px 35px;
                  .nav__link-option--href{
                    color:#fff;
                  }
                }
              }

              .nav__link--href{ 
                font-weight: 500;
                line-height: 18px;              
                font-size: 14px;
                width: 100%;
                text-align: start;
                color: #004274;
                padding: 15px 23px 15px 35px;
                
              }
            }
            .nav__link:first-child {
              border: none;
            }
            .sub__menu {
              display: flex;
              align-items: center;
              position: relative;
              flex-direction: column;
              .nav__link-content{
                width: 100%;
                .list__option-icon{
                  display: flex;
                  position: relative;
                  transform: rotate(-0.25turn);
                  top: -6px;
                   right: 12px
                }
                .list__option-icon--active{
                  top:  12px;
                  right: 20px;
                  transform: rotate(0);
                }
              }
              
              .sub__menu-option--active{
                display: block;
                transform-origin: top;
                visibility: visible;
                opacity: 1;
                .nav__link-option{
                  background-color: #30C7FF;
                }
              }
             
            }
            .sub__menu::before{
              
              display: none; 
             }
            .sub__menu:hover span svg{
              transform: scale(1)
            }
            
            
          }
        }    
      }
      .header__menu-icon{
        position: relative;
        width:  34px;
        height: 28.63px;
      }
      .header__menu-icon--dot{
        height: 2.88px;
        background-color: #fff;
        width: 20px;
        margin: 3.5px 0;
        display: block;
      }
    }
    
    .nav__container{
      margin-left: 0;
    }
    .header__logo{
      height: 62.4px;
      a{
        img{
          height: 60px;
        }
      }
    }
  }
  
  .header__section{
    display: none;
  }

}
`

export default HeaderContainer