import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../style'
import { github } from '../assets'
import { figma } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({project}) => {
  return(
    <motion.div>
      {project.name}
    </motion.div>
  )
} 

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('','',0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl'
        >

        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} index={index} project={project}/>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works,"")