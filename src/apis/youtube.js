import axios from "axios";

const KEY = "AIzaSyAIjgca0Ceo-cdoFjGGTAyZWW1hwwcwHZE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 10,
    type: "video",
    key: KEY,
  },
});
