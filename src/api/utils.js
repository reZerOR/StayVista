import axios from 'axios'
export const imageUplode = async Image => {
    const formData = new FormData()
    formData.append('image', Image)
    try{
        const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)
      console.log(data)
      return data
    }catch(error){
        console.log(error)
    }

}