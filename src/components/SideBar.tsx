//variants for reusable code
//ochestrations => do something on child div on hovering on parent


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

  const sideBarVariant = {
    open:{
      width:"16rem"
    },
    close:{
      width:"4.5rem"
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
      variants={sideBarVariant}
      animate={isOpen ? "open":"close"}

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

      <div className="flex flex-col items-center w-full mt-10">
        {Links.map((link) => (
          <Link
            key={link.name}
            to={link.to} // Use 'to' prop for react-router-dom
            className={`relative flex items-center justify-center w-full p-3 rounded-md hover:bg-red-400 transition-colors duration-200 ${isOpen ? 'justify-start space-x-4' : ''
              }`}
          >
            {link.icon}
            {isOpen && <span className="text-white">{link.name}</span>}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default SideBar;