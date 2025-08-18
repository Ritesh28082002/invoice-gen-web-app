// 🔸 Templates
import template1 from './template1.png';
import template2 from './template2.png';
import template3 from './template3.png';
import template4 from './template4.png';
import template5 from './template5.png';

// 🔸 Other assets
import upload_area from './upload_area.png';
import logo from './logo.png';

// 🔸 Feature section images (Landing only)
import landing1 from './landing1.png';
import landing2 from './landing2.png';
import landing3 from './landing3.png';

import landing4 from "./landing4.png"; // test update


// 🔸 Hero Section - Slider Images only
import imagee1 from './imagee1.jpg';
import imagee2 from './imagee2.jpg';
import imagee3 from './imagee3.jpg';
import imagee4 from './imagee4.jpg';

// Export normal assets
export const assets = {
  template1,
  template2,
  template3,
  template4,
  template5,
  upload_area,
  logo,
  landing1,
  landing2,
  landing3,
  landing4,
};

// Rename export to match your JSX
export const sliderImages = {
  imagee1,
  imagee2,
  imagee3,
  imagee4,
};

// Export template array
export const templates = [
  { id: "template1", label: "Template 1", image: template1 },
  { id: "template2", label: "Template 2", image: template2 },
  { id: "template3", label: "Template 3", image: template3 },
  { id: "template4", label: "Template 4", image: template4 },
  { id: "template5", label: "Template 5", image: template5 },
];
