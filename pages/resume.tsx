import { languages, tools} from '../data'
import Bar from '../components/Bar'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation} from '../animation'

const resume = () => {

  
  
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className='px-6 py-2'>
     {/* Education $ exp */}
    <div className="grid gap-6 md:grid-cols-2">
    
    <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className='my-3 text-2xl font-bold'>Education</h5>
        <div>
            <h5 className='my-2 text-xl font-bold'> Cyber Security</h5>
            <p className='font-semibold'>Al-Hikmah University</p>
            <p className='my-3'> I am currently pursuing BSc Degree in Cyber Security      
         from Al-Hikmah University . I have 3+ years of experience in
        Software Development. </p>
        </div>
    </motion.div>

    <motion.div variants={fadeInUp} initial="initial" animate="animate">
    <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            
          <div className='my-3 border-b-4 border-green'>
            <h5 className="my-1 text-xl font-bold">ZURI | Software Developer</h5>
             <p>MARCH 2021 | Remote</p>
            </div>
            
            <div className='my-3 border-b-4 border-green'>
            <h5 className="my-1 text-xl font-bold">WEJAPA | Software Developer</h5>
             <p>OCTOBER 2021 | Remote</p>
            </div>
            
            <div className='my-3 border-b-4 border-green'>
            <h5 className="my-1 text-xl font-bold">HNGI7 | Front-End Developer</h5>
             <p>MAY 2020 | Remote</p>
            </div>
    
           
          </div>
        
    </motion.div>
    </div>
     {/* Language & tools */}
     <div className="grid gap-9 md:grid-cols-2">
        <div >
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>

        <div className='mt-11'>
          <h5 className="my-3 text-2xl font-bold"></h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
          
      </motion.div>
    )
}

export default resume
