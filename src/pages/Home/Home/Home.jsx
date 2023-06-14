import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Gallery from "../Gallery/Gallery";
import SpecialSection from "../SpecialSection/SpecialSection";
import TabSection from "../TabSection/TabSection";


const Home = () => {
    return (
        <div className="bg-stone-100">
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <CustomerReview></CustomerReview>
            <SpecialSection></SpecialSection>
        </div>
    );
};

export default Home;