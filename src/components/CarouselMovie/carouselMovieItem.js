import React from 'react'
import { connect } from 'react-redux';
import styled from "styled-components";
import {actOpenTrailer} from './modules/actions';
function carouselMovieItem(props) {
    const Banner = styled.div`
    background-image: url(${props.data.banner});
    `;
console.log(props.data.banner)
const Open = ()=>{
    props.openTrailer(props.data.trailler);
}
    return (
        <div className="movie_item">
            <Banner className="carousel_movie_item">
                <button className="button_trailer_movie" data-toggle="modal" data-target="#modal_trailer" onClick={Open}>
                    <img src={props.ButttonPlay} alt="IconPlay" />
                </button>
            </Banner>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        openTrailer:(link)=>{
            dispatch(actOpenTrailer(link));
        }
    }
}
export default connect(null,mapDispatchToProps)(carouselMovieItem);