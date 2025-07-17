// BEGIN NEW FILE
// Placeholder admin service. Replace with API endpoints.
import axios from 'axios'

const API_URL = '/api/admin'

const getDashboardStats = () => axios.get(`${API_URL}/stats`)
const getUsers = () => axios.get(`${API_URL}/users`)

export default {
  getDashboardStats,
  getUsers,
}
// END NEW FILE