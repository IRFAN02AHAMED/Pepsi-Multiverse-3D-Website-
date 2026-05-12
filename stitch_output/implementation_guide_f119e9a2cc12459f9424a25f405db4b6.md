# Pepsi Multiverse: Technical Implementation Guide

This project is architected as an immersive, high-performance 3D experience using a modern Next.js 15 stack.

## Tech Stack
- **Framework**: Next.js 15 (App Router), TypeScript
- **3D Engine**: Three.js, React Three Fiber (R3F), Drei
- **Animation**: GSAP (ScrollTrigger), Framer Motion, Lenis (Smooth Scroll)
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: Zustand (for flavor switching and camera states)

## Project Structure
- `/components/3d`: R3F components (Cans, Environments, Particles, Shaders)
- `/components/sections`: UI overlays for each section (Hero, Viewer, Story)
- `/store`: Zustand stores for `useUniverseStore` (active flavor, transition state)
- `/lib/shaders`: Custom GLSL for liquid and environment effects

## Key Systems

### 1. The Flavor Configuration System
Create a centralized config for the 10 universes:
```typescript
const flavors = {
  original: {
    color: '#005CB4',
    particleType: 'bubbles',
    environment: 'stadium',
    lightIntensity: 1.2
  },
  // ... other flavors
}
```

### 2. Cinematic Camera Controller
Use `Drei`'s `CameraControls` or `OrbitControls` with GSAP for scripted movements:
- **Switching flavors**: Trigger a camera zoom-in/out while swapping the environment model.
- **Scroll interaction**: Map `window.scrollY` to camera position and rotation.

### 3. Performance Optimization
- **Asset Loading**: Use `useGLTF` with `Suspense`. Use compressed `.glb` or `.gltf` with Draco compression.
- **Adaptive Quality**: Use `performance` from `@react-three/fiber` to toggle post-processing (Bloom, Chromatic Aberration) on lower-end devices.

## Setup Instructions
1. Install dependencies: `npm install three @types/three @react-three/fiber @react-three/drei gsap framer-motion lenis zustand`
2. Configure `Lenis` in your root layout for smooth scrolling.
3. Initialize the R3F `<Canvas />` in a fixed background layer.
4. Use `Zustand` to bridge the UI scroll state with the 3D environment.