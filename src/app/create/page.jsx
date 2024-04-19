import Image from "next/image";
import img01 from "/public/book_images/spring.jpg"
export default function Create() {
    return(
        <>
            Create!! ~~ page
            <p><Image src={img01} /></p>
        </>
    )
}