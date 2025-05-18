import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function CityForecast () {
    //must deconstruct//
    let {NewYork, London, Tokyo} = cityName;
    let {summary,details} = cityDetails; 

    const { cityName } = useParams();
    
 const [cityDetails, setCityDetails] = useState(null);
 const detailsRef = useRef(null);
  
  const fetchData = async () =>{
    let response = await fetch(
        'https://docs.google.com/document/d/1-SBlXZMDTPj2jCCcpGE2JCPgg4QJVdf6MtG69FHm2W0/edit?usp=sharing'
    );
    let data = await response.json();

    let cityDetails = data.map(obj => {
        return {...obj, summary, details}
    })
    
    setCityDetails()
  }
  //first run//
  useEffect(() => {
    fetchData();
   }, []);
    
   //second run//

   
const scrollToDetails = () => {
  detailsRef.current.scrollIntoView({ behavior: "smooth" });
 };
   
   
   
   
   
   return ( 
        <>
                <div key = {cityName.id} id="city-info-container">
                    <div ref = {detailsRef}>
                        <h2>{NewYork}</h2>
                        <button onClick={scrollToDetails}>View Details</button>
                        {NewYork.summary}
                        {NewYork.details} 
                    </div>
                    <div>
                        <h2>{London}</h2>
                        {London.summary}
                        {London.details}  
                    </div>
                    <div>
                        <h2>{Tokyo}</h2>
                        {Tokyo.summary} 
                        {Tokyo.details}  
                    </div>
                </div>
            </>
        )
        
        
};
export default CityForecast;