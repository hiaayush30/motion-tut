//variants for reusable code
//ochestrations => do something on child div on hovering on parent
//stagger => one after another


import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { IoCart, IoHome, IoPhoneLandscape } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'motion/react'

const Links = [
  {
    name: 'Home',
    to: '/', // Use 'to' instead of 'href' for react-router-dom
    icon: <IoHome size={24} />,
  },
  {
    name: 'Shop',
    to: '/shop',
    icon: <IoCart size={24} />,
  },
  {
    name: 'Support',
    to: '/support',
    icon: <IoMdContact size={24} />,
  },
];

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const parentVariant = {
    open: {
      width: "16rem"
    },
    close: {
      width: "4.5rem"
    }
  }

  const childVariant = {
    open: {
      opacity: 1,
      y: 0
    },
    close: {
      opacity: 0,
      y: -10
    }
  }

  const parent2Variant = {
    open: {
      transition: {
        staggerChildren: 0.7,
        delayChildren: 0.2
      }
    },
    close: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: -1
      }
    }
  }

  return (
    <motion.div
      initial={{
        width: "4.5 rem"
      }}
      // animate={{
      //   width: isOpen ? "16rem" : "4.5rem"
      // }}
      variants={parentVariant}
      animate={isOpen ? "open" : "close"}
      exit="close"

      transition={{
        duration: 0.3
      }}
      className={`fixed left-0 top-0 h-screen bg-red-300 transition-all duration-300 flex flex-col items-center p-4`}
    >
      <button
        className="absolute top-2 right-2 bg-blue-200 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>

      <motion.nav
        variants={parent2Variant}
        className="flex flex-col items-center w-full mt-10">
        {Links.map((link) => (
          <motion.div
            variants={childVariant}
          >
            <Link
              key={link.name}
              to={link.to} // Use 'to' prop for react-router-dom
              className={`relative flex items-center justify-center w-full p-3 rounded-md hover:bg-red-400 transition-colors duration-200 ${isOpen ? 'justify-start space-x-4' : ''
                }`}
            >
              {link.icon}
              {isOpen && <span className="text-white">{link.name}</span>}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
}

export default SideBar;