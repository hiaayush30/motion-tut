import { useAnimate, motion, stagger } from 'motion/react'
import React, { useEffect } from 'react'
import { BsWordpress } from 'react-icons/bs';

function Animate() {
    const [scope, animate] = useAnimate();
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eose maxime doloremque culpa ullam, ducimus id, quisquam dolor sint impedit voluptatibus quaerat optio! Ipsam illo eligendi placeat exercitationem magnam natus! Dignissimos, tempore vel non aspernatur ipsa neque, ut, recusandae omnis dolorem obcaecati animi quaerat quis consequatur quam nemo reiciendis delectus id nesciunt!"

    const startAnimating = () => {
        animate("span", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
        }, {
            duration: 0.5,
            ease: "easeInOut",
            delay: stagger(0.02)
        })
    }

    return (
        <div className='min-h-screen w-screen bg-stone-800 text-white'>
            <button  onClick={()=>startAnimating()} className='bg-orange-500 p-4 rounded-lg'>What is fight club</button>
            <div ref={scope} className='text-4xl mx-auto font-bold py-40 flex flex-wrap'>
                {text.split(" ").map((word, index) => {
                    return <motion.span
                        style={{
                            opacity: 0,
                            filter: "blur(10px)",
                            y: 10
                        }}
                        className='px-2'
                        key={index}>{word}</motion.span>
                })}
            </div>
        </div>
    )
}

export default Animate
