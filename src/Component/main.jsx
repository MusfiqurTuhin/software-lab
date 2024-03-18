import "../App.css"
import img1 from '../assets/img/house1.jpg'
import img2 from '../assets/img/house2.jpg'
import img3 from '../assets/img/bhangariwala.png'
import { Outlet } from "react-router-dom"

export default function Main() {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    )
}