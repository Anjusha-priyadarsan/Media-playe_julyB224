import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { addVideo, getAllVideos, getSingleCategory, updateCategory } from '../service/allAPI'






function View({ addVideoResponse, deleteVideoCategoryResponse,setDeletevideoViewResponseset }) {

  const [allVideos, setAllVideos] = useState([])

  const [deleteResponse, setDeleteResponse] = useState("")

  useEffect(() => {

    getVideos()


  }, [addVideoResponse, deleteResponse, deleteVideoCategoryResponse])

  console.log(allVideos);

  const getVideos = async () => {
    try {
      const result = await getAllVideos()
      console.log(result.data);
      setAllVideos(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }
  const dragOverView = (e) => {

    e.preventDefault()

  }

  const dropCategoryVideo = async (e) => {
    const { videoDetails, CategoryId } = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(videoDetails, CategoryId);

    try {
      const { data } = await getSingleCategory(CategoryId)
      console.log(data);

      const upadetedCategoryVideoList = data.allVideos.filter(item => item.id != videoDetails.id)
      console.log(upadetedCategoryVideoList);

      const { id, categoryName } = data

      const categoryResult = await updateCategory(id, { id, categoryName, allVideos: upadetedCategoryVideoList })
      setDeletevideoViewResponseset(categoryResult.data)

      await addVideo(videoDetails)
      getVideos()







    }
    catch (err) {
      console.log(err);

    }

  }



  return (
    <>



      <Row droppable={true} onDrop={e => dropCategoryVideo(e)} onDragOver={(e) => dragOverView(e)} className="border border-3 p-3">

        {
          allVideos.length > 0 ?

            allVideos?.map(video => (
              <Col key={video?.id} lg={4} md={6} sm={12} className='mb-5'>

                <VideoCard displayData={video} setDeleteResponse={setDeleteResponse} />


              </Col>
            ))
            :
            <div className='text-danger fs-3 fw-bold'>Nothing to Display</div>

        }

      </Row>







    </>
  )
}

export default View