import React from 'react'
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import model from './scene.gltf'
export default function Model() {

    const { scene, mesh } = useLoader(GLTFLoader, model);
    console.log(mesh);
  return <primitive object={scene} dispose={null} />
}

