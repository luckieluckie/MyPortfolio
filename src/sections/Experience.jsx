import { Canvas } from '@react-three/fiber'
import React from 'react'
import { workExperiences } from '../constants'

const Experience = () => {
  return (
    <section className='c-space my-20'>
        <div className="text-white-600 w-full">
            <h3 className='head-text'>My Work Experience</h3>
            <div className="work-container">
                <div className="work-canvas">
                    <Canvas>

                    </Canvas>
                </div>
                <div className="work-content">
                    <div className="py-5 sm:py-10 px-2.5 sm:px-2.5">
                        {workExperiences.map(({ id, name, pos, duration, title, icon, animation}) =>(
                            <div key={id} className="work-content_container group">
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="work-content_logo">
                                        <img src={icon} alt="logo" className='h-full w-full' />
                                    </div>
                                    <div className='work-content_bar'/>
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className='text-white-800 font-bold'>{name}</p>
                                    <p className='text-sm mb-5'>{pos}--{duration}</p>
                                    <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience