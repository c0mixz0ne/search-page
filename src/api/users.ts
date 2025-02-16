import axios from 'axios'

const fetchUsers = async (url: string) => {
  let data

  try {
    const response = await axios.get(url)
    data = response.data
    console.log(data)
  } catch (err) {
    console.warn(err)
  }
  return { data }
}

export default fetchUsers
