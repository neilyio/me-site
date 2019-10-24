import React from "react";
import HomeSplash from "../components/HomeSplash.jsx";
import ScrollSection, { ScrollSectionHeading } from "../layouts/ScrollSection.jsx";
import CenteredText from "../components/CenteredText.jsx";
import Factoid from "../components/Factoid.jsx";
import FactoidGallery from "../components/FactoidGallery.jsx";
import InfoCard, { InfoCardPhoto } from "../components/InfoCard.jsx";
import InfoCardGallery from "../components/InfoCardGallery.jsx";
import MeAndBoys from "../images/me_and_theboys.jpg";
import PhotoHeadline from "../components/PhotoHeadline.jsx";
import ScaryHallway from "../images/scary_hallway.jpeg";
import { testText1, sandersBody, walesBody, rowlingBody, stories } from "../fakedata/index.jsx";
import StoryCardGallery from "../components/StoryCardGallery.jsx";
import PageWrapper from "../layouts/PageWrapper.jsx";

const IndexPage = () => (
      <PageWrapper>
        <HomeSplash/>
        <ScrollSection>     
          <CenteredText>
            {testText1}
          </CenteredText>
          <FactoidGallery>
            <Factoid heading={"750k"} subHeading={"workers"} body={"on lifetime employment contracts"}/>
            <Factoid heading={"35b"} subHeading={"impressions"} body={"globally per day"}/>
            <Factoid heading={"493"} subHeading={"Fortune 500"} body={"companies in portfolio"}/>
          </FactoidGallery>
        </ScrollSection>
        <ScrollSection color="#f0f0f0" heading="Our People">
          <InfoCardGallery>
            <InfoCard heading="Colonel Sanders" subHeading="Senior Partner" body={sandersBody}>
             <InfoCardPhoto src={MeAndBoys} offsetX={'-50px'} offsetY={'-5px'} scale={'140%'}/>
           </InfoCard>
            <InfoCard heading="Jimmy Wales" subHeading="Chief Financial Officer" body={walesBody}>
             <InfoCardPhoto src={MeAndBoys} offsetX={'130px'} offsetY={'-60px'} scale={'160%'}/>
           </InfoCard>
           <InfoCard heading="J.K. Rowling" subHeading="Head of Compliance" body={rowlingBody}>
             <InfoCardPhoto src={MeAndBoys} offsetX={'-220px'} offsetY={'-120px'} scale={'180%'}/>
           </InfoCard>
          </InfoCardGallery>
        </ScrollSection>
        <ScrollSection heading="Careers">
          <PhotoHeadline src={ScaryHallway} heading={"Working at Media Empire"} body={walesBody} overlayHeading={true}/>
          <ScrollSectionHeading children={"Featured Insights"} position="bottom"/>
          <StoryCardGallery heroes={2} stories={stories}/>
        </ScrollSection>
      </PageWrapper>
);

export default IndexPage;
