import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBlogs from '../components/CardBlogs';
import Profile from '../components/Profile';
// import Card from 'react-bootstrap/Card';
import Data from '../config/ApiData'
import { useEffect, useState} from 'react';



const Posts = ()=>{

    const [dataApi, setDataApi] = useState([]);
    const [isExist, setIsExist] = useState(false);

    const data = async () => {
        const result = await Data.getData();
        setDataApi(result)
        setIsExist(true)
      };

      useEffect(()=>{
        data()
      },[])
    

    return(
        <Container>
            <Row>
                <Col xs={3}>
                    <Profile/>
                </Col>
                <Col xs={9} style={{ textAlign:'justify' }}>
                    {
                        isExist && dataApi.data.map((data, index)=>{
                            return <CardBlogs key={index} title={data.title} content={data.content}/>
                        })
                        
                    }
                </Col>
            </Row>  
        </Container>
    )
}

export default Posts;