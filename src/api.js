import axios from "axios";

export const searchImages = async (searchText) => {
  const responseImages = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: "Client-ID 9DlE9eMLST-HBmCr3brkJL-I3_rDnHvsXFF0D9Rgg2I",
      },
      params: {
        query: searchText,
      },
    }
  );

  return responseImages.data.results;
};
