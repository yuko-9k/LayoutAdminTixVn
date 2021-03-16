import React from 'react'
import "./style.css"
import styled from "styled-components";
const Loading = styled.div`
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid ${(props)=>(props.primary ? "#3948db": "red")};
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
`

export default function Loader() {
        return <Loading primary></Loading>
}

