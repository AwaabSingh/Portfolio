import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { services  } from '../data'
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animation';


const index = () => {
  //  console.log('Client',services );
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1' variants={routeAnimation} initial="initial" animate="animate" exit="exit">
       <h5 className='my-3 font-medium'>
       A passionate Full Stack Software Developer and Backend App Developer having an 
       experience of building Software applications with JavaScript / Reactjs / Nodejs / Typescript / NestJS 
       and some other cool libraries and frameworks.
       I am currently pursuing BSc Degree in Cyber Security      
         from Al-Hikmah University . I have 3+ years of experience in
        software Development.
       </h5>
        <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
            <h4 className='my-3 text-xl font-bold tracking-wide'>What I Do </h4>
            <p className="my-3 font-bold text-center uppercase text-green">Crazy Full Stack Developer Who Wants To Explore Every Tech Stack</p>
          
            <motion.div className='grid gap-6 lg:grid-cols-2' variants={stagger} initial="initial" animate="animate">
               {services.map((service, i) => (
                 // eslint-disable-next-line react/jsx-key
                 <motion.div variants={fadeInUp}  
                 className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
                   <ServiceCard service={service} key={i}/>
                 </motion.div>
               
               ) )}
            </motion.div>
        </div>
    </motion.div>
  )
}
  
export default index

// export const getServerSideProps =  async (context: GetServerSidePropsContext) => {
  
//    const res = await fetch('http://localhost:3000/api/services')
  
//    const data = await res.json()

//    console.log("Server", services);
   
//   return {
//       props: {
//         services: data.services
//       }
//    S }
// }

// export const getStaticProps =  async (context: GetStaticPropsContext) => {
  
//   const res = await fetch('http://localhost:3000/api/services')
 
//   const data = await res.json()

//   console.log("Server", services);
  
//  return {
//      props: {
//        services: data.services
//      }
//    }
// }
