import React from "react";
import styled from 'styled-components'
import eleanor from "../assets/images/shopitems/Eleanor.png";

const AboutDetails = () => {

  const StyledSegment = styled.div`
    text-align: center;
  `

  const StyledImg = styled.img.attrs({
    src:eleanor
  })`
    max-width: 300px;
  `
  return (
    <div className="about-details ui grid">
      <div className="row">
        <div className="six wide column centered">
          <StyledSegment className="ui basic segment centered" >
            <StyledImg />
          </StyledSegment>
        </div>
        <div className="ten wide column" style={{ margin: '0 auto' }}>
          <div
          style={{textAlign:'center', display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column", margin: '0 auto'}}
            // style={{
            //   position: "absolute",
            //   top: "50%",
            //   msTransform: "translateY(-50%)",
            //   transform: "translateY(-50%)",
            // }}
          >
            <p>{`I am an artist & illustrator based in Brighton, United Kingdom. I focus on ethereal & the feminine`}</p>
            <p>{`Kit graduated from University of Arts in London in 2017 with a BA(Hons) degree in Illustration. She has since worked with leading brands such as Anthropologie, Madeweel and MADE, as well as a variety of independent & upcoming brands such as Vinyl Me Please, Nyssa Care, The Sora Life, Spacey Studios, and more.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
