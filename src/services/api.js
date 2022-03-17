const getApiData = async () => {
  const URL = `https://picsum.photos/v2/list`;

  // Call to api
  const response = await fetch(URL);
  const apiData = await response.json();
  const cleanedApiData = apiData.map((eachApiData) => {
    return {
      id: eachApiData.id,
      photo: eachApiData.download_url,
      author: eachApiData.author,
    };
  });
  return cleanedApiData;
    
};

export default getApiData;


// const [response, apiData, cleanedApiData] = await Promise.all([
//   fetch(URL),
//   response.json(),
//   apiData.map((eachApiData) => {
//     return {
//       id: eachApiData.id,
//       photo: eachApiData.download_url,
//     };
//   }),
// ]);
