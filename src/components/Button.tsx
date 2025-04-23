import {motion} from "motion/react"
import { IoMail } from "react-icons/io5"

function Button() {
    return (
        <div className='perspective-[1000px] [transform-style:preserve-3d]'>
            <motion.a
                whileHover={{
                    rotateX: 15,
                    rotateY: 15,
                    translateZ: 100,
                    y: -5,
                    boxShadow: '0px 10px 25px rgba(8,112,184,0.7)' //overrides below shadow
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
                whileTap={{
                    y: 0
                }}
                href="mailto:hiaayush30@gmail.com"
                target='_blank'
                className="group relative p-3 flex items-center gap-2 bg-stone-900 rounded-lg shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
                <IoMail className='group-hover:text-cyan-500 transition-colors duration-300 text-white' />
                <span className='group-hover:text-cyan-500 transition-colors duration-300 text-white'>Email</span>
                <span className='absolute inset-x-0 h-px bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto'></span>
                <span className='group-hover:opacity-100 opacity-0 transition-all duration-300  blur:md absolute inset-x-0 h-[3px] bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mx-auto'></span>
            </motion.a>
        </div>
    )
}

export default Button
