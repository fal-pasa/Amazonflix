/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import SlickSlider from 'react-slick'
import styled from 'styled-components'

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    opacity: 0;
    transition: ease 200ms;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
  .custon-dots {
    display: flex !important;
    position: absolute;
    top: -24px;
    right: 16px;
    opacity: 0;
    li {
      list-style: none;
      button {
        background: #fff;
        border: none;
        outline: none;
        padding: 0;
        padding:0;
        margin-left: 4px;
        font-size: 0;
        line-height: 0;
        height: 4px;
        width: 8px;
        cursor: pointer;
        opacity:.5;
        transition: ease 200ms
      }
      &.slick-active {
        button {
          opacity:1;
          transition: ease 200ms
        }
      }
    }
  }
  &:hover {
    .slick-prev,
    .slick-next,
    .custon-dots {
      opacity: 1;
      transition: ease 200ms
    }
  }
`

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`

const Slider = ({ children, length }) => (
  <Container>
    <SlickSlider {...{
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      arrows: length > 5,
      dots: length > 5,
      slidesToShow: 5,
      slidesToScroll: 5,
      dotsClass: 'custon-dots',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: false
          }
        }
      ]
    }}
    >
      {children}
    </SlickSlider>
  </Container>
)

export default Slider
