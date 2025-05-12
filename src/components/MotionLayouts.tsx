import React, { useState } from 'react'
import { motion } from "motion/react"

//if there are 2 divs with same layout ids and there is a difference in layout,the animation is automatically applied

type Card = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => React.ReactNode
}

const cards: Card[] = [
    {
        description: "Lana Del Rey",
        title: "Summertime Sadness",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHU32UDSg77dxEKlfgJC7MN0Zmq9kqU3B4rNmnvlgrHoNY6Z4iGsEUUAegJMqUjSyrsHI&usqp=CAU",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className='text-[10px]'>
                    Lana Del Rey Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facere, omnis iure rem voluptate iusto repellendus ratione nulla fugit, minima itaque enim accusamus tenetur quos sed molestiae exercitationem nobis obcaecati, magnam doloribus error illo. Suscipit numquam id reiciendis optio beatae!
                </p>
            )
        }
    },
    {
        description: "Lana Del Rey",
        title: "Moonshine",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHU32UDSg77dxEKlfgJC7MN0Zmq9kqU3B4rNmnvlgrHoNY6Z4iGsEUUAegJMqUjSyrsHI&usqp=CAU",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className='text-[10px]'>
                    Lana Del Rey Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facere, omnis iure rem voluptate iusto repellendus ratione nulla fugit, minima itaque enim accusamus tenetur quos sed molestiae exercitationem nobis obcaecati, magnam doloribus error illo. Suscipit numquam id reiciendis optio beatae!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione mollitia beatae, ea voluptate distinctio quasi eaque inventore cum deserunt. Ullam molestiae, corrupti quasi deserunt, quibusdam, laudantium aperiam minima voluptatum culpa omnis provident necessitatibus nobis sint eaque consectetur quaerat quam doloribus aspernatur. Pariatur qui, quia eaque ipsam laudantium facilis officiis!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit adipisci iste laborum labore quae dolore corporis molestiae. Corrupti recusandae nemo esse doloribus sunt mollitia officiis laudantium nam voluptatibus nihil natus omnis delectus voluptatem, veritatis laboriosam! Deserunt velit, ducimus odio sunt aspernatur cupiditate dicta porro, saepe ullam nisi quia consectetur beatae?
                </p>
            )
        }
    },
    {
        description: "Lana Del Rey",
        title: "Serene",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHU32UDSg77dxEKlfgJC7MN0Zmq9kqU3B4rNmnvlgrHoNY6Z4iGsEUUAegJMqUjSyrsHI&usqp=CAU",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className='text-[10px]'>
                    Lana Del Rey Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facere, omnis iure rem voluptate iusto repellendus ratione nulla fugit, minima itaque enim accusamus tenetur quos sed molestiae exercitationem nobis obcaecati, magnam doloribus error illo. Suscipit numquam id reiciendis optio beatae!
                </p>
            )
        }
    }
]

function MotionLayouts() {
    const [current, setCurrent] = useState<null | Card>(null);
    return (
        <div className='py-40 min-h-screen bg-gray-200 relative'>
            {current && <motion.div onClick={() => setCurrent(null)}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                className='fixed h-full w-full inset-0 bg-black/50 backdrop-blur-sm'></motion.div>}
            {current && <motion.div layoutId={`card-${current.title}`}
                className='fixed inset-0 m-auto z-20 backdrop-blur-sm bg-white h-[500px] w-80 rounded-2xl border border-neutral-400 p-4 flex flex-col items-center justify-between'>
                <motion.img
                    layoutId={`img-${current.title}`}
                    className='h-60 aspect-square rounded-xl'
                    src={current.src} />
                <div className='flex justify-between items-center'></div>
                <div className='flex gap-5 items-center'>
                    <div className='flex flex-col items-start gap-2'>
                        <motion.h2 layoutId={`h2-${current.title}`} className='font-bold text-lg text-black'>{current.title}</motion.h2>
                        <motion.p layoutId={`p-${current.title}`} className='text-xs text-neutral-500'>{current.description}</motion.p>
                        <motion.div className='overflow-auto h-32 py-1 [mask-image:linear-gradient(to_top,transparent_10%,black_40%)]'
                            initial={{
                                filter: 'blur(10px)',
                                opacity: 0
                            }}
                            animate={{
                                filter: 'blur(0px)',
                                opacity: 1
                            }}
                            transition={{
                                delay: .2
                            }}
                        >
                            {current.content()}
                        </motion.div>
                    </div>
                </div>
                <button
                    className='px-2 py-1 bg-green-500 rounded-full text-white text-xs'>
                    {current.ctaLink}
                </button>
            </motion.div>}
            <div className='max-w-lg mx-auto flex flex-col gap-10'>
                {cards.map((card, index) => {
                    return <motion.div
                        layoutId={`card-${card.title}`}
                        key={index} className='rounded-lg p-4 bg-white'>
                        <div className='flex gap-10 items-center justify-between w-full'>
                            <div className='flex gap-5 items-center'>
                                <motion.img layoutId={`img-${card.title}`} src={card.src} alt={card.title} className='h-16 aspect-square rounded-lg flex justify-between' />
                                <div className='flex flex-col items-start gap-2'>
                                    <motion.h2 layoutId={`h2-${card.title}`} className='font-bold text-lg text-black'>{card.title}</motion.h2>
                                    <motion.p layoutId={`p-${card.title}`}  className='text-xs text-neutral-500'>{card.description}</motion.p>
                                </div>
                            </div>
                            <button onClick={() => setCurrent(card)}
                                className='px-2 py-1 bg-green-500 rounded-full text-white text-xs'>
                                {card.ctaText}
                            </button>
                        </div>
                    </motion.div>
                })}
            </div>
        </div>
    )
}

export default MotionLayouts
