import { BsCheck2 } from "react-icons/bs";

export default function Pricing({desc, title, price, list1, list2, list3, list4}) {
    return(
        <>
        
    <div class="flex flex-col justify-start items-center m-2 text-gray-900 bg-gray-100 w-96 h-96 rounded-md shadow-lg">
        <h1 class="text-3xl font-bold mt-4">{title}</h1>
        <h2 class="text-gray-600 text-sm">{desc}</h2>
        <h1 class="text-2xl font-bold mt-6">{price} <span class="text-gray-600 text-lg font-normal">/month</span></h1>

        <ul class="mt-6">
            <li class="flex items-center mx-4 text-gray-600"><BsCheck2 className="h-6 w-6 text-green-500 mr-2"></BsCheck2><span>{list1}</span></li>
            <li class="flex items-center mx-4 text-gray-600"><BsCheck2 className="h-6 w-6 text-green-500 mr-2"></BsCheck2><span>{list2}</span></li>
            <li class="flex items-center mx-4 text-gray-600"><BsCheck2 className="h-6 w-6 text-green-500 mr-2"></BsCheck2><span>{list3}</span></li>
            <li class="flex items-center mx-4 text-gray-600"><BsCheck2 className="h-6 w-6 text-green-500 mr-2"></BsCheck2><span>{list4}</span></li>
        </ul>

        <a href="#" class="mt-8 bg-red-300 hover:bg-red-400 text-black font-semibold rounded-lg text-sm py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105">Get started</a>
    </div>
   
        </>
    )
}