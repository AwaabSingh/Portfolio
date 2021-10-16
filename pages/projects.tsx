import { motion } from "framer-motion"
import { useState } from "react"
import { fadeInUp, routeAnimation, stagger } from "../animation"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../type"

const Projects = () => {
   const [projects, setProjects] =useState(projectsData)
   const [active, setActive] = useState('all');

   const [showDetail, setShowDetail] = useState<number | null>(null);
   
   const handlerFilterCategory = (category: Category | 'all') => {
       if(category === 'all') {
           setProjects(projectsData)
           setActive(category)
           return;
       } 

      const newArray = projectsData.filter(project => project.category.includes(category))
      setProjects(newArray)
      setActive(category)
   }
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className='px-5 py-2 overflow-auto' style={{ height: '65vh'}}>
            <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active}/>

            <motion.div className='relative grid grid-cols-12 gap-4 my-3' variants={stagger} initial="initial" animate="animate">
                {projects.map(project => (
                    // eslint-disable-next-line react/jsx-key
                    <motion.div className='col-span-12 sm:cols-span-6 lg:col-span-4' variants={fadeInUp}>
                        <ProjectCard key={project.name} project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div> 
    )
}

export default Projects
