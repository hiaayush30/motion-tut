import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";
import { IoAdd, IoChatboxOutline, IoClose, IoHourglassOutline } from "react-icons/io5";


function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

function Card() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.98,
                            filter: 'blur(10px)'
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px)'
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: 'blur(10px)'
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                        className={cn(
                            "w-80 h-[27rem] min-h-[27rem] rounded-xl",
                            "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                            "p-6 flex flex-col"
                        )}>
                        <h2 className="font-bold text-[10px]">Aceternity UI components</h2>
                        <p className="text-neutral-600 mt-2 text-[10px]">A collection of beautiful ui components.Let's get on with it</p>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center gap-1 mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                                <img src="logo-dark.png" className="w-6 h-6" />
                                Aceternity UI
                                <IoClose onClick={() => setOpen(false)} className="w-3 h-3 text-neutral-400" />
                            </button>
                        </div>
                        <div className="relative bg-gray-100 border border-dashed border-neutral-200 flex-1 mt-4 rounded-lg">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blue(10px)"
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: 'blur(0px)'
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                    // type:"spring",
                                    // stiffness:100,
                                    // damping:15
                                }}
                                className=" absolute border border-neutral-200 inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">
                                <div className="text-[10px] items-start flex gap-2 p-4">
                                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <IoChatboxOutline className="h-4 w-4 text-neutral-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">
                                            Aceternity UI components
                                        </p>
                                        <p className="text-neutral-400 text-[8px] mt-1">
                                            A collection of UI components
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[10px] items-start flex gap-2 p-4">
                                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <IoHourglassOutline className="h-4 w-4 text-neutral-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">
                                            24 hours turnaround
                                        </p>
                                        <p className="text-neutral-400 text-[8px] mt-1">
                                            super fast delivery at warp speed
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[10px] items-start flex gap-2 p-4">
                                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <IoChatboxOutline className="h-4 w-4 text-neutral-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">
                                            Aceternity UI components
                                        </p>
                                        <p className="text-neutral-400 text-[8px] mt-1">
                                            A collection of UI components
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[10px] items-start flex gap-2 p-4">
                                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <IoChatboxOutline className="h-4 w-4 text-neutral-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">
                                            Aceternity UI components
                                        </p>
                                        <p className="text-neutral-400 text-[8px] mt-1">
                                            A collection of UI components
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center flex-1 text-[10px] text-neutral-500 flex-shrink-0 p-2">
                                    <IoAdd />
                                    Create new post
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Card
