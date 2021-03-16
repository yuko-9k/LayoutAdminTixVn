import React from 'react'
import DropdownIcon from '../../img/Icon/dropdown-icon.png';
import ShedulesBar from './ScheduleBar';
import Content from './Content';
export default function index(porps) {
    const {dataListMovie} = porps
    return (
        <section className="movie_schedule">
            <ShedulesBar DropdownIcon={DropdownIcon}/>
            <Content dataListMovie={dataListMovie}/>
        </section>

    )
}
