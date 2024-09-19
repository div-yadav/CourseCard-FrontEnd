import React from 'react';
import Sidebar from '../components/Sidebar';

const SidebarPage: React.FC = () => {
  const title1 = "Course Introduction";
  const title2 = "Basics Of Blender 3D";
  const title3 = "Mesh Modeling";
  const title4 = "Mesh Editing Operations";
  const title5 = "Most common Modifiers";
  const title6 = "Orthographic Refrences";
  const title7 = "Sculpting";


  const items1 = [
    "Introduction",
    "Downloading Blender",
    "Settings and Preferences",
    "Blender Interface"
  ];
  const items2 = [
    "Introduction to the Blender Interface",
    "Navigating the 3D Viewport",
    "Working with Blender's Tool Panels"
  ];
  
  const items3 = [
    "Creating Basic Meshes",
    "Extruding and Insetting Faces",
    "Using Loop Cuts and Edge Loops"
  ];
  
  const items4 = [
    "Merging Vertices",
    "Subdivision and Smooth Shading",
    "Proportional Editing Techniques"
  ];
  
  const items5 = [
    "The Subdivision Surface Modifier",
    "The Boolean Modifier",
    "Using the Mirror Modifier"
  ];
  
  const items6 = [
    "Setting Up Orthographic Views",
    "Adding Image References",
    "Aligning Models to Reference Images"
  ];
  
  const items7 = [
    "Introduction to Sculpting Tools",
    "Using DynTopo for Dynamic Topology",
    "Smoothing and Detailing Sculptures"
  ];

  return (
    <div>
        <div className="">
      <Sidebar title={title1} items={items1} />
      <Sidebar title={title2} items={items2} />
      <Sidebar title={title3} items={items3} />
      <Sidebar title={title4} items={items4} />
      <Sidebar title={title5} items={items5} />
      <Sidebar title={title6} items={items6} />
      <Sidebar title={title7} items={items7} />

      </div>
    </div>
  );
};

export default SidebarPage;
