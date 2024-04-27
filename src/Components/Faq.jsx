import { IoIosArrowForward } from "react-icons/io";

export default function Faq({title, desc}) {
    return(
        <>
        
    
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer"><IoIosArrowForward className="w-5 h-5 text-gray-500 transition group-open:rotate-90"></IoIosArrowForward>
                    <span>{title}</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>{desc}</p>
                </article>
            </details>
        </li>

   
        </>
    )
}