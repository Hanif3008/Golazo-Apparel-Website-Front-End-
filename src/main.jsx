import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/main-navbar.css'
import './css/main-heropage.css'
import './css/main-newarrival.css'
import './css/main-trending.css'
import './css/main-bestsellers.css'
import './css/main-iconickits.css'
import './css/main-teams.css'
import './css/main-newsletter.css'
import './css/main-review.css'
import './css/main-footer.css'
import MainNavbar from './components/MainNavbar.jsx'
import MainHeroPage from './components/MainHeroPage.jsx'
import MainNewArrival from './components/MainNewArrival.jsx'
import MainTrending from './components/MainTrending.jsx'
import MainBestsellers from './components/MainBestsellers.jsx'
import MainIconicKits from './components/MainIconicKits.jsx'
import MainTeams from './components/MainTeams.jsx'
import MainNewsletter from './components/MainNewsletter.jsx'
import MainReview from './components/MainReview.jsx'
import MainFooter from './components/MainFooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainNavbar />
    <MainHeroPage />
    <MainNewArrival/>
    <MainTrending/>
    <MainBestsellers/>
    <MainIconicKits/>
    <MainTeams/>
    <MainNewsletter/>
    <MainReview/>
    <MainFooter/>
  </StrictMode>,
)

