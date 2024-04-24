"use client"
import axios from "axios";
import { useEffect, useState } from "react"

export default function GuestBookList(props) {
    const [list, setList] = useState([])
    const API_URL = "/guestbook/list.do";
    const getData = () => {
        // list.do가 get방식으로 받기 때문에 get이다. 아니면 post이다.
        axios.get(
            API_URL
        ).then(data=>{
            console.log(data.data)
            setList(data.data)
        }

        ).catch(
            console.log("에러 발생")
        )
    }

    useEffect(() => {
        getData();
    },[])
    return(
        <div>
            <h2>GuestBookList</h2>
        </div>
    )
}