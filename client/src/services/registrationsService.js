import axios from 'axios'

const API_URL = '/api/registrations'

const registerForEvent = (data) => axios.post(API_URL, data)
const getRegistrationsByUser = (userId) => axios.get(`${API_URL}/user/${userId}`)
const getRegistrationsByEvent = (eventId) => axios.get(`${API_URL}/event/${eventId}`)

export default {
  registerForEvent,
  getRegistrationsByUser,
  getRegistrationsByEvent,
}