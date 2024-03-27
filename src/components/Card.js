import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';

export default function Card(properties) {
    let props = properties.obj;
    const [curLiked, setCurLiked] = useState(false);
    function clickHandler(event) {
        if (curLiked) {
            toast.warning("Like Removed Successfully!");
        }
        else {
            toast.success("Liked Successfully!");
        }
        setCurLiked(!curLiked);
    }
    let desc = "";
    if (props.description.length > 100) {

        desc = props.description.substring(0, 100);
    }
    desc = desc + "...";
    return (
        <div className="w-[300px]">
            {/* <div className="relative"> */}
            <div className="flex flex-col bg-[#2A2B44] h-[20rem] rounded-md relative ">

                {/* <div className="absolute z-10 bottom-0 right-0">
                    <button onClick={clickHandler} className={props.title}>
                        {
                            (curLiked) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div> */}
                {/* <div className="flex flex-col bg-[#2A2B44] h-[20rem] rounded-md"> */}
                <div className="relative">

                    <img className="rounded-t-md z-1" src={props.image.url} alt={props.image.alt}></img>
                    <div className="absolute z-10 bottom-[-1rem] right-0 rounded-full h-[40px] w-[40px] bg-white flex justify-center items-center ">
                    <button onClick={clickHandler} className={props.title}>
                        {
                            (curLiked) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
                </div>
                    <div className="bg-[#2A2B44] text-white">
                        <h1 className="font-semibold text-lg leading-6 my-2">{props.title}</h1>
                        <p>{desc}</p>
                    </div>
                {/* </div> */}
            </div>

            {/* <div className="bg-[#2A2B44] text-white">
                <h1 className="font-semibold text-lg">{props.title}</h1>
                <p>{desc}</p>
            </div> */}
        </div>
    );
}