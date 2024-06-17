"use client"
import { Divider, Grid } from "@mui/material"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"
import "./itemList.css"
export default function ItemList(){
    // 정보를 저장하기 위해서 usestate hook 사용
    const[list, setList] = useState([]);
    
    // http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline 이렇게 작성해도 된다.
    // next.config.mjs에서 source : "/makeup/:paht*"로 지정했기 때문에
    // 뒤 부분만 붙여주면 된다.
    const API_URL = "/makeup/v1/products.json?brand=maybelline";
    const getData = () => {
        axios.get(
            API_URL
        ).then(data => {
            console.log(data.data);
            setList(data.data);
        }).catch(
            console.log("에러")
        )
    }
    
    // 렌더링 될 때마다 실행
    // useEffect((getData)=>{})

    // 최초 한번만 실행
    useEffect(()=>{
        getData();
    },[])
    return(
        <div style={{width:"80%", margin:"auto",paddingTop:"20px"}}>
            <h2>베스트 상품</h2>
            
            // 구분선 MUI 태그
            <Divider/>
            <Grid container>
                {
                    list.map((k)=>(
                            // 화면의 1/3 의미 => xs = {3}
                        <Grid item xs={3} key={k.id}>
                            <Link href={"/view/"+k.id}>
                            <img src={k.image_link} className="img_item" />
                            <strong>{k.name}</strong>
                            </Link>
                        </Grid>
                        )
                    )
                }
            </Grid>
        </div>
    )
}