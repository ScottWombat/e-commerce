import axios from "axios";

class Client {
  /**
   * Private field declarations
   */
  /*
  #config = {
    csrfToken: null,
    baseURL: null,
    debug: true
  };
  #client;
  
  constructor(config = {}) {
    Object.assign(this.#config, config); // Merge the passed in config with the class config for Axios
    if (this.#config.debug) {
      console.debug("config", this.#config);
    }

    this.#client = axios.create({
      baseURL: this.#config.baseURL,
      headers: {
        "X-CSRF-Token": this.#config.csrfToken,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      transformResponse: [this.transformResponse]
    });

    // Adding interceptios for request and response
    this.#client.interceptors.request.use(
      this.handleRequestSuccess,
      this.handleRequestError
    );

    this.#client.interceptors.response.use(
      this.handleResponseSuccess,
      this.handleResponseError
    );
  }

  transformResponse(response) {
    if (!response) {
      return undefined;
    }

    let parsed = null;
    try {
      parsed = JSON.parse(response);
    } catch (error) {
      console.error(error, response);
    }

    return parsed;
  }

  handleRequestSuccess = (request) => {
    if (this.#config.debug) {
      console.debug("Starting request", request);
    }
    return request;
  };

  handleRequestError = (error) => {
    if (this.#config.debug) {
      console.debug("Starting request", error);
    }
    return Promise.reject(error);
  };

  handleResponseSuccess = (response) => {
    if (this.#config.debug) {
      console.debug("Response", response);
    }
    return response.data;
  };

  handleResponseError = (error) => {
    if (this.#config.debug) {
      console.debug("Response", error);
    }
    return Promise.reject(error);
  };

  async get(url, config = {}) {
    try {
      const response = await this.#client.get(url, config);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(url, data, config = {}) {
    try {
      const response = await this.#client.post(url, data, config);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async put(url, data, config = {}) {
    try {
      const response = await this.#client.put(url, data, config);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async patch(url, data, config = {}) {
    try {
      const response = await this.#client.patch(url, data, config);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(url, config = {}) {
    try {
      const response = await this.#client.delete(url, config);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  */
}

export default Client;