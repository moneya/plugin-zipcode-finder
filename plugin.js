const { httpFetch } = Host.getFunctions();

function run() {
  // Get the zip code from the input
  const zipCode = Host.inputString();
  // Construct the URL for the API request
  const apiUrl = `https://api.zippopotam.us/us/${zipCode}`;

  // Define the request object
  const request = {
    method: "GET",
    url: apiUrl,
    headers: {
      "Content-Type": "application/json",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  };

  // Make the HTTP request using Http.request
  const response = Http.request(request);
  // const response = httpFetch(request);

  // Check if the response status is not 200
  if (response.status !== 200) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    Host.outputString(errorMessage);
    throw new Error(errorMessage);
  }

  // Parse response JSON
  const data = JSON.parse(response.body);

  // Extract relevant information from the API response
  const {
    country,
    places
  } = data;

  // Extract information about the first place (assuming the API returns data in a specific format)
  const firstPlace = places && places.length > 0 ? places[0] : null;
  const {
    place_name,
    state,
    longitude,
    latitude
  } = firstPlace || {};

  // Prepare the result object
  const result = {
    "post code": zipCode,
    country,
    "country abbreviation": "US",
    places: [{
      "place name": place_name,
      longitude,
      state,
      "state abbreviation": "FL",
      latitude
    }]
  };

  // Convert the result object to a JSON string and output
  const resultString = JSON.stringify(result);
  Host.outputString(resultString);
}

module.exports = { run };