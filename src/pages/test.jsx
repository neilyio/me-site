import React from "react";
import styled from "styled-components";
import PageWrapper from "../layouts/PageWrapper.jsx";
import MenuBar from "../components/MenuBar.jsx";
import VideoSplash from "../components/VideoSplash.jsx";
import { people } from "../fakedata";
import InfoCardGallery from "../components/InfoCardGallery.jsx";
import InfoCard from "../components/InfoCard.jsx";
import ScrollSection from "../layouts/ScrollSection.jsx";

const Container = styled.div`
width: 100%;
`;

const Footer = () => (
    <PageWrapper>
    <ScrollSection color="#f0f0f0" heading="Our People">
      <InfoCardGallery>
        { people.map((el, index) => (
            <InfoCard
              key={index}
              imgSrc={el.imgSrc} 
              heading={el.heading}
              subHeading={el.subHeading} 
              body={el.body}/>
        ))}
      </InfoCardGallery>
    </ScrollSection>
    </PageWrapper>
);

export default Footer;
