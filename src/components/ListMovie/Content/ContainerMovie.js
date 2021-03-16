import React from 'react'
import Movie from './../../Movie';
export default function ContainerMovie(props) {
    const {data1}=props;
    console.log(data1);
    const render=()=>{
        if(data1&&data1.length>0){
           return data1.map((movie)=>{
            return <div key={movie.maPhim} className='col-3'>
                <Movie data={movie} />
                </div>
            })
        }
    }
    return (
       <div className='schedule_carousel_container'>
            <div className="row">
                    {render()}
            </div>
        </div>
    )
}
