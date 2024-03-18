import img from '../../assets/img/bhangariwala.png';


export default function About() {
    return (
        <div>
            <div className="container-fluid about bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-img pb-5 ps-5">
                                <img src={img} className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} alt="Image" />
                                <div className="about-img-inner">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="section-title text-start mb-5">
                                <h4 className="sub-title pe-3 mb-0"> ABOUT BhangariWala</h4>
                                <h1 className="display-3 mb-4">Empowering Environmental Change, One Pickup at a Time</h1>
                                <p className="mb-4">At BhangariWala, we take pride in our dedication to transforming recycling and
                                    environmental conservation. Here's what sets us apart:</p>
                                <div className="mb-4">
                                    <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i><b> Commitment to
                                        Excellence:</b> We are driven by a passion for environmental preservation and strive
                                        to deliver recycling services of the highest quality.</p>
                                    <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i><b> Efficient
                                        Collection Methods:</b> Our team of dedicated collectors ensures that your
                                        recyclables are picked up promptly and responsibly.</p>
                                    <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i><b> Client-Centric
                                        Approach:</b> We prioritize your satisfaction above all else, working closely with
                                        you to simplify recycling and create a greener world together.</p>
                                </div>
                                <p className="mb-4">At BhangariWala, we don't just collect materials—we empower change. Contact us
                                    today to join our mission for a more sustainable future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}