import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Post = (props)=>{
    return(
        <Container className="mb-4">
        <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>   
            </Card.Body>
        </Card>
        </Container>
    )
}

export default Post;