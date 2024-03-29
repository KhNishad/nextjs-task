import { hostname } from "@/config";
import axios from "axios";
import { parseCookies } from "nookies";


export default async function request(url, token = null) {
  const cookies = parseCookies();


  const config = {
    headers: { Authorization: `${token ? token || "" : cookies?.token || ""}` },
  };


  try {
    const res = await axios.get(`${hostname}/${url}`, config);
    
    return res;
  } catch (error) {
    
  }
}
