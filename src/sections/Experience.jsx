import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { workExperiences } from '../constants';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import Developer from '../components/Developer';

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');
    const isSmall = useMediaQuery({ maxWidth: 768 });


    return (
        <section className='c-space my-20' id="experience">
            <div className="text-white-600 w-full">
                <h3 className='head-text'>My Journey</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        {!isSmall && (
                            <Canvas>
                                <ambientLight intensity={7} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                                <directionalLight position={[10, 10, 10]} intensity={1} />
                                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                                <Suspense fallback={<CanvasLoader />}>
                                    <Developer position-y={-3} scale={3} animationName={animationName} />
                                </Suspense>
                            </Canvas>
                        )}
                    </div>
                    <div className="work-content">
                        <div className="py-5 sm:py-10 px-2.5 sm:px-2.5">
                            {workExperiences.map(({ id, name, pos, duration, title, icon, animation }) => (
                                <div
                                    key={id}
                                    className="work-content_container group"
                                    onClick={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                >
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo" className='h-full w-full' />
                                        </div>
                                        <div className='work-content_bar' />
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