import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactPixel from "react-facebook-pixel"

const pixelId = "1761795247943993"

// Bu “advancedMatching” ve “options” parametreleri isteğe bağlıdır

ReactPixel.init(pixelId);
ReactPixel.pageView(); // İlk sayfa görüntüleme çağrısı

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
