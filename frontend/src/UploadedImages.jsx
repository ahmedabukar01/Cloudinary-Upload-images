import {Image} from 'cloudinary-react'
import { useState, useEffect } from 'react'

const UploadedImages = () => {
    const [imgIds, setImgIds] = useState('')

    const loadingImages = async ()=>{
        try {
            const res = await fetch('http://localhost:5000/api/images');
            const imgs = await res.json();
            console.log(imgs)
            setImgIds(imgs)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        loadingImages()
    },[])
  return (
    <div>
        {imgIds && imgIds.map((imgId, index)=>(
            <Image key={index} cloudName='dppktsd1f' publicId={imgId} width='300' crop='scale'/>
        ))}
    </div>
  )
}

export default UploadedImages