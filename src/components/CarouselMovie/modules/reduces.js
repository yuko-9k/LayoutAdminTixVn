import data from '../dataBanner';
const initialState = {
    listBanner:data,
    linkTrailer:null,
}
const BannerState = (state=initialState,action)=>{
    switch(action.type){
        case "OPEN_LINK_TRAILER":
            state.linkTrailer = action.payload;
            return {...state};
        case "CLOSE_LINK_TRAILER":
            state.linkTrailer = action.payload;
            return {...state};
        default:
            return{...state}; 
    }
}
export default BannerState;