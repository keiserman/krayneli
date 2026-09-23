// Feather icons, adapted from the original site. Each has a static base
// (light purple stroke) and an animated overlay that "draws" itself on
// hover. Every path uses pathLength="100" so a single shared CSS animation
// (defined once in global.css) works identically across every icon,
// regardless of each path's actual geometry.
export const icons = {
  film: {
    animated: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather animated-icon"><path pathLength="100" class="draw-path" d="M 4,2 L 20,2 A 2,2,0,0,1,22,4 L 22,20 A 2,2,0,0,1,20,22 L 4,22 A 2,2,0,0,1,2,20 L 2,4 A 2,2,0,0,1,4,2"></path><path pathLength="100" class="draw-path" d="M7,2L7,22"></path><path pathLength="100" class="draw-path" d="M17,2L17,22"></path><path pathLength="100" class="draw-path" d="M2,12L22,12"></path><path pathLength="100" class="draw-path" d="M2,7L7,7"></path><path pathLength="100" class="draw-path" d="M2,17L7,17"></path><path pathLength="100" class="draw-path" d="M17,17L22,17"></path><path pathLength="100" class="draw-path" d="M17,7L22,7"></path></svg>`,
    static: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ab94ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`,
  },
  bookOpen: {
    animated: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather animated-icon"><path pathLength="100" class="draw-path" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path pathLength="100" class="draw-path" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    static: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ab94ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  },
  messageSquare: {
    animated: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather animated-icon"><path pathLength="100" class="draw-path" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    static: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ab94ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  },
  mic: {
    animated: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather animated-icon"><path pathLength="100" class="draw-path" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path pathLength="100" class="draw-path" d="M19 10v2a7 7 0 0 1-14 0v-2"></path><path pathLength="100" class="draw-path" d="M12,19L12,23"></path><path pathLength="100" class="draw-path" d="M8,23L16,23"></path></svg>`,
    static: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ab94ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
  },
  phoneCall: {
    animated: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather animated-icon"><path pathLength="100" class="draw-path" d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    static: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ab94ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  },
} as const;

export type IconName = keyof typeof icons;
