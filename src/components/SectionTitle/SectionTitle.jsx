import './SectionTitle.css'

function SectionTitle({title, right}) {
  return (
    <div className='SectionTitle' style={right ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}}>
        <h2>{title}</h2>
        <div className='line'></div>
    </div>
  )
}

export default SectionTitle