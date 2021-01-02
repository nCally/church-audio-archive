
import axios from "axios";

let host = window.location.hostname;

const api = axios.create({
  baseURL: (host === 'localhost') ?
    "http://localhost:6410" :
    "http://church-api.mrcally.com"
});

export const retrieveArchive = async (month, year, loading, setResult) => {

  loading(true);

  try {

    const res = await api.get("/archive", {
      params: {
        month,
        year
      }
    })

    setResult(res.data.data);
    loading(false);

  } catch (e) {
    loading(false);
    throw e;
  }
}


export const addArchive = async (data, load, success) => {
  load(true);
  try {

    await api.post("/add-to-archive", data)

    success();

  } catch (error) {
    load(false);
    throw error;
  }
}
