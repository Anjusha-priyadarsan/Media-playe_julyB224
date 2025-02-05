import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"


// save video
// save video api call by add.jsx

export const addVideo=async(video)=>{

   return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)

}

// fetch video api call

export const getAllVideos=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}

// api call for deleting video card

export const deleteVideo=async(videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})

}
// api call for save history

export const saveHistory=async(video)=>{

  return await commonAPI("POST",`${SERVER_URL}/history`,video)

}
// api call for get history

export const getAllhistory=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/history`,"")

}

// api call for deleteing history

export const deleteHistory=async(videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})

}

// api call for add category

export const addCategory=async(categoryDetails)=>{

  return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)

}

// api call for get category

export const getAllCategory=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")

}

// api call for deleteing category

export const deleteCategory=async(categoryId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{})

}

// api call for get a single video 

export const getSingleVideo=async(videoId)=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")

}

// api call for updating category

export const updateCategory=async(categoryId,categoryDetails)=>{
  return await commonAPI("PUT",`${SERVER_URL}/allCategory/${categoryId}`,categoryDetails)
}

// api call for getting single category
export const getSingleCategory=async(categoryId)=>{
  return await commonAPI("GET",`${SERVER_URL}/allCategory/${categoryId}`,"")
}


















