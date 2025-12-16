import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import * as THREE from "three";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const isMobile = window.innerWidth < 640;
    const width = isMobile ? 50 : 60;
    const height = isMobile ? 50 : 60;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    // Create smooth sphere for liquid glass effect
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.15,
      roughness: 0,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0,
      transmission: 0.95,
      thickness: 1,
      ior: 1.5,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add subtle lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x6366f1, 0.5, 100);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Smooth rotation animation
    let isAnimating = true;
    const animate = () => {
      if (!isAnimating || !isVisible) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        return;
      }

      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isAnimating = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (rendererRef.current) {
        renderer.dispose();
        rendererRef.current = null;
      }
      geometry.dispose();
      material.dispose();
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden group transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Back to top"
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.15) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Three.js animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Inner circle with arrow */}
      <div 
        className="absolute inset-0 flex items-center justify-center rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.2) 70%, transparent 100%)',
        }}
      >
        <ArrowUp 
          className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300" 
        />
      </div>
      
      {/* Glass highlight */}
      <div 
        className="absolute top-0 left-1/4 w-1/2 h-1/3 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%)',
        }}
      />
    </button>
  );
};

export default BackToTop;

