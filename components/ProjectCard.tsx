import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject} from "react-icons/ai"
import { MdClose} from 'react-icons/md'
import { IProject } from "../type"
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation"

const ProjectCard:FunctionComponent<{ project:IProject;
showDetail: null|number
setShowDetail: (id:null|number) => void
}> = ({project:{
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    image_path,
    name,
    id
},
 showDetail,
 setShowDetail
}) => {
    
    return (
        <motion.div variants={stagger} initial="initial" animate="animate">
            <Image
             src={image_path} 
             alt={name} 
             className='cursor-pointer' 
             onClick={() => setShowDetail(id)}
             width='300'
             height='150'
             layout='responsive'
             />
            <p className="my-2 text-center">{name}</p>
              
            {showDetail === id && (
        <motion.div variants={stagger} initial="initial" animate="animate" className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black rounded-lg md:p-10 md:grid-cols-2 gap-x-12 text-white bg-dark-100">
          <div>
            {/* <img src={image_path} alt={name} /> */}
                <motion.div variants={fadeInUp} className='border-4 border-gray-100'>
                <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
                </motion.div>
            
            <motion.div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial="initial" animate="animate"> 
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>

            <motion.div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1  rounded-full top-3 right-3 focus:outline-none bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
               
        
        </motion.div>
        
    )
}

export default ProjectCard
