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

  const putData = async (id,title,content) => {
    try {
      const response = await axios.put('http://localhost:3000/db-demo/put', {
          id : id,
          title: title,
          content: content,
          date: Date()
      }).then(()=>{console.log("post data")}) ;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const delData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/db-demo/delete/${id}`).then(()=>{console.log("delete data")}) ;
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData,
    postData,
    putData,
    delData
}