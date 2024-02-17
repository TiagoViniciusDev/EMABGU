import './RecentWorks.css'

import Slider from '../Slider/Slider'
import SectionTitle from '../SectionTitle/SectionTitle'

function RecentWorks() {
  return (
    <div className='RecentWorks container2'>
        <SectionTitle title="Projetos Recentes" right={true}/>
        <div className='myWorks'>
          <Slider />
        </div>
    </div>
  )
}

export default RecentWorks