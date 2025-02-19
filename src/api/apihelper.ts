import axios from 'axios';

import { _KEYS, FilterProps } from '../Types';
import { SOURCE_TYPES } from '../Constants';
import { formatDataStructure } from '../Utils/helper';

class APIHelper {
    baseURL: string;
    instance: any;
    apiType: string;
  constructor(baseURL:string, apiType:string) {
    this.baseURL = baseURL;
    this.apiType = apiType;
    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getApiKey () {
    let key:string;
    switch(this.apiType){
        case SOURCE_TYPES.GUARDIAN:
            key = import.meta.env.REACT_APP_GUARDIAN_API_KEY || _KEYS.GUARDIAN_API_KEY;
            key = `api-key=${key}`;
            break;
        case SOURCE_TYPES.NEWYORK_TIMES:
            key = import.meta.env.REACT_APP_NEWYORK_TIMES_API_KEY || _KEYS.NEWYORK_TIMES_API_KEY;
            key=`api-key=${key}`;
            break;
        case SOURCE_TYPES.NEWS_API:
        default:
            key = import.meta.env.REACT_APP_NEWS_API_KEY || _KEYS.NEWS_API_KEY;
            key=`apiKey=${key}`;
    }
    return key;
  }

  // Handle GET request
  async get(url:string, params = {}) {
    const apiKey = this.getApiKey();
    const _uRL = `${url}&${apiKey}`;
    try {
      const response = await this.instance.get(_uRL, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

//   // Handle POST request
//   async post(url:string, data = {}) {
//     try {
//       const response = await this.instance.post(url, data);
//       return response.data;
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

  // Handle errors uniformly
  handleError(error:any) {
    if (error?.response) {
      // The request was made and the server responded with a status code
      console.error('API Error Response:', error.response);
      throw new Error(`Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API Error Request:', error.request);
      throw new Error('No response received from the server.');
    } else {
      // Something happened in setting up the request
      console.error('API Error Message:', error.message);
      throw new Error(`Request failed: ${error.message}`);
    }
  }
}



const newsApi = new APIHelper('https://newsapi.org/', SOURCE_TYPES.NEWS_API);  // Pass your base URL & Api Type here
const guardianApi = new APIHelper('https://content.guardianapis.com/', SOURCE_TYPES.GUARDIAN);  
const newYorkApi = new APIHelper('https://api.nytimes.com/', SOURCE_TYPES.NEWYORK_TIMES);  

  export const fetchNewsApiContent = async ({searchKey, searchByDate}:FilterProps) => {
    const type = SOURCE_TYPES.NEWS_API;
    let queryString = `language=en&q=${searchKey || 'all'}`;
    if(searchByDate){
      queryString = `${queryString}&from=${searchByDate}&to=${searchByDate}`;
    }
    let data = await newsApi.get(`v2/everything?${queryString}`);
    data = formatDataStructure(data, type);
    return { [type] : data };
  };

  export const fetchGuardianApiContent = async ({searchKey, searchByDate }:FilterProps) => {
    const type = SOURCE_TYPES.GUARDIAN;
    let queryString = `q=${searchKey || 'all'}`;
    if(searchByDate){
      queryString = `${queryString}&from-date=${searchByDate}&to-date=${searchByDate}`;
    }
    let data = await guardianApi.get(`search?${queryString}`);
      data = formatDataStructure(data, type);
    return { [type] : data };
  };

  export const fetchNewYorkTimesContent = async ({ searchKey, searchByDate }:FilterProps) => {
    const type = SOURCE_TYPES.NEWYORK_TIMES;
    let queryString = `q=${searchKey || 'all'}`;
    if(searchByDate){
      queryString = `${queryString}&begin_date=${searchByDate}&end_date=${searchByDate}`;
    } 
    let data = await newYorkApi.get(`svc/search/v2/articlesearch.json?${queryString}`);
    data = formatDataStructure(data, type);
    return { [type] : data };
  };

export default APIHelper;
