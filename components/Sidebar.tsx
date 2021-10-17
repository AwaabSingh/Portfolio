import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import {GoLocation} from  'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
 
    const {theme, setTheme} = useTheme();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }  
    
    return (
        <div>
            <Image src="/images/Awaab.jpeg" alt="user avater" 
             className= 'mx-auto rounded-full'
             height='128'
             width='128'
             quality='100'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                 <span className='text-2xl text-green'>Abdul-Fattah </span>
                  <span className='text-2xl'> Abdul-Kareem  </span>   
                </h3>
            <p className='px-2 py-1 my-3 rounded-full bg-dark-200'>Software Developer</p>
            <a  href="/assets/Abdul_Fattah_cv.pdf"
        download="Abdul_Fattah_cv.pdf" className='flex items-center justify-center px-2 py-1 my-3 rounded-full bg-dark-200 '> <GiTie className='w-6 h-6 '/> Download Resume</a>
            {/* Socail icons */}
             <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                 <a href="https://github.com/AwaabSingh">
                 <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                 </a>
                 <a href="https://www.linkedin.com/in/abdul-kareem-abdul-fattah-ba0ab6209/">
                 <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                 </a>
                 <a href="">
                 <AiFillTwitterCircle className='w-8 h-8 cursor-pointer'/>
                 </a>
                 <a href="https://wa.me/+2349072739445/">
                 <AiOutlineWhatsApp className='w-8 h-8 cursor-pointer'/>
                 </a>
                 
             </div>
            {/* Address */}
            <div className='py-5 my-5 bg-dark-200' style={{marginRight: '-1rem', marginLeft: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation className='className="mr-2"'/> <span>Abuja</span>
                    </div>
                   
                    <p className='my-2'>adeoyin2828@gmail.com</p>
                    <p className='my-2'>+234 907 273 9445 
                      <br/>  +234 901 058 9115</p>
                </div>
                 {/* Email Button */}
                 <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={() => window.open('mailto:adeoyin2828@gmail.com')}>Email Me</button>
                 {/* <button onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle</button> */}
            
        </div>
    )
}

export default Sidebar

