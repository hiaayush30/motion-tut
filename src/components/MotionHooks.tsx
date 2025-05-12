import { IconRocket } from "@tabler/icons-react";
import { useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import React, { useRef, useState } from "react";
import { motion } from "motion/react"

type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
    content: React.ReactNode;
};

export default function MotionHooks() {
    const [background, setBackground] = useState("");
    const backgrounds = ["#343434", "#05291c", "#00193b"]
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        //you can track any motion value like scrollYProgress,translateY,translateBlur rtc
        console.log("changed values:", latest); //0 to 1 value
        const finalValue = Math.floor(latest*backgrounds.length)
        setBackground(backgrounds[finalValue])
    })
    const features: Feature[] = [
        {
            icon: <IconRocket size={48} stroke={1.5} />,
            title: "Feature One Title",
            description:
                "This is a brief description of the first feature. It highlights a key benefit or functionality.",
            content: <div>
                <img
                    src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="car"
                    height={500}
                    width={500}
                    className="rounded-lg"
                />
            </div>
        },
        {
            icon: <IconRocket size={48} stroke={1.5} />,
            title: "Another Great Feature",
            description: "Describe the second feature here. Explain how it helps users or what problem it solves.",
            content: <div>
                <img
                    src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="car"
                    height={500}
                    width={500}
                    className="rounded-lg"
                />
            </div>
        },
        // Add more features as needed
    ];

    return (
        <motion.div 
        animate={{
            background
        }}
        transition={{
            duration:1,
            ease:'easeInOut '
        }}
        ref={containerRef} className={`flex min-h-screen items-center justify-center`}>
            <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
                {features.map((feature) => ( // Removed idx as it's not used
                    <Card key={feature.title} feature={feature} />
                ))}
            </div>
        </motion.div>
    );
}

const Card = ({ feature }: { feature: Feature }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,  //if not given,works for whole container
        offset: ["start end", "end start"]  //element ka start and view port ka end se tracking shuru karke ...
    });

    // const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);
    //[0,1] is the full scrollable view here
    //useTransform will change some value(whichever you want) from -200 to 200

    const translateOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const translateBlur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
    const translateScale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])

    //you can also wrap a hook in useSpring hook
    const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [200, -200]), {
        stiffness: 100,
        damping: 30,
        mass: 1
    });

    return (
        <div ref={ref} key={feature.title} className="grid grid-cols-2 items-center gap-20 py-40">
            <motion.div
                style={{
                    // filter:`blur(${translateBlur}px)`
                    // cannot use motion values as is with string interpolation
                    filter: useMotionTemplate`blur(${translateBlur}px)`,
                    scale: translateScale
                }}
                className="flex flex-col gap-5 section-title">
                {feature.icon}
                <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
                <p className="text-lg text-neutral-400">{feature.description}</p>
            </motion.div>
            <motion.div
                style={{
                    y: translateY,
                    opacity: translateOpacity
                }}
            >{feature.content}</motion.div>
        </div>
    );
};