const actOpenTrailer = (link)=>{
    return{
        type:"OPEN_LINK_TRAILER",
        payload:link
    };
}
const actCloseTrailer=()=>{
    return{
        type:"CLOSE_LINK_TRAILER",
        payload:null
    } 
}
export {actOpenTrailer,actCloseTrailer};