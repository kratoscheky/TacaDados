/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import glb from "./d20.glb";

type GLTFResult = GLTF & {
  nodes: {
    d20: THREE.Mesh;
  };
  materials: {};
};

export const D20 = React.forwardRef<
  THREE.Group,
  JSX.IntrinsicElements["group"]
>(({ children, ...props }, ref) => {
  const { nodes } = useGLTF(glb) as unknown as GLTFResult;
  return (
    <group ref={ref} {...props} scale={0.1} dispose={null}>
      <group name="dice">
        <mesh
          name="d20"
          castShadow
          receiveShadow
          geometry={nodes.d20.geometry}
          material={nodes.d20.material}
          rotation={[0, 0, -1.38]}
        >
          {children}
          <group
            name="020_locator_1"
            position={[1.08, -0.21, 0]}
            rotation={[0, 0, -1.76]}
          />
          <group
            name="020_locator_10"
            position={[-0.21, 0.88, 0.62]}
            rotation={[-0.37, 1.35, 1.01]}
          />
          <group
            name="020_locator_11"
            position={[0.21, -0.9, -0.6]}
            rotation={[2.68, -1.36, -1.04]}
          />
          <group
            name="020_locator_12"
            position={[-0.35, 0.19, 1.02]}
            rotation={[0.34, 1.21, 1.06]}
          />
          <group
            name="020_locator_13"
            position={[0.67, -0.88, 0]}
            rotation={[1.56, -0.92, -1.58]}
          />
          <group
            name="020_locator_14"
            position={[-0.87, -0.21, -0.64]}
            rotation={[2.5, 0.62, 1.77]}
          />
          <group
            name="020_locator_15"
            position={[0.36, -0.19, 1.02]}
            rotation={[-0.34, -1.21, -2.08]}
          />
          <group
            name="020_locator_16"
            position={[-0.2, 0.9, -0.6]}
            rotation={[-2.68, 1.36, 2.1]}
          />
          <group
            name="020_locator_17"
            position={[0.53, 0.89, 0.38]}
            rotation={[-1.32, -1.05, -1.72]}
          />
          <group
            name="020_locator_18"
            position={[-0.52, -0.89, 0.38]}
            rotation={[1.32, 1.05, 1.43]}
          />
          <group
            name="020_locator_19"
            position={[0.88, 0.21, -0.64]}
            rotation={[-2.5, -0.62, -1.37]}
          />
          <group
            name="020_locator_2"
            position={[-0.87, -0.2, 0.64]}
            rotation={[0.66, 0.62, 1.36]}
          />
          <group
            name="020_locator_20"
            position={[-1.07, 0.21, 0]}
            rotation={[0, 0, 1.38]}
          />
          <group
            name="020_locator_3"
            position={[0.57, 0.86, -0.39]}
            rotation={[-1.81, -1.05, -1.41]}
          />
          <group
            name="020_locator_4"
            position={[-0.56, -0.86, -0.39]}
            rotation={[1.81, 1.05, 1.73]}
          />
          <group
            name="020_locator_5"
            position={[0.22, -0.88, 0.62]}
            rotation={[0.37, -1.35, -2.13]}
          />
          <group
            name="020_locator_6"
            position={[-0.34, 0.23, -1.02]}
            rotation={[2.99, 1.24, 1.9]}
          />
          <group
            name="020_locator_7"
            position={[0.88, 0.2, 0.64]}
            rotation={[-0.66, -0.62, -1.78]}
          />
          <group
            name="020_locator_8"
            position={[-0.66, 0.88, 0]}
            rotation={[-1.56, 0.92, 1.56]}
          />
          <group
            name="020_locator_9"
            position={[0.35, -0.24, -1.02]}
            rotation={[-2.99, -1.24, -1.24]}
          />
        </mesh>
      </group>
    </group>
  );
});

useGLTF.preload(glb);
