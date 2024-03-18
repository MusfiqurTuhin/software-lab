
import img3 from '../../assets/img/interior.jpg'
import img4 from '../../assets/img/exterior.jpg'
import img5 from '../../assets/img/wallpapering.jpg'
import img6 from '../../assets/img/plastering.jpg'


export default function Services() {
    return (
        <div>
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="sub-style">
                            <h4 className="sub-title px-3 mb-0">What We Do</h4>
                        </div>
                        <h1 className="display-3 mb-4">Explore Our Recycling and Environmental Solutions</h1>
                        <p className="mb-0">Dive into the world of sustainable living with BhangariWala's innovative recycling and
                            environmental solutions. Our platform offers comprehensive services designed to streamline your
                            recycling journey and minimize your carbon footprint. From pickup requests to payment integration,
                            we're here to make recycling effortless and rewarding for you and the planet.</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded">
                                <div className="service-img rounded-top">
                                    <img src={img3} className="img-fluid rounded-top w-100" alt="" />
                                </div>
                                <div className="service-content rounded-bottom bg-light p-4">
                                    <div className="service-content-inner">
                                        <h5 className="mb-4">Recyclable Material Collection</h5>
                                        <p className="mb-4">Our recyclable material collection services breathe new life into
                                            environmental conservation efforts. From paper to plastics, we specialize in
                                            collecting and repurposing materials to promote sustainability and preserve our
                                            planet.</p>
                                        <ul>
                                            <li>
                                                Paper Collection: Let us handle your old newspapers and magazines, contributing
                                                to the preservation of trees.
                                            </li>
                                            <li>
                                                Plastic Bottle Pickup: Help save energy and reduce pollution by recycling your
                                                plastic bottles with us.
                                            </li>
                                            <li>
                                                Milk Packet Recycling: Contribute to water conservation efforts by recycling
                                                your milk packets with BhangariWala.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded">
                                <div className="service-img rounded-top">
                                    <img src={img4} className="img-fluid rounded-top w-100" alt="" />
                                </div>
                                <div className="service-content rounded-bottom bg-light p-4">
                                    <div className="service-content-inner">
                                        <h5 className="mb-4">Environmental Solutions</h5>
                                        <p className="mb-4">Transform the landscape of recycling with our expert environmental
                                            solutions. Whether it's reducing waste, conserving resources, or promoting
                                            eco-conscious practices, we tailor our services to reflect your commitment to a
                                            greener future.</p>
                                        <ul>
                                            <li>
                                                Tree Preservation: By recycling paper, you're directly contributing to the
                                                preservation of trees and forests.
                                            </li>
                                            <li>
                                                Water Conservation: Recycling plastic bottles and milk packets helps conserve
                                                water resources.
                                            </li>
                                            <li>
                                                Energy Efficiency: Repurposing materials saves energy that would otherwise be
                                                used in manufacturing new products.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp">
                            <div className="service-item rounded">
                                <div className="service-img rounded-top">
                                    <img src={img5} className="img-fluid rounded-top w-100" alt="" />
                                </div>
                                <div className="service-content rounded-bottom bg-light p-4">
                                    <div className="service-content-inner">
                                        <h5 className="mb-4">Resource Recovery</h5>
                                        <p className="mb-4">Elevate your recycling efforts with our resource recovery services. From
                                            innovative recycling techniques to efficient material repurposing, we offer a wide
                                            range of solutions to minimize waste and maximize environmental impact.</p>
                                        <ul>
                                            <li>
                                                Facility Processing: Our materials are carefully processed to ensure they are
                                                recycled or reused efficiently.
                                            </li>
                                            <li>
                                                Community Engagement: Join our community of environmentally-conscious
                                                individuals and businesses working towards a sustainable future.
                                            </li>
                                            <li>
                                                Educational Outreach: Learn more about the environmental benefits of recycling.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded">
                                <div className="service-img rounded-top">
                                    <img src={img6} className="img-fluid rounded-top w-100" alt="" />
                                </div>
                                <div className="service-content rounded-bottom bg-light p-4">
                                    <div className="service-content-inner">
                                        <h5 className="mb-4">Sustainable Practices</h5>
                                        <p className="mb-4">Achieve sustainability goals with our sustainable practices. From
                                            educating communities to implementing green initiatives, our dedicated team delivers
                                            superior solutions that enhance environmental stewardship and foster a healthier
                                            planet.</p>
                                        <ul>
                                            <li>
                                                Market Awareness: Stay informed about the latest innovations in recycling and
                                                environmental conservation.
                                            </li>
                                            <li>
                                                Collaborative Partnerships: Partner with us to expand your impact and reach new
                                                audiences passionate about sustainability.
                                            </li>
                                            <li>
                                                Continuous Improvement: We are committed to continuously improving our services
                                                to better serve our planet.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Other service items follow */}
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                        {/*<a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Services More</a>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}