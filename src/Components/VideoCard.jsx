import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../service/allAPI';



function VideoCard({displayData,setDeleteResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {


    const {caption,youtubeUrl}=displayData

    const localTime=new Date()
    console.log(localTime);
  const formatedDate=localTime.toLocaleString()
  const videoHistory={caption,youtubeUrl,formatedDate}

  try{
    await saveHistory(videoHistory)

  }
  catch(err){
    console.log(err);
    
  }

    

    
    
    
    
    setShow(true)
  
  };

  const handleRemoveVideo=async(videoId)=>{

    try{
      const result = await deleteVideo(videoId)
      console.log(result);
      setDeleteResponse(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
    
  }

  const dragStarted=(e, videoId)=>{
    console.log(`Dragging started  with id${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
    

  }




  return (
    <>

      <Card  draggable={true} onDragStart={(e)=>dragStarted(e,displayData?.id)}>
        <Card.Img onClick={handleShow} style={{height:'180px'}} variant="top" src={displayData?.imageUrl} />
        <Card.Body className='d-flex align-items-center jusify-content-between'>

          <h5>{displayData?.caption}</h5>

{  !insideCategory&& 
       <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash" style={{color:'red',fontSize:'20px'}}> </i></button>
}         
         
         
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="377" src={`${displayData.youtubeUrl}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



        </Modal.Body>
       
      </Modal>






    </>
  )
}

export default VideoCard