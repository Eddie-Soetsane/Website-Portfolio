import Image from 'next/image'
import { Metadata } from 'next'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import atar from "../public/ReadyPlayerMe-Avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import contact from "../public/contact.png";


export const metadata: Metadata = {
  title: 'Edwin Soetsane Portofolio',
}

export default function Home() {
  return (
    <div>
    <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between dark:text-white'>
          <h1 className='text-xl font-burtons'>Developed by Edwin</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-800 font-medium dark:text-teal-400 md:text-6xl'>Edwin Soetsane</h2>
          <h3 className='text-2xl py-2'>2023 Graduate and developer</h3>
          <p className='text-md py-5 leading-8 text-gray-200'>
          As a recent computer science graduate, I'm an adaptable problem-solver ready to explore different fields
          and apply my technical skills to innovate and make a meaningful impact in the ever-evolving world of technology.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-100'>
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={atar} layout='fill' objectFit='cover'/>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-2xl py-1'>What can I do?</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          I am well versed in programming in Python, Java and C++. The langauge that I have the
          most experience in is Python which I have been coding in since I was 14. I know how
          to create a range of different with React and deep learning using neural networks 
          for example. I am excited to grow my skills that I have learned from university by gaining
          experience and freelancing.
          </p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
            <Image src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Projects Coded</h3>
            <p className='py-2'>
              Here is examples of my projects ....
            </p>
            <h4 className='py-4 text-teal-600'>Coding tools I use</h4>
            <p className='text-gray-400 py-1'>Python</p>
            <p className='text-gray-400 py-1'>Java</p>
            <p className='text-gray-400 py-1'>C++</p>
            <p className='text-gray-400 py-1'>Unity</p>
            <p className='text-gray-400 py-1'>Javascript</p>
            <p className='text-gray-400 py-1'>TensorFlow</p>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}
