import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'



const TechMobile = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologie) => (
        <div key={technologie.name}>
          <div className='p-3 h-24 w-24 bg-slate-100 sphere sphere-shadow' >
            <img className="object-contain"src={technologie.icon} alt={technologie.name} />
          </div>
          <p className='text-center mt-2 text-secondary'>{technologie.name}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(TechMobile, "") 