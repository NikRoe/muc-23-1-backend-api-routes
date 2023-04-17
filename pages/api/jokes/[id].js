import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  // console.log("request: ", request.query);
  const { id } = request.query;

  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    return response.status(404).json({ status: "Not found" });
  }

  return response.status(200).json(joke);
}
