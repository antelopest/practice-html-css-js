import './styles/main.scss';

import './scripts/config/config.js';

import { getService } from './scripts/services/services.js';
getService('ExtensionsService');

import './scripts/components/components.js';

//
// document.addEventListener('DOMContentLoaded', () => {
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   const saved = localStorage.getItem('theme');
//   const html = document.documentElement;
//
//   function setTheme(theme) {
//     html.classList.remove('theme-light', 'theme-dark');
//     html.classList.add(`theme-${theme}`);
//     localStorage.setItem('theme', theme);
//   }
//
//   setTheme(saved || (prefersDark ? 'dark' : 'light'));
// });
