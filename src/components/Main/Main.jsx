import './Main.css'
import Header from '../Header/Header'

function Main() {
  return (
    <div className='Main'>
        <Header />
        <div className='mainContainer'>
            <div className='container2'>
              <div className='text'>
                <h2>Desinger Gráfico</h2>
                <h2>Transformando suas ideais em arte</h2>
                <p>Alavanque suas vendas com publicações de destaque</p>
              </div>
              <div className='mainImgs'>
                <img src="projectsImg/project01.jpg" className='mainImg1'/>
                <img src="projectsImg/project02.jpg" className='mainImg2'/>
                <img src="projectsImg/project01.jpg" className='mainImg3'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main