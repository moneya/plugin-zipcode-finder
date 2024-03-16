# US Zip Code Information Plugin

## Introduction
The US Zip Code Information plugin retrieves detailed information about a zip code in the United States using the Zippopotam API. This README provides an overview of the plugin, its functionality, usage instructions, and other relevant details.

## API Information
The Zippopotam API used in this plugin is free to use and provides information specifically for zip codes in the United States.

## Components

1. **`run()` Function:**
   - Retrieves a zip code from the input.
   - Constructs the URL for the API request using the Zippopotam API.
   - Defines the request object with necessary details such as method, URL, and headers.
   - Executes an HTTP request to the Zippopotam API using `Http.request`.
   - Parses the response JSON from the API.
   - Extracts relevant information such as country, place name, state, longitude, and latitude from the API response.
   - Prepares the result object containing the zip code details in a structured format.
   - Converts the result object to a JSON string and outputs it.

## Usage
To use the US Zip Code Information plugin, follow these steps:
1. Ensure the plugin is correctly integrated into the hosting environment.
2. Call the `run` function.
3. Provide a valid zip code when prompted.
4. Receive detailed information about the zip code as output.

``` json
// Safer
extism call plugin.wasm run --input "33162" --wasi --allow-host 'api.zippopotam.us'

// Risky
extism call plugin.wasm run --input "33162" --wasi --allow-host '*'

```