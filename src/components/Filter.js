import {filterData} from '../data.js'
export default function Filter({dataType,setDataType}) {
    function clickHandler(event){
        setDataType(event.target.id);
    }
  return (
    // <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center border-2 border-black container">
    // <div className="w-11/12 flex flex-wrap max-w-max space-x-4 py-4 justify-center border-2 border-black">
    <div className='w-11/12 flex flex-wrap py-4 justify-center gap-x-4 mx-auto container max-w-max '>

    {
        filterData.map((ele)=>{
            // class="text-lg px-2 py-1 rounded-md font-medium 
            //  text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            //  bg-opacity-40 border-transparent
            // "



            // className={ele.title + " text-lg px-2 py-1 font-medium text-white rounded-md bg-black bg-opacity-40 hover:bg-opacity-50 border-2 transition-all duration-300 border-transparent"}


            // return <button key={ele.id} 
            // className={` ${ele.title} text-lg px-2 py-1 rounded-md font-medium 
            // text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            // ${dataType === ele.title ? 
            // "bg-opacity-60 border-white" :
            // "bg-opacity-40 border-transparent"}
            // `} onClick={clickHandler} id={ele.title}>{ele.title}</button>
            return <button key={ele.id} 
            className={` ${ele.title} py-1 px-2 rounded-md transition-all duration-75  text-white bg-black bg-opacity-50 hover:bg-opacity-60 ${(ele.title===dataType)?("outline bg-opacity-100"):("")}
            `} onClick={clickHandler} id={ele.title}>{ele.title}</button>
        })
    }
    {/* </div> */}
    </div>
  )
}