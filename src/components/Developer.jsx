import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef();

    // Load the GLTF model
    const { scene } = useGLTF('/models/animations/developer.glb');

    // Load animations
    const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
    const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
    const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
    const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

    // Name the animations correctly so we can reference them
    idleAnimation[0].name = 'idle';
    saluteAnimation[0].name = 'salute';
    clappingAnimation[0].name = 'clapping';
    victoryAnimation[0].name = 'victory';

    // Bind animations to the group
    const { actions } = useAnimations(
        [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
        group
    );

    useEffect(() => {
        const action = actions[animationName];
        if (action) {
            action.reset().fadeIn(0.5).play();
            return () => action.fadeOut(0.5);
        }
    }, [animationName, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
};

export default Developer;
