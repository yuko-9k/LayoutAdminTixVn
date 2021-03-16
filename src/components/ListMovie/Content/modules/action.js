export const ChangeDataPage = (data1,data2)=>{
    return{
        type:"CHANGE_DATA",
        payload:data1,data2,
    }
}
export const LoadDataDefault = (data1)=>{
    return{
        type:"LOAD_DATA",
        payload:data1,
    }
}