import React, { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background: #c9d7ca;
`;

const FooterStyling = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 20px;
`;

const MailInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px 0 0 0;
`;

function thisYear() {
  var jetzt = new Date();
  var jahr = jetzt.getFullYear();
  return jahr;
}

const Footer: FC = (props) => {
  return (
    <StyledFooter>
      <FooterStyling>
        <MailInput>
          <p>Don't miss new offers</p>
          <input type="email" value="Enter your Email Adress" />
          <button>Submit</button>
        </MailInput>
        <Contact>
          <p>mail@worldofwine.com</p>
          <p>Dinostraße </p>
          <p>Phueshhome 42069</p>
        </Contact>
      </FooterStyling>
      <p>&copy; {thisYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
