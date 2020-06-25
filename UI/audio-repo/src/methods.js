
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8010" })

export const retrieveArchive = async (month, year, loading) => {

  loading(true);

  try {

    const res = await api.get("/archive", {
      params: {
        month,
        year
      }
    })

    if (res.status === 200) {
      console.log(res.data)
      loading(false);
    } else {
      loading(false);
    }



  } catch (e) {
    loading(false);
    throw e;
  }
}
