import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";



function Profile(){
    const parse = require('html-react-parser');
    const [details, setDetails] = useState([])
   const fetchData = async () => {
       try{
           const get = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jaya.1918116')
           const getValue = await get.json();
           setDetails(getValue.items);
       }catch(err){
           console.log(err.message);
       }
   };
   useEffect(()=> {
       fetchData();
   },[])
    var data = useParams();

   

    return(
        <div >
          {details.filter((searchData) => {
              var k = searchData.title;
              if(data.title === ""){
                  return searchData
              }else if(k.toLowerCase().includes(data.title.toLowerCase())){
                  return searchData
              }
          }).map((content) => {
              return(
                  <div >
                     {parse(`<p > ${content.description}</p>`)}<br/>
                     <img alt="profile_pic" src={content.thumbnail}/>
                      
                      {content.title}
                  </div>
              )
          })}
            Profile
            {data.title}
           
        </div>
    )
}

export default Profile;