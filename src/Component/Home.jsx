import Carosel from "./Shared/Services";
import Header from "./Shared/Header";
import Services from "./Shared/Services";
import About from "./Shared/About";
import Choose from "./Shared/Choose";
import Footer from "./Shared/Footer";
import Banner from "./Shared/Banner";

export default function Home() {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-32">
                <Services></Services>
            </div>
            <div>
                <About></About>
            </div>
           
            <div>
                <Choose></Choose>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}