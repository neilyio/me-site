import React from "react";
import styled from "styled-components";
import PageWrapper from "../layouts/PageWrapper.jsx";
import ScrollSection, { ScrollSectionHeading } from "../layouts/ScrollSection.jsx";
import { testText1, sandersBody, walesBody, rowlingBody, stories } from "../fakedata/index.jsx";
import PhotoHeadline from "../components/PhotoHeadline.jsx";
import ScaryHallway from "../images/scary_hallway.jpeg";
import StoryCardGallery from "../components/StoryCardGallery.jsx";

const TestPage = () => { 
    return (
        <PageWrapper>
        <ScrollSection heading="Careers">
          {/* <PhotoHeadline src={ScaryHallway} heading={"Working at Media Empire"} body={walesBody} overlayHeading={true}/> */}
          <ScrollSectionHeading children={"Featured Insights"} position="bottom"/>
          <StoryCardGallery heroes={2} stories={stories}/>
        </ScrollSection>
        </PageWrapper>
    ); 
};
export default TestPage;
