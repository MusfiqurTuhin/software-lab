import img from '../../assets/img/bhangariwala.png';

export default function Footer() {
    return (
        <div>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4"><img src={img} alt="Logo" height="100" width="100"></img>BhangariWala</h4>
                                <p>BhangariWala is a premier provider of recycling and environmental conservation solutions,
                                    dedicated to transforming communities with precision and expertise. </p>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-share fa-2x text-white me-2"></i>
                                    <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=" #"><i className="fab fa-twitter"></i></a>
                                    <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Quick Links</h4>
                                <a href="#"><i className="fas fa-angle-right me-2"></i> Services </a>
                                <a href="#"><i className="fas fa-angle-right me-2"></i> About Us</a>
                                <a href="#"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">BhangariWala Services</h4>
                                <a href=""><i className="fas fa-angle-right me-2"></i> All Services</a>
                                <a href=""><i className="fas fa-angle-right me-2"></i> Recyclable Material Collection</a>
                                <a href=""><i className="fas fa-angle-right me-2"></i> Environmental Solutions</a>
                                <a href=""><i className="fas fa-angle-right me-2"></i> Resource Recovery</a>
                                <a href=""><i className="fas fa-angle-right me-2"></i> Sustainable Practices</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Contact Info</h4>
                                <a href=""><i className="fa fa-map-marker-alt me-2"></i> United City, Madani Ave, Dhaka 1212, England</a>
                                <a href=""><i className="fas fa-envelope me-2"></i> BhangariWala@gmail.com</a>
                                <a href=""><i className="fas fa-phone me-2"></i> +880123456789</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid copyright py-4">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-start mb-md-0">
                                <span className="text-white"><a href="#"><i className="fas fa-copyright text-light me-2"></i></a>BhangariWala, All right
                                    reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>
        </div>
    )
}