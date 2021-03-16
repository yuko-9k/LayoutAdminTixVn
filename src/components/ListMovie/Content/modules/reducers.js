const initialState = {
    data1:null,
    data2:null
}
 const ContainerMovieState = (state=initialState,action)=>{
    switch(action.type){
        case "LOAD_DATA":
            state.data1=action.payload;
            return{...state}
        case "CHANGE_DATA":
            state.data1=action.payload.data1;
            state.data2=action.payload.data2;
            return{...state}
        default:
            return{...state}
    }
}
export default ContainerMovieState;