import axios from 'axios';

// sets up a pre-configured instance of the axios client that has default properties set like url, headers and params

//makes an instance of client with some default properties, customized to make a specific request for a given url
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5190bd906111c2df1da8575f0e44be267f79c1c479e90c70f3bd9a0bd9d75c5d'
  }
});
