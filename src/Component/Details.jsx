import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";




function Details(){
   
   
   const [details, setDetails] = useState([])
   const [object, setObject] = useState([])
   const fetchData = async () => {
       try{
           const get = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jaya.1918116')
           const getValue = await get.json();
           setDetails(getValue.items);
           setObject(getValue.feed)
       }catch(err){
           console.log(err.message);
       }
   };
   useEffect(()=> {
       fetchData();
      
   },[])
   console.log(details);
    

    return(
        <div>
        <h1 className="lg:text-2xl sm:text-4xl font-bold sm:ml-52 sm:mt-8 lg:ml-96 lg:pl-10 sm:pl-0 lg:align-center font-serif">{object.title} </h1>
        <div className=" lg:ml-7 sm:ml-72  grid lg:grid-cols-4 sm:grid-cols-1">
       
       {details.map(detail => 
        <div >
        <Link to={`/Profile/${detail.title}`}>
           <div key={detail.title} className="lg:mt-12 sm:mt-10  lg:w-64 sm:w-72 sm:h-auto lg:h-80 shadow-2xl ">

           <div >
           
           <img className=" lg:ml-2 sm:ml-7 lg:w-14 sm:w-20 lg:h-14 sm:h-20 lg:mt-44 sm:mt-52 lg:rounded-full sm:rounded-full absolute shadow-2xl "  alt="profile_pic" src={object.image}/>
           <img className=" lg:ml-5 sm:ml-7 lg:w-52 sm:w-56 lg:h-48 sm:h-60 lg:mt-5 rounded-lg"  alt="profile_pic" src={detail.thumbnail}/>
           
          
          
           <p className="lg:mt-4 sm:mt-12 font-serif lg:text-base sm:text-xl lg:pl-16 sm:pl-12">{detail.title.toString().substring(0,45)+"..."}</p>
           <div className="flex mt-1">
           
           <div><img  alt="calendar" className="opacity-50 lg:ml-7 sm:ml-2  lg:w-6 sm:w-8 lg:h-6 sm:h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdI67akxI9sF2Yl9WG7Jj9A8BFJX9uUFOiAA&usqp=CAU"/></div>
           <div><p className="lg:pl-5 sm:pl-2 lg:mt-1 lg:text-base sm:text-lg  text-gray-400 lg:text-sm">{detail.pubDate}</p></div>
           </div>
           </div>
           
           </div> 
           </Link>
        </div>
       )}
        </div>
        </div>
    )
}

export default Details;