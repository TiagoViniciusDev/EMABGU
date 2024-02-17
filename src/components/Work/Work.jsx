import './Work.css'

import WorkInfo from '../WorkInfo/WorkInfo'
import MyServices from '../MyServices/MyServices'
import RecentWorks from '../RecentWorks/RecentWorks'

function About() {
  return (
    <div className='About'>
      <MyServices />
      <WorkInfo />
      <RecentWorks />
    </div>
  )
}

export default About