# Obyss Agency — Interactive Web Experience

A single-page, highly animated portfolio-style site inspired by Obys Agency. It showcases custom cursor interactions, smooth scrolling, video hover play/pause UI, magnetic navigation, image effects, and mobile-friendly behaviors.
link:https://its-2006-batman.github.io/Obys-Agency/

## Overview
- Smooth scrolling via Locomotive Scroll with GSAP ScrollTrigger integration
- Timelines and entrance animations powered by GSAP
- Shery.js image distortion effects for project thumbnails
- Custom cursor that adapts to context (video / hover states)
- Mobile menu toggle, tap-to-cycle project images, and awards accordion
- Footer text animation using Textillate + Lettering.js

## Tech / Libraries
Loaded from CDNs in [index.html](index.html):
- Locomotive Scroll
- GSAP + ScrollTrigger
- Three.js (dependency for Shery.js effects)
- ControlKit (Shery.js dependency)
- Shery.js
- jQuery, Lettering.js, Textillate

Local assets live under [assets/](assets/):
- [assets/images](assets/images)
- [assets/video](assets/video)
- [assets/fonts](assets/fonts)

## Project Structure
```
index.html
script.js
style.css
assets/
  fonts/
  images/
  video/
```

## Getting Started (Windows + VS Code)
- Quick view: open [index.html](index.html) directly in your browser.
- Recommended (auto reload): use VS Code Live Server.
  1) Install the “Live Server” extension in VS Code.
  2) Open this folder, right-click [index.html](index.html) → “Open with Live Server”.
  3) Browser opens at http://localhost:5500 or similar.

Alternative local servers:

```powershell
# Python 3
python -m http.server 5500
# then open http://localhost:5500
```

```powershell
# Node.js (if installed)
npx serve .
# then open the printed localhost URL
```

## Development Notes
- Animations: Core logic is in [script.js](script.js) and styles in [style.css](style.css).
- Smooth scrolling: `locomotiveanimation()` wires Locomotive Scroll + ScrollTrigger for `#main`.
- Loader: `loadingAnimation()` shows staged text and a fake progress counter.
- Video UI: `videoplay()` toggles play/pause with click/dblclick (desktop) and click (touch).
- Mobile features: `mobileMenu()`, `mobileProjectImages()`, `mobileAwardsAccordion()` add touch-friendly toggles.
- Image effects: `sheryanimation()` applies distortion via Shery.js to `.img-div` containers.

## Assets
- Keep all images/videos in [assets/images](assets/images) and [assets/video](assets/video) to match existing paths.
- Custom fonts referenced in [style.css](style.css) from [assets/fonts](assets/fonts). Ensure `.woff` files exist and paths are correct.

## Tips
- Heavy animations: test on multiple devices; reduce effect intensity in `sheryanimation()` or GSAP durations if needed.
- CDNs: the site depends on external CDNs; ensure internet connectivity for full effects.
- Touch detection: many mobile interactions use `matchMedia('(pointer:coarse)')` for feature toggling.

## Credits
This frontend demo is for learning and showcasing animation techniques. Brand names, imagery, and inspiration are for educational purposes only. Replace assets with your own for production use.
