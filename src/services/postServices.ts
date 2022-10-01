let BASE_URL = "https://jsonplaceholder.typicode.com";
import axios from "axios";
import { IPostType } from "../types/postTypes";
const getLimitedPosts = async () => {
  const response = await axios.get<IPostType[]>(
    `${BASE_URL}` + "/posts?_limit=10"
  );
  return response.data;
};

export default getLimitedPosts;
