import '../../App.css'
import img10 from '../../assets/img/house1.jpg'
import img11 from '../../assets/img/house2.jpg'


export default function Banner() {
    return (
        <div>
            <div className='contan'>
                <img src={img10} className='img' alt="" />
                <div className='color'>

                </div>
                <div className='item'>
                    <h4 className='text2'>BhangariWala</h4>
                    <h2 className='text1'>Redefining Recycling for a Greener Tomorrow</h2>
                    <p className='text2'>Welcome to BhangariWala, where we revolutionize recycling and environmental conservation. Our mission: empower individuals and businesses for a greener tomorrow through seamless recycling solutions and sustainability commitment.</p>
                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="https://wa.me/+880123456789">Pickup Request</a>
                </div>
            </div>
        </div>
    )
}