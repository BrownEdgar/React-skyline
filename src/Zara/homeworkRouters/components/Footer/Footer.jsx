import './Footer.scss'

import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
        <p> <MdAlternateEmail/> Mail: jdsbsu@gmail.com</p>
        <p> <FaPhone/> Phon: +7846165315</p>
        <p> <FaTelegramPlane/> Telegram: hksbkshbv</p>
    </div>
  )
}
