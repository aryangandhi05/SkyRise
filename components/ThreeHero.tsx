"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(2.25, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0xece66d,
      roughness: 0.32,
      metalness: 0.38,
      wireframe: true
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 });
    const ringGeometry = new THREE.TorusGeometry(3.05, 0.012, 12, 160);
    const ringA = new THREE.Mesh(ringGeometry, ringMaterial);
    const ringB = new THREE.Mesh(ringGeometry, ringMaterial);
    ringA.rotation.x = Math.PI / 2.7;
    ringB.rotation.y = Math.PI / 2.9;
    group.add(ringA, ringB);

    const light = new THREE.PointLight(0xffffff, 65, 20);
    light.position.set(3, 4, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      group.rotation.x = Math.sin(Date.now() * 0.00035) * 0.16;
      ringA.rotation.z += 0.003;
      ringB.rotation.z -= 0.002;
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", onResize);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      ringGeometry.dispose();
      material.dispose();
      ringMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="three-hero" ref={mountRef} aria-hidden="true" />;
}
