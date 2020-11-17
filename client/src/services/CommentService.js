import ApiClient from './ApiClient'

export const __PostComment = async (formData, userId, post_id) => {
    try {

      const res = await ApiClient.post(`/comments/${post_id}/user/${userId}?active=true`, formData)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const __ShowComments = async (post_id) => {
    try {
      const res = await ApiClient.get(`/comments/${post_id}`)
      return res.data
    }catch (error){
      throw error
    }
  }