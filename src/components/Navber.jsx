import Logo from '../images/Logo.png'
import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom";
export const Navber = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleMenuClick =()=>{
        setShowMenu(!showMenu)
    }

    return (
        <div className={'w-full justify-between items-center text-[#475569]'}>
             <div className={'max-w-[1216px] h-[48px] mx-auto'}>
               <div className={'flex justify-between items-center'}>
                   <div><img className={'p-4'} src={Logo} alt=""/></div>
                   <div>
                        <ul className={'md:flex md:gap-[32px] hidden'}>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/achievements">Achievements</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                   </div>
                   <div className={'gap-[8px] flex relative'}>
                       <button className={'md:flex border-1 md:px-5 py-2 hidden rounded-full'}>Sign Up</button>
                       <button className={'md:flex border-1 md:px-5 py-2 hidden rounded-full bg-[#4F46E5] text-white'}>Log In</button>
                       <GiHamburgerMenu onClick={handleMenuClick} className={'text-3xl mx-5 flex md:hidden'} />
                       {showMenu && <div>
                               <ul className={'md:hidden md:gap-[32px] absolute top-14 left-[-400px] gap-10'}>

                                   <li><Link to={"/features"}>Features</Link></li>
                                   <li><Link to={"/achievements"}>Achievements</Link></li>
                                   <li><Link to={"/testimonials"}>Testimonials</Link></li>
                                   <li><Link to={"/faq"}>FAQ</Link></li>
                                   {/*<li><a href="">Features</a></li>*/}
                                   {/*<li><a href="">Achievements</a></li>*/}
                                   {/*<li><a href="">Testimonials</a></li>*/}
                                   {/*<li><a href="">FAQ</a></li>*/}
                                   {/*<li><a href="">Features</a></li>*/}
                               </ul>
                           </div>
                       }

                   </div>
               </div>
             </div>
        </div>
    )
}