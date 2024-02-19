import './Contact.css'

import { FaInstagram, FaWhatsappSquare, FaTelegram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <div className='Contact container2'>
        <div className='contact1'>
          <div className='profile'>
            <div className='logo'></div>
            <div className='profileText'>
              <h2>EMABGU</h2>
              <p>Designer Gráfico</p>
            </div>
          </div>
          <div className='email'>
            <p>Meu Email</p>
            <h3>emabgudesigner@gmail.com</h3>
          </div>
        </div>

        <div className='contact2'>
          <h1>Vamos Conversar</h1>
          <p>Entre em contato e me fale sobre o seu projeto, darei o melhor para entregar um trabalho de qualidade</p>
          <div className='contactIcons'>
            <a href="https://www.instagram.com/emabgudesign/" target='_blank'><FaInstagram /></a>
            <a href="https://api.whatsapp.com/send?phone=5511961794095&text=Ol%C3%A1" target='_blank'><FaWhatsappSquare /></a>
            <a href="mailto:emabgudesigner@gmail.com" target='_blank'><MdOutlineMailOutline /></a>
            <a href="https://t.me/EMABGU" target='_blank'><FaTelegram /></a>
          </div>
        </div>
    </div>
  )
}

export default Contact