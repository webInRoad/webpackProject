import axios from "axios";
function getData() {
  axios.get("/api/v1/topics").then((res) => console.info(res));
}
getData();
