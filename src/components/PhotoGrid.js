import React, {useState, useEffect} from 'react';
import PhotoCard from './PhotoCard';
import axios from "axios";



export default function PhotoGrid(){
    const [photo, setPhoto] = useState([]);

    useEffect(()=>{
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=rWuyjJMhuZ9f475HajxAAsSBBUHTgsfXt0UeuQom')
            .then((response)=>{
            setPhoto(response.data)
            console.log(response.data)
            })
            .catch(error=>{
            console.log('there was and error', error)
        })
    },[])

    return (
        <div className='container'>
            <PhotoCard photo={photo} hdurl={photo.hdurl}/>
        </div>
    )

}