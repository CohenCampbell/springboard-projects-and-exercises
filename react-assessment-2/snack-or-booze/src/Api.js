import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
//get all drinks
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
//gets all snacks
  static async getDrinks()
 {
  const result = await axios.get(`${BASE_API_URL}/drinks`);
  console.log(result)
  return result.data;
 }
//posts data to the api so food and drinks can be added
 static async postItem(data){
  const {type, ...itemInfo} = data;
  await axios.post(`${BASE_API_URL}/${type}`, itemInfo);
 }

}

export default SnackOrBoozeApi;
