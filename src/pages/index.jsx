import React from "react";
import ScrollSection, { ScrollSectionHeading } from "../layouts/ScrollSection.jsx";
import CenteredText from "../components/CenteredText.jsx";
import Factoid from "../components/Factoid.jsx";
import FactoidGallery from "../components/FactoidGallery.jsx";
import InfoCard, { InfoCardPhoto } from "../components/InfoCard.jsx";
import InfoCardGallery from "../components/InfoCardGallery.jsx";
import MeAndBoys from "../images/me_and_theboys.jpg";
import PhotoHeadline from "../components/PhotoHeadline.jsx";
import ScaryHallway from "../images/scary_hallway.jpeg";
import { WorkingAtMediaEmpire, MediaEmpireBio, stories, people } from "../fakedata/index.jsx";
import StoryCardGallery from "../components/StoryCardGallery.jsx";
import PageWrapper from "../layouts/PageWrapper.jsx";
import Footer from "../components/Footer.jsx";
import VideoSplash from "../components/VideoSplash.jsx";
import MenuBar from "../components/MenuBar.jsx";
import LockScreen from "../components/LockScreen.jsx";
import theme from "../theme";

const IndexPage = () => (
    <PageWrapper>
      <LockScreen/>
      <MenuBar/>
      <VideoSplash/>
      <ScrollSection>     
        <CenteredText>
          {MediaEmpireBio}
        </CenteredText>
        <FactoidGallery>
          <Factoid heading={"750k"} subHeading={"workers"} body={"on lifetime employment contracts"}/>
          <Factoid heading={"35b"} subHeading={"impressions"} body={"globally per day"}/>
          <Factoid heading={"493"} subHeading={"Fortune 500"} body={"companies in portfolio"}/>
        </FactoidGallery>
      </ScrollSection>
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
      <ScrollSection heading="Careers">
        <PhotoHeadline src={ScaryHallway} heading={"Working at Media Empire"} body={WorkingAtMediaEmpire} overlayHeading={true}/>
        <ScrollSectionHeading children={"Featured Insights"} position="bottom"/>
        <StoryCardGallery heroes={2} stories={stories}/>
      </ScrollSection>
      <Footer/>
    </PageWrapper>
);

export default IndexPage;
