"use client"

import axios from "axios";
import { useEffect, useState } from "react";

// guestbooklist에서 넘어오는 id는 props 안에 존재한다.
export default function Detail(props){
    const idx = props.params.id;
    const [item, setItem] = useState({})
    const API_URL = "/guestbook/detail.do?idx="+idx;
    const getData = () => {
        axios.get(API_URL)
        .then(data => {
            console.log(data)
            console.log(data.data)
            setItem(data.data);
        })
        .catch()
    }
    // 화면이 렌더링 될 때 처음 한번
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
            <li>
                {item.name}
            </li>
            <li>
                {item.subject}
            </li>
            <li>
                {item.email}
            </li>
            <li>
                {item.content}
            </li>
        </>
    )
}