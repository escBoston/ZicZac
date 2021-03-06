import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdbreact';

const Section3 = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={2}
        length={3}
        slide={true}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
            <div className='row'>
              <MDBCol md='6'>
                <MDBCard className='mb-2' style={{marginTop:20, marginLeft:10, marginRight:10}}>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>ZicZac Mission</MDBCardTitle>
                    <MDBCardText>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    </MDBCardText>
                    <MDBBtn color='danger'>MISSION</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='6'>
                <MDBCard className='mb-2' style={{marginTop:20, marginLeft:10, marginRight:10}}>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>ZicZac Categories</MDBCardTitle>
                    <MDBCardText>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    </MDBCardText>
                    <MDBBtn color='danger'>CATEGORIES</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </div>
            </MDBCarouselItem>

            <MDBCarouselItem itemId='2'>
            <div className='row'>
              <MDBCol md='6'>
                <MDBCard className='mb-2' style={{marginTop:20, marginLeft:10, marginRight:10}}>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>ZicZac Empoyees</MDBCardTitle>
                    <MDBCardText>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    </MDBCardText>
                    <MDBBtn color='danger'>MEET US</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='6'>
                <MDBCard className='mb-2' style={{marginTop:20, marginLeft:10, marginRight:10}}>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>ZicZac Contacts</MDBCardTitle>
                    <MDBCardText>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    </MDBCardText>
                    <MDBBtn color='danger'>TALK TO US</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
            <div className='row'>
              <MDBCol md='6'>
                <MDBCard className='mb-2' style={{marginTop:20, marginLeft:10, marginRight:10}}>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>ZicZac Updates</MDBCardTitle>
                    <MDBCardText>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    </MDBCardText>
                    <MDBBtn color='primary'>NEWS</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='6'>
                <MDBCard className='mb-2'style={{marginTop:20, marginLeft:10, marginRight:10}}>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>ZicZac Policy</MDBCardTitle>
                    <MDBCardText>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    </MDBCardText>
                    <MDBBtn color='primary'>RULES</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </div>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default  Section3;

