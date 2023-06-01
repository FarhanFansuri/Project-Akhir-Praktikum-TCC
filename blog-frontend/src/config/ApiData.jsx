import axios from 'axios';

async function getData() {
    try {
      const response = await axios.get('http://localhost:3000/db-demo/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const postData = async (title,content) => {
    try {
      const response = await axios.post('http://localhost:3000/db-demo/post', {
          id : (new Date()).getTime(),
          title: title,
          content: content,
          date: Date()
      }).then(()=>{console.log("post data")}) ;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData,
    postData
}