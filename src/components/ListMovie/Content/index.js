import React from 'react'
import Slider from "react-slick";
import NextIcon from '../../../img/Icon/next-session.png';
import BackIcon from '../../../img/Icon/back-session.png';
import { actHandleChangePage } from '../../../container/HomeTemplate/HomePage/modules/action';
import ContainerMovie from './ContainerMovie';
import { connect } from 'react-redux';
function SampleNextArrow(props) {
    const { className, style, onClick, currentPage, changeIndexPage } = props;
    let handelChangeIndex = () => {
        let currentPageNew = currentPage + 1;
        onClick();
        changeIndexPage(currentPageNew);
    }
    let Class = `${className} Next`;
    let idSlick = 'NextSlick';
    return (
        <div
            id={idSlick}
            className={Class}
            style={{
                ...style,
                display: "block", position: 'absolute',
                backgroundImage: `url(${NextIcon})`,
                width: '50px',
                height: '100px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                right: '-70px',
                top: '45%'
            }}
            onClick={handelChangeIndex}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick, currentPage, changeIndexPage } = props;
    let handelChangeIndex = () => {
        let currentPageNew = currentPage - 1;
        onClick();
        changeIndexPage(currentPageNew);
    }    
    return (
        <div
            id='PrevSlick'
            className={className}
            style={{
                ...style, display: "block", backgroundImage: `url(${BackIcon})`,
                width: '50px',
                height: '100px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                left: '-70px',
                top: '45%'
            }}
            onClick={handelChangeIndex}
        />
    );
}

function index(props) {
    const { currentPage, changeIndexPage,dataListMovie} = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow currentPage={currentPage} changeIndexPage={changeIndexPage} />,
        prevArrow: <SamplePrevArrow currentPage={currentPage} changeIndexPage={changeIndexPage} />
    };
    return (
        <div className="movie_schedule_content">
            <div className='movie_panel'>
                <div className="nav_btn">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active showing" data-toggle="tab" href="#showing">Danh Sách Phim</a>
                            {/* id="showing" */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link coming" data-toggle="tab" href="#coming">Sắp Chiếu</a>
                        </li> */}
                    </ul>
                </div>
                <div className='tab-content'>
                    <div className='tab-pane active' id='showing'>
                        <Slider {...settings} className='schedule_carousel'>
                            <ContainerMovie data1={dataListMovie}/>
                            <ContainerMovie data1={dataListMovie}/>
                            {/* <ContainerMovie data2={data2}/> */}
                        </Slider>
                    </div>
                    
                    {/* <div className='tab-pane fade' id='coming'>
                        <div className='schedule_carousel'>
                            <div className='schedule_carousel_container'>
                                Coming
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
const mapStateToProp = state => {
    return {
        currentPage: state.listMovieReducer.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeIndexPage: (currentPage) => {
            dispatch(actHandleChangePage(currentPage));
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(index);