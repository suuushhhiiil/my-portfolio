import { GitHub, LinkedIn, Twitter, } from "@mui/icons-material";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import '../styles/Main.css';
import '../styles/Transition.css';
import { Link } from 'react-router-dom';
import viewMyWork from '../assets/view-my-work.png'
import { services, skills } from "../utils/Sources";

const Main = () => {


    return (
        <>
            <div className='lg:flex items-center justify-between lg:h-[85vh] lg:px-20 p-8 space-y-3 lg:space-y-0 lg:space-x-3'>
                <div className='lg:w-1/3'>
                    <div className='transition-color-800 heroSection flex items-center h-[55vh] rounded-[30px] p-8'>
                        <h1 className='lg:text-[6.4vh] md:text-4xl text-4xl headline font-sans font-semibold'>
                            Crafting Seamless Web Experiences
                        </h1>
                    </div>
                    <div className={`transition-color-800 relative bg-heading rounded-[30px] h-[20vh] mt-3 flex items-end p-8`}>
                        <p className='transition-color-500 lg:text-[6vh] text-4xl text-textInvert font-sans'>
                            Get In Touch
                        </p>
                        <div className='transition-color-500 absolute top-5 right-5 text-textInvert'>
                            <NorthEastIcon sx={{ fontSize: 30 }} />
                        </div>
                    </div>
                </div>


                <div className='lg:w-1/3'>
                    <div className={`transition-color-800 relative flex flex-col justify-between bg-secondary h-[38vh] p-8 rounded-[30px] overflow-clip`}>
                        <p className='transition-color-500 font-sans font-semibold lg:text-[6vh] text-4xl text-heading z-10'>
                            View Work
                        </p>
                        <div>
                            <img src={viewMyWork} className='translate-x-[35%] lg:scale-[0.7] scale-[1.2] -z-100' alt="" />
                        </div>
                        <div className='transition-color-500 absolute top-8 right-8 text-text'>
                            <NorthEastIcon sx={{ fontSize: 30 }} />
                        </div>
                    </div>
                    <div className='transition-color-800 relative flex flex-col bg-secondary h-[37vh] p-8 rounded-[30px] overflow-clip mt-3'>
                        <p className='transition-color-500 font-sans font-semibold lg:text-[6vh] text-4xl text-heading z-10'>
                            Services
                        </p>
                        <div className='text-heading lg:mt-4 mt-5 lg:ml-4'>
                            <ul className="">
                                {
                                    services.map((service) => (
                                        <li key={service.title}>
                                            <div className="flex gap-x-5 text-nowrap lg:items-center text-lg lg:text-[20px] lg:font-light leading]">
                                                <div className="hidden lg:flex">
                                                    {service.icon}
                                                </div>
                                                {service.title}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='lg:w-1/3 '>
                    <div className='transition-color-800 bg-primary h-[65vh] p-8 rounded-[30px]'>
                        <p className='transition-color-500 font-sans font-semibold lg:text-[6vh] text-4xl text-white z-10'>
                            Skills
                        </p>
                        <div className='flex flex-wrap justify-center lg:mt-10 mt-5 w-full'>
                            <ul className="flex flex-wrap gap-3 max-w-full">
                                {
                                    skills.map((skill) => (
                                        <li key={skill.title}>
                                            <div className="rounded-full border-[0.1px] border-white px-4 py-1 w-fit flex gap-x-3 text-nowrap lg:items-center text- lg:text-[18px] lg:font-extralight text-white">
                                                <div className="flex items-center">
                                                    {skill.icon}
                                                </div>
                                                {skill.title}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='transition-color-800 bg-heading h-[10vh] mt-3 lg:p-8 p-4 rounded-[30px] flex items-center lg:justify-center justify-around lg:space-x-5'>
                        <p className='lg:text-[2.8vh] text-xl text-textInvert font-sans font-semibold'>
                            Follow Me
                        </p>
                        <div className='space-x-3'>
                            <LinkedIn
                                sx={{ fontSize: 33 }}
                                className="transition-color-500 text-primary hover:text-textInvert cursor-pointer"
                            />
                            <Twitter
                                sx={{ fontSize: 33 }}
                                className="transition-color-500 text-primary hover:text-textInvert cursor-pointer"
                            />
                            <GitHub
                                sx={{ fontSize: 33 }}
                                className="transition-color-500 text-primary hover:text-textInvert cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;