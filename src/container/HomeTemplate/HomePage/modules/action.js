import * as AtctionTypes from "./constants.js";
import api from "./../../../../api/index.js";
export const actListMovieAPI=(count,currentPage)=>{
    return (dispatch)=>{
        dispatch(actListMovieRequest())
        api.get(`/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP04&soTrang=${currentPage}&soPhanTuTrenTrang=${count}`)
        .then((rs)=>{
            dispatch(actListMovieSuccess(rs.data));
        }).catch((err)=>{
            dispatch(actListMovieFailed(err));
        })
        ;
    }
}
export const actListMovieRequest = () =>{
    return{
        type:AtctionTypes.LIST_MOVIE_REQUEST,
    };
};
export const actListMovieSuccess = (data) =>{
    return{
        type:AtctionTypes.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

export const actListMovieFailed= (err) =>{
    return{
        type:AtctionTypes.LIST_MOVIE_FAILED,
        payload: err,
    };
};

export const actHandleChangePage=(index)=>{
    return{
        type:AtctionTypes.LIST_MOVIE_CHANGE_PAGE_POST,
        payload:index,
    }
}