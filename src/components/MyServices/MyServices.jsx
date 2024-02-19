import './MyServices.css'
import SectionTitle from '../SectionTitle/SectionTitle';

import { IoSquareOutline, IoTriangle } from "react-icons/io5";
import { IoMdMegaphone } from "react-icons/io";
import { FaDiceD6 } from "react-icons/fa";

function MyServices() {
  return (
    <div className='MyServices container2' id='trabalho'>
        <SectionTitle title="Meus Serviços" right={false}/>
        <div className='allServices'>
            <div className='service'>
                <div className='icon icon1'>
                    <IoTriangle />
                    <IoSquareOutline />
                </div>
                <h2>Identidade visual</h2>
                <p>Farei a logo da sua marca, algo com que os clientes possam te identificar</p>
            </div>
            <div className='service'>
                <div className='icon'>
                    <IoMdMegaphone />
                </div>
                <h2>Criação de banners e propagandas</h2>
                <p>Usarei meus conhecimentos para desenvolver propagandas convicentes que cativem seus clientes</p>
            </div>
            <div className='service'>
                <div className='icon'>
                    <FaDiceD6 />
                </div>
                <h2>Outros</h2>
                <p>Entre em contato para negociar outros tipos de trabalho</p>
            </div>
        </div>
    </div>
  )
}

export default MyServices