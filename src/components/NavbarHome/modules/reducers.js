import dataLocation from '../location.json';
const initialState = {
    listLocation:dataLocation,
    location:dataLocation[0]
}
const LocationState  = (state=initialState,action)=>{
    switch(action.type){
        case "CHANGE_LOCATION":
            state.location = action.payload;
            return {...state};
        default:
            return{...state};
        
    }
}
export default LocationState;