import { Loader2 } from 'lucide';
import { useAnimate, motion } from 'motion/react'
import { BiLoaderCircle } from 'react-icons/bi';

function AnimationSequences() {
    const [scope, animate] = useAnimate();
    const startAnimating = async () => {
        await animate(".loader", {
            opacity: 1,
            display: "inline-block"
        }, {
            duration: 0.5
        })
        animate("button", {
            width: "0rem",
        }, {
            duration: 0.3
        })
        await animate(".text", {
            display: "none"
        }, {
            duration: 0.1
        })
        await animate(".loader", {
            opacity: 0,
            display: "none"
        })
        animate('button', {
            width: "5rem",
            borderRadius: "1000px",
        }, {
            duration: 0.3
        })
        await animate('button', {
            scale: [1, 1.2, 0.8, 1],
            background: "var(--color-green-500)"
        }, {
            duration: 0.7
        })
        animate(".checkmark", {
            opacity: 1,
            display: "inline-block"
        }, {
            duration: 0.3
        })
        animate(".checkmark path", {
            pathLength: 1
        }, {
            duration: 0.3
        })
    }
    return (
        <div className='m-40 relative w-[30rem] flex items-center justify-center' ref={scope}>
            <motion.button style={{ width: "30rem" }}
                onClick={startAnimating}
                className='cursor-pointer h-20 flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white font-medium'>
                <motion.span
                    className='loader'
                    initial={{
                        opacity: 0,
                        display: "hidden"
                    }}
                >
                    <BiLoaderCircle className='animate-spin text-xl' />
                </motion.span>
                <motion.span className='text'>Purchase now ($169)</motion.span>
                <motion.svg
                    initial={{
                        opacity: 0,
                        display: 'none'
                    }}
                    className={"checkmark p-3"} height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.837 17.837" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
                        <motion.path
                            initial={{
                                pathLength: 0
                            }}
                            d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></motion.path> </g> </g>
                </motion.svg>
            </motion.button>
        </div>
    )
}

export default AnimationSequences
