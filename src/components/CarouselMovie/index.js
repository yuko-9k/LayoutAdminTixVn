import React from 'react'
import ButttonPlay from '../../img/Icon/play-video.png';
import Slider from "react-slick";
import CarouselItem from './carouselMovieItem';
import { connect } from 'react-redux';
import CloseModal from  '../../img/Icon/close.png'
import ModalTrailer from './ModalTrailer';
function CarouselMovie(props) {
    
    const {dataBanner,test} = props;
    console.log(test);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
        
      };
    const renderCarouselItem = ()=>{
        if(dataBanner&&dataBanner.length>0){
           return dataBanner.map((item,index)=>{
                return <CarouselItem key={index} ButttonPlay={ButttonPlay} data={item} />
            })
        }
    }
    return (
        <section className="carousel_movie">
            <div className="carousel_movie_container">
                <Slider {...settings}>
                    {renderCarouselItem()}
                </Slider>
            </div>
            <ModalTrailer CloseModal={CloseModal}/>
        </section>
    )
}
const mapStateToProp = (state)=>{
    return{
        dataBanner:state.BannerState.listBanner,
        test: state.BannerState.linkTrailer
    }
}
export default connect(mapStateToProp,null)(CarouselMovie);