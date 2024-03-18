import "../../App.css"
import img1 from '../../assets/img/house1.jpg'
import img2 from '../../assets/img/house2.jpg'
import img3 from '../../assets/img/bhangariwala.png'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <div>
                <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div className="row gx-0 align-items-center" >
                        {/* style="height: 45px;" */}
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0 hight mt-3">
                            <div className="d-flex flex-wrap">
                                <a href="#" className="text-light me-4"><i className="fa fa-map-marker-alt me-2"></i> United City, Madani Ave, Dhaka 1212  </a> <br />
                                <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+880123456789</a>
                                <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2"></i>BhangariWala@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <a href="index.html" className="navbar-brand p-0">
                            <h1 className="text-primary m-0"><img src={img3} alt="Logo" />BhangariWala</h1>
                            {/* <!-- <img src="img/BhangariWala" alt="Logo">  */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="#" className="nav-item nav-link active">Home</a>
                                <a href="#" className="nav-item nav-link">About</a>
                                <a href="#" className="nav-item nav-link">Services</a>
                                <a href="#" className="nav-item nav-link">Blog</a>
                                <Link to={'/cotact'}><a href="#" className="nav-item nav-link">Contact Us</a></Link>
                            </div>
                            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Pickup Request</a>
                        </div>
                    </nav>



                    <div className="header-carousel owl-carousel">
                        <div className="header-carousel-item">
                            <img src={img1} alt="Image" />
                            <div className="carousel-caption">
                                <div className="carousel-caption-content p-3">
                                    {/* style="letter-spacing: 3px;" */}
                                    <h5 className="text-white text-uppercase fw-bold mb-4 style1" >BhangariWala</h5>
                                    <h1 className="display-1 text-capitalize text-white mb-4">Redefining Recycling for a Greener Tomorrow</h1>
                                    <p className="mb-5 fs-5">Welcome to BhangariWala, where we revolutionize recycling and environmental conservation. Our mission: empower individuals and businesses for a greener tomorrow through seamless recycling solutions and sustainability commitment.
                                    </p>
                                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="https://wa.me/+880123456789">Pickup Request</a>
                                </div>
                            </div>
                        </div>
                        <div className="header-carousel-item">
                            <img src={img2} className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="carousel-caption-content p-3">
                                    {/* style="letter-spacing: 3px;" */}
                                    <h5 className="text-white text-uppercase fw-bold mb-4 style1" >BhangariWala</h5>
                                    <h1 className="display-1 text-capitalize text-white mb-4">Redefining Recycling for a Greener Tomorrow</h1>
                                    <p className="mb-5 fs-5 animated slideInDown">Welcome to BhangariWala, where we revolutionize recycling and environmental conservation. Our mission: empower individuals and businesses for a greener tomorrow through seamless recycling solutions and sustainability commitment.
                                    </p>
                                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="https://wa.me/+880123456789">Pickup Request</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Carousel End --> */}
                </div>
                {/* <!-- Navbar & Hero End --> */}


            </div>
        </div>
    )
}