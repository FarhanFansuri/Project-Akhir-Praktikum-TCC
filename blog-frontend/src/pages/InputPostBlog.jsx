import FormPost from "../components/FormPost";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../components/Profile';
// import Form from 'react-bootstrap/Form';


function InputPostBlog() {
  return (
    <Container>
            <Row>
                <Col xs={3}>
                    <Profile/>
                </Col>
                <Col xs={9} style={{ textAlign:'justify' }}>
                    <FormPost/>
                </Col>
            </Row>  
        </Container>
  );
}

export default InputPostBlog;