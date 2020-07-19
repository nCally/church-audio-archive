
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:6004" })

export const retrieveArchive = async (month, year, loading, setResult) => {

  loading(true);

  try {

    const res = await api.get("/archive", {
      params: {
        month,
        year
      }
    })

    if (res.status === 200) {
      setResult(res.data.data);
      loading(false);
    } else {
      loading(false);
    }



  } catch (e) {
    loading(false);
    throw e;
  }
}


export const addArchive = async (data, load, success) => {
  load(true);
  try {

    const res = await api.post("/add-to-archive", data)
    if (res.status === 200) {

      success();

    } else {
      load(false);
      alert("Upload failed. Try it again")
    }

  } catch (error) {
    load(false);
    throw error;
  }
}