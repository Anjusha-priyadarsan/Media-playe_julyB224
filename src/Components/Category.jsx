import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, deleteVideo, getAllCategory, getSingleVideo, updateCategory } from '../service/allAPI';
import VideoCard from './VideoCard'







function Category({setDeleteCategoryResponse,deletevideoViewResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  console.log(categoryName);
  console.log(allCategory);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCategory()
  }, [deletevideoViewResponse])


  const handleAddCategory = async () => {

    if (categoryName) {
      // api call

      try {
        await addCategory({ categoryName, allVideos: [] })
        setCategoryName("")
        handleClose()
        getCategory()
      }
      catch (err) {
        console.log(err);

      }


    }
    else {
      toast.warning("enter the category name")

    }



  }
  const getCategory = async () => {
    try {
      const result = await getAllCategory()
      setAllCategory(result.data)
    }
    catch (err) {
      console.log(err);

    }
  }

  const delCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId)
      getCategory()
    }
    catch (err) {
      console.log(err);

    }


  }

  const videoDropped=async(e,categoryId)=>{

    console.log(`video dropped in category with id ${categoryId}`);
    const videoId=e.dataTransfer.getData("videoId")
    console.log(videoId);
    
    console.log(`draged video with id ${videoId} and droped in category id ${categoryId}`);

    try{

      const {data}=await getSingleVideo(videoId)
      console.log(data);

      const selectedCategory=allCategory.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);

      await updateCategory(categoryId,selectedCategory)
      getCategory()

      const result=await deleteVideo(videoId)
      setDeleteCategoryResponse(result.data)
      


      

    }
    catch(err){
      console.log(err);
      
    }
    
    

  }

  const dragOverCategory=(e)=>{

    e.preventDefault()

  }
const dragStared=(e,videoDetails,CategoryId)=>{
  console.log(videoDetails);
  
  console.log(`dragging started at category with video:${videoDetails} and categoryid :${CategoryId}`);
  const dataShare={videoDetails,CategoryId}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))

  
}

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <div className="d-flex justify-content-around">
        <h3 className='text-info'>All Categories</h3>
        <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>+</button>
      </div>

      <div className='container-fluid mt-3'>
      {
        allCategory.length > 0 ?

          allCategory?.map(category => (
            
              <div droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,category.id)} className='border border-light border-3 rounded p-3 mb-3'>
                <div className="d-flex justify-content-between">
                  <h6>{category.categoryName}</h6>
                  <button onClick={() => delCategory(category.id)} className='btn' ><i class="fa-solid fa-trash" style={{ color: 'red' }}> </i></button>

                </div>
                <div className='row mt-3'>
                 {
                  category.allVideos.length>0 &&

                  category.allVideos?.map(video=>(
                    <div draggable={true} onDragStart={(e)=>dragStared(e,video,category.id)} className="col-lg-6">

                    <VideoCard displayData={video} insideCategory={true} />
  
                  </div>
                  ))


                
                 }

                </div>

              </div>

           
          ))

          :
          <div className='text-danger fw-bold fs-3'>Category not added yet</div>
      }
       </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-3 border-info rounded'>
            <FloatingLabel controlId="categoryName" label="category">
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="category" />
            </FloatingLabel>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category