import axios from "axios";

const fetchUsers = async (url: any) => {

let data

try {
	const response = await axios.get(url);
	data = response.data
	} catch (err) {
		console.warn(err);
	} 
	return { data }
};

export default fetchUsers