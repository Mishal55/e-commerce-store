
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
}

const product:Iproducts[] = [
    {
     title:"VERTICAL STRIPED SHIRT",
     id:5,
     price:"$120",
     img_url:"/shirt.png"
    },
    {
     title:"COURAGE GRAPHIC T-SHIRT",
     id:6,
     price:"$120",
     img_url:"/tshirt.png",
     old_price:"$210"
    },
    {
     title:"LOOSE FIT BERMUDA SHORTS",
     id:7,
     price:"$120",
     img_url:"/short.png"
    },
    {
     title:"FADED SKINNY JEANS",
     id:8,
     price:"$120",
     old_price:"$200",
     img_url:"/pent.png",

    }
]

// Adding key prop in star array
const star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];
export default function Top_sell(){
    const item = product.find((item)=> item.id === Number(item))

    return(
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SEELING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                              <div key={data.id}>
                                 <Link href={`/Products/${data.id}`}>
                                 <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                  <Image src={data.img_url} alt={data.title}
                                  className="w-full h-full rounded-[20px]"
                                 width={100} height={100}></Image>
                                 
                                  </div>
                                 </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <div className="flex text-yellow-400">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div>
                                <p  className="font-bold mt-1">{ data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span></p>
                                </div>
                              </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
