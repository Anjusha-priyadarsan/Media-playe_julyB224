import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allAPI';


function Add({setAddVideoResponse}) {

  const [videoDetails, setVideoDetails] = useState({ caption: "", imageUrl: "", youtubeUrl: "" })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[isInvalidUrl,setIsInvalidUrl]=useState(false)
  console.log(videoDetails);

  const getEmbedUrl = (link) => {
   
    if (link.includes("v=")) {

      let videoId = link.split("v=")[1].slice(0, 11)
      setVideoDetails({ ...videoDetails, youtubeUrl: `https://www.youtube.com/embed/${videoId}` })
      console.log(videoId);
      setIsInvalidUrl(false)

    }
    

    else{
      setVideoDetails({ ...videoDetails, youtubeUrl: "" })

      setIsInvalidUrl(true)

    }





  }

  const handleUpload=async()=>{
    const{caption,imageUrl,youtubeUrl}=videoDetails
    if(caption && imageUrl && youtubeUrl){


      try{
       const result=await addVideo(videoDetails)
       setAddVideoResponse(result.data)
       console.log(result);
       if(result.status>=200 && result.status<300){
        setVideoDetails({ caption: "", imageUrl: "", youtubeUrl: "" })
        toast.success(`${result.data.caption} added to your collection`)

        handleClose()
       }
       
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{

      toast.warning("enter the field completely")
    }
  }

  return (
    <>

      <div className="d-flex align-items-center">
        <h5 className='text-warning'> Upload New Video </h5>
        <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'> +</button>

      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details..</p>

          <div className='border border-3 border-info rounded p-3'>

            {/*caption  */}

            <FloatingLabel controlId="floatingInputcaption" label="Video Caption" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="enter video caption" />
            </FloatingLabel>

            {/* image url */}

            <FloatingLabel controlId="floatingInputimage" label="Image Url" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="enter image url" />
            </FloatingLabel>

            {/* utube url */}

            <FloatingLabel controlId="floatingInputurl" label="youtube Url" className="mb-3">
              <Form.Control onChange={e => getEmbedUrl(e.target.value)} type="text" placeholder="enter youtube Url" />
            </FloatingLabel>


            {
              isInvalidUrl &&             <div className='text-danger fw-bold'>Invalid Url</div>

            }




          </div>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>










    </>
  )
}

export default Add