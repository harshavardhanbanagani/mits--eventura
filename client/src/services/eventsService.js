// Placeholder events service. Replace with API calls.
import axios from 'axios'

const API_URL = '/api/events'

const getEvents = (params) => axios.get(API_URL, { params })
const getEventById = (id) => axios.get(`${API_URL}/${id}`)
const createEvent = (data) => axios.post(API_URL, data)
const updateEvent = (id, data) => axios.put(`${API_URL}/${id}`, data)
const deleteEvent = (id) => axios.delete(`${API_URL}/${id}`)

export default {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
}