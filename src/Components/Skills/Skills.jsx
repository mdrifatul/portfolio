import { motion } from 'framer-motion';

const Skill = ({name, x, y}) =>{
  return(
    <>
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-black py-3 px-4 shadow-black text-white absolute" 
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration: 1.5}} 
    >{name}</motion.div>

    </>
  )
}

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-7xl w-full text-center mt-20 mb-10">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-black p-4 shadow-black text-white" whileHover={{scale:1.05}}>web</motion.div>

        <Skill name='HTML' x='-17vw' y='0vw'/>
        <Skill name='ReactJS' x='-5vw' y='-12vw'/>
        <Skill name='ExpressJS' x='10vw' y='6vw'/>
        <Skill name='CSS' x='1vw' y='12vw'/>
        <Skill name='Javascript' x='15vw' y='-10vw'/>
        <Skill name='NodeJS' x='32vw' y='-5vw'/>
        <Skill name='Tailwind' x='0vw' y='-20vw'/>
        <Skill name='Bootstrap' x='-20vw' y='12vw'/>
        <Skill name='Firebase' x='-22vw' y='-12vw'/>
        <Skill name='Git' x='25vw' y='5vw'/>
        <Skill name='Bootstrap' x='-20vw' y='12vw'/>
        <Skill name='Bootstrap' x='-20vw' y='12vw'/>

      </div>
    </div>
  );
};

export default Skills;