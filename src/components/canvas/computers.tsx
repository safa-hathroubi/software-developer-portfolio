// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense, useEffect, useState } from "react";
//
// import CanvasLoader from "../loader";
//
// type ComputersProps = {
//   isMobile: boolean;
// };
//
// // Computers
// const Computers = ({ isMobile }: ComputersProps) => {
//   // Import scene
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//
//   return (
//     // Mesh
//     <mesh>
//       {/* Light */}
//       <hemisphereLight intensity={0.15} groundColor="yellow" />
//       <pointLight intensity={1}/>
//       <spotLight
//         position={[0, 100, 20]}
//         angle={0.2}
//         penumbra={1}
//         intensity={200}
//         castShadow
//         shadow-mapSize={1024}
//       />
//
//       <directionalLight
//           position={[0, 50, 50]} // Light from above and slightly in front
//           intensity={2} // Moderate intensity to complement the spotLight
//           castShadow
//       />
//
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };
//
// // Computer Canvas
// const ComputersCanvas = () => {
//   // state to check mobile
//   const [isMobile, setIsMobile] = useState(false);
//
//   // Check if device is Mobile
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//
//     setIsMobile(mediaQuery.matches);
//
//     // handle screen size change
//     const handleMediaQueryChange = (event: MediaQueryListEvent) => {
//       setIsMobile(event?.matches);
//     };
//
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);
//
//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true, alpha: true }}
//     >
//       {/* Canvas Loader show on fallback */}
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         {/* Show Model */}
//         <Computers isMobile={isMobile} />
//       </Suspense>
//
//       {/* Preload all */}
//       <Preload all />
//     </Canvas>
//   );
// };
//
// export default ComputersCanvas;

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../loader";

import { useTexture } from "@react-three/drei";

type ComputersProps = {
  isMobile: boolean;
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene
  const computer = useGLTF("./cyber_desk/scene.gltf");
    //
    // const textures = useTexture({
    //     map: "./textures/your_texture_map.jpg", // Replace with your texture path
    //     roughnessMap: "./textures/your_roughness_map.jpg", // Optional if you have additional textures
    //     normalMap: "./textures/your_normal_map.jpg", // Optional if you have normal maps
    // });

    return (
    // Mesh
    <mesh>
      {/* Light */}
      <hemisphereLight intensity={0.15} groundColor="yellow" />
      <pointLight intensity={1}/>
      <spotLight
        position={[0, 100, 20]}
        angle={0.2}
        penumbra={1}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
      />

      <directionalLight
          position={[0, 50, 50]} // Light from above and slightly in front
          intensity={3} // Moderate intensity to complement the spotLight
          castShadow
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [11.5, -3.55, 0]}
        rotation={[0, 1.05, 0.005]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // Prevents looking too high
          minPolarAngle={Math.PI / 2}   // Prevents looking too low
          maxAzimuthAngle={Math.PI / 4 + 0.51} // Limit right rotation (sideways)
          minAzimuthAngle={-Math.PI / 4 + 1.7}
        />
        {/* Show Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;