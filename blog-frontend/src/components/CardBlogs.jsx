import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ApiData from '../config/ApiData';
import {useNavigate} from 'react-router-dom';

const Post = (props)=>{
  const navigate = useNavigate();
    return(
        <Container className="mb-4">
        <Card>
        <Card.Body>
          <Card.Title>{props.id} | {props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
          <Row>
            <Col xs={1}>
              <Button variant="danger" onClick={(e)=>{
                ApiData.delData(props.id)
                navigate('/')
              }}>Hapus</Button>
            </Col >

            <Col xs={1}>
              <Button variant="warning" onClick={(e)=>{
                navigate(`/updatepost/${props.id}`);
              }} >Ubah</Button>
            </Col> 
            <Col xs={10}>
              
            </Col>
          </Row>
            </Card.Body>

        </Card>
        </Container>
    )
}

export default Post;