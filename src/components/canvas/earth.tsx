import { OrbitControls, useGLTF } from "@react-three/drei";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Suspense, useRef} from "react";

import CanvasLoader from "../loader";

// Earth
const Earth = () => {
  // import earth scene
  const earth = useGLTF("./earth/scene.gltf");

  return (
      <group>
    <primitive object={earth.scene} scale={2.2} position-y={0} rotation-y={0} />
      </group>
);
};

// Light attached to the camera
const CameraWithLight = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    // Update the group's position and rotation to match the camera
    if (groupRef.current) {
      groupRef.current.position.copy(camera.position);
      groupRef.current.rotation.copy(camera.rotation);
    }
  });

  return (
      <group ref={groupRef}>
        <perspectiveCamera ref={cameraRef} />
        {/* Attach a point light that follows the camera */}
        <directionalLight intensity={300} position={[-40, 10, 500]} color={"#f7abff"} />
      </group>
  );
};


// Earth Canvas
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      {/* Suspense show Canvas Loader on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Lights */}
        <CameraWithLight /> {/* Light attached to the camera */}

        {/* Earth */}
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
