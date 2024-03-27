import React, { useEffect, useState } from "react";
import { ToastContainer, cssTransition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.js';
import Filter from './components/Filter.js';
import Courses from './components/Courses.js';
import Loading from "./components/Loading.js";
const App = () => {
    const [dataType,setDataType] = useState('All');
    const [loading,setLoading] = useState(true);
    // const dataFromTheAPI = [];
    const [dataFromTheAPI,setDataFromTheAPI] = useState([]);
    const fetchFromAPI = async ()=>{
      setLoading(true);
      const response = await fetch("https://codehelp-apis.vercel.app/api/get-top-courses");
      const obj = await response.json();
      setDataFromTheAPI(obj.data);
      setLoading(false);
    }
// Code to be added
    useEffect(()=>{
      fetchFromAPI();
    },[]);
    useEffect(()=>{
      let ele = document.querySelector('.wrapper');
      if(loading){
        ele.classList.add('wrapper-for-loader');
      }
      else{
        ele.classList.remove('wrapper-for-loader');
      }
    },[loading])
    return (
      <div className="wrapper h-[100vh] flex flex-col">
      <Header/>
      <div className="bg-[#4A4E69] flex flex-1 flex-col">
      <Filter dataType={dataType} setDataType={setDataType}/>
      <div className="flex flex-1 justify-center items-center">
      {

        (loading)?(<Loading/>):(<Courses dataType={dataType} dataFromTheAPI = {dataFromTheAPI}/>)
        // <Loading/>
      }
      </div>
      </div>
      </div>
    )
};

export default App;
