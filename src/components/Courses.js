import { useEffect, useState } from 'react';
import Card from './Card.js'
export default function Courses({ dataType, dataFromTheAPI }) {
    let arr = [];
    // const [arr,setArr] = useState([]);
    const [liked,setLiked] = useState([]);
    if(dataFromTheAPI.length === 0){
    // if(true){
        return (
            <div className='text-white text-lg'>No Courses Found</div>
        )
    }
    // useEffect(() => {
        if (dataType === "All") {
            let temp_arr=[]
                    Object.values(dataFromTheAPI).map((array) => {
                     array.map((obj) => {
                            temp_arr.push(obj);
                        })
                    })
                    // setArr(temp_arr);
                    arr = temp_arr;
        }
        else {
            // arr = dataFromTheAPI[dataType];
            // setArr(dataFromTheAPI[dataType]);
            arr = dataFromTheAPI[dataType]
        }
    // }, [dataType])
    return (
        
               <div className='flex flex-wrap gap-4 justify-center w-11/12 mx-auto max-w-[1200px]'>
                {

                    arr.map((obj)=>{
                        return <Card key={obj.id} obj={obj} liked={liked} setLiked={setLiked}></Card>
                    })
                }
               </div>
        
    )

}