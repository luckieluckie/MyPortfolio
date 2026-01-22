import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Ring.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

import ErrorBoundary from '../components/ErrorBoundary.jsx';

const Hero = () => {

    const isSmall = useMediaQuery({ minWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative' id="home">
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space '>
                <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
                    Hi, I am Aayush <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    Building Products and Brands
                </p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                <ErrorBoundary>
                    <Canvas className='w-full h-full' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                />
                            </HeroCamera>
                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </ErrorBoundary>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className='w-fit'>
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero