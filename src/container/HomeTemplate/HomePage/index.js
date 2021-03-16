import React ,{useEffect}from 'react';
import { connect } from 'react-redux';
import Carousel from '../../../components/CarouselMovie';
import ListMovie from '../../../components/ListMovie';
import {actListMovieAPI} from './modules/action';
 function HomePage(props) {
    const {dataListMovie,count,currentPage} = props;
    console.log(count,currentPage);
    useEffect(()=>{
        props.fetchListMovie(count,currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log("Render");
    },[currentPage]);
    return (
        <div>
            <Carousel/>
            <ListMovie dataListMovie={dataListMovie}/>
        </div>
    )
}
const mapStateToProp = state =>{
    return{
        Loading:state.listMovieReducer.loading,
        dataListMovie:state.listMovieReducer.dataListMovie,
        count:state.listMovieReducer.count,
        currentPage:state.listMovieReducer.currentPage,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchListMovie:(count,currentPage)=>{
            dispatch(actListMovieAPI(count,currentPage));
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(HomePage);