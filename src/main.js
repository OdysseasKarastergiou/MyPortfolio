import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Inter font
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faLink, faStar, faEnvelope, faMobileAlt, faFile, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin)
library.add(faLink, faStar, faEnvelope, faMobileAlt, faUser, faFile)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
