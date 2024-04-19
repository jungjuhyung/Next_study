import Image from "next/image";
import img01 from "/public/book_images/react.jpg"
export default function Home() {
  return (
  <>
    <h1>WelCome</h1>
    <h1>Hello, WEB~~~</h1>
    {/* 해당 이미지를 따로 import하지 않으면 width, height를 반드시 지정해야한다. */}
    <p><Image src="/book_images/domain.jpg" width={100} height={100} /></p>

    {/* 위에서 임의로 import한 img01을 src={} 안에 넣어준다. */}
    {/* 해당 방법은 width와 height가 선택 사항이다. */}
    <p><Image src={img01} /></p>
    <p><Image src={img01} width={100} height={100} /></p>
  </>
  );
}
