import Card from 'react-bootstrap/Card';

const Profile = ()=>{
    return(
        <Card body>
    <h2 className="text-center">Profile</h2>
    <img src='images/profile.png' width={'150px'} alt='' />
    <div className='my-3' style={{ textAlign:'justify' }}>
        <h6>Nama : <b>Mochammad Farhan</b></h6>
        <h6>Status : <b>Online</b></h6>
    </div>
    </Card>
    )
}

export default Profile;