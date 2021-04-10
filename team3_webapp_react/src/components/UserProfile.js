import React from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import DefaultUserPic from "./zigzaglogo_only.jpg";
import BeautyStars from 'beauty-stars';

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
            uploadedFile:null,
            rating:"test",//this.props.rating
            width: this.props.weight,
            height: this.props.height,
            size: this.props.size

        }
    }

    changeProfileImage=(event)=>{

        this.setState({uploadedFile:event.target.files[0]});
    }


render(){

    if(this.state.profileImage){
        var imagestr=this.state.profileImage;
        imagestr = imagestr.replace("public/", "");
        var profilePic="http://localhost:5000/"+imagestr;
    }else{
         profilePic=DefaultUserPic;
    }
  //  const styles = {width: this.state.width, height: this.state.height, borderRadius: 400/ 2};

    return (

        <Container>
        <Row style={{width: 500, marginTop: 50}}>
       <Col>
       <img src={profilePic} alt="profils pic"
       style={{width: this.state.width, height: this.state.height, borderRadius: 400/ 2}} />
       <p>{this.state.username}</p>
       <BeautyStars size={this.state.size}
         value={this.state.rating}
       />
       </Col>

       </Row>
        </Container>
    )
}
}



   export default UserProfile;
