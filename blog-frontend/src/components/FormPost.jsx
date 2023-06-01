import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ApiData from '../config/ApiData';
import { useParams } from 'react-router-dom';

function FormPost(props) {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Container className="mb-4">
    <Card>
    <Card.Header>Buat Postingan</Card.Header>
    <Card.Body>
    <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Masukan Judul" onChange={(e)=>{
              setTitle(e.target.value)
            }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Masukan tulisan blog anda</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e)=>{
              setContent(e.target.value)
            }} />
        </Form.Group>
        {!props.update && <button className='btn btn-danger text-white' onClick={(e)=>{
          e.preventDefault()
          ApiData.postData(title,content)
          navigate('/')
        }}>Post</button>}
        {props.update && <button className='btn btn-danger text-white' onClick={(e)=>{
          e.preventDefault()
          ApiData.putData(id,title,content)
          navigate('/')
        }}>Update</button>}
        </Form>
        </Card.Body>
    </Card>
    </Container>
   
  );
}

export default FormPost;