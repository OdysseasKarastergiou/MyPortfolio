<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Projects from './components/Projects.vue'
import ContactMe from './components/ContactMe.vue'
import AboutMe from './components/AboutMe.vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const activeSection = ref('home')

const handleScroll = () => {
  const sections = ['home', 'about', 'projects', 'contact']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/src/assets/OdysseasKarastergiouCV.pdf'
  link.download = 'OdysseasKarastergiouCV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Add scroll event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">Odysseas</div>
        <div class="nav-links">
          <a 
            href="#home" 
            @click.prevent="scrollToSection('home')"
            :class="{ active: activeSection === 'home' }"
          >Home</a>
          <a 
            href="#about" 
            @click.prevent="scrollToSection('about')"
            :class="{ active: activeSection === 'about' }"
          >About</a>
          <a 
            href="#projects" 
            @click.prevent="scrollToSection('projects')"
            :class="{ active: activeSection === 'projects' }"
          >Projects</a>
          <a 
            href="#contact" 
            @click.prevent="scrollToSection('contact')"
            :class="{ active: activeSection === 'contact' }"
          >Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <Transition name="fade" mode="out-in">
        <section id="home" class="hero">
          <div class="hero-content">
            <div class="hero-content-container">
              <img src="./assets/myface.png" />
              <p class="hero-content-title">Hi! I'm Odysseas Karastergiou</p>
              <p class="hero-content-description">Computer Engineer with a strong proficiency in Frontend Web Development</p>
            </div>
            <div class="hero-buttons">
              <button class="contact-me-button" @click="scrollToSection('contact')">
                <font-awesome-icon :icon="['fas', 'user']" class="button-icon" />
                Contact Me
              </button>
              <button class="download-cv-button" @click="downloadCV">
                <font-awesome-icon :icon="['fas', 'file']" class="button-icon" />
                Download CV
              </button>
            </div>
          </div>
        </section>
      </Transition>

      <Transition name="fade" mode="out-in">
        <section id="about" class="about">
          <a class="about-me-title"><font-awesome-icon :icon="['fas', 'star']" /> ABOUT ME</a>
          <AboutMe />
        </section>
      </Transition>

      <Transition name="fade" mode="out-in">
        <section id="projects" class="projects">
          <a class="my-projects-title"><font-awesome-icon :icon="['fas', 'star']" /> MY PROJECTS</a>
          <Projects />
        </section>
      </Transition>

      <Transition name="fade" mode="out-in">
        <section id="contact" class="contact">
          <a class="contact-me-title"><font-awesome-icon :icon="['fas', 'star']" /> GET IN TOUCH</a>
          <ContactMe />
        </section>
      </Transition>
    </main>
  </div>
</template>

<style>
:root {
  --primary-color: #2563eb;
  --text-color: #1f2937;
  --background-color: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #050C17;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  --text-color: white;
  font-weight: 700;
  font-size: 1.1em;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #994FF5;
}

/* Navigation active state */
.nav-links a.active {
  color: #994FF5;
  position: relative;
}

main {
  padding-top: 80px;
}

section {
  min-height: 100vh;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.about-me-title {
  color: white;
  border: 8px solid #994FF5;
  background: #994FF5;
  border-radius: 20px;
  display: inline-block;
  padding: 0em 1em;
  margin: 2em auto;
  font-weight: 600;
  text-align: center;
}

.my-projects-title {
  color: white;
  border: 8px solid #994FF5;
  background: #994FF5;
  border-radius: 20px;
  display: inline-block;
  padding: 0em 1em;
  margin: 2em auto;
  font-weight: 600;
  text-align: center;
}

.contact-me-title {
  color: white;
  border: 8px solid #994FF5;
  background: #994FF5;
  border-radius: 20px;
  display: inline-block;
  padding: 0em 1em;
  margin: 2em auto;
  font-weight: 600;
  text-align: center;
}

.about-content {
  margin-top: 2em;
  display:flex;
  align-items: start;
  color: gray;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
}

.hero-content-container {
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:1em;

}
.hero-content-title {
  color: rgb(255 196 31);
  background: #FFEFBF;
  width: 35%;
  font-size: 1.2em;
  font-weight: 700;
}

.hero-content-description {
  font-size: 2em;
  font-weight: 800;
}

.hero-content h1 {
  display: flex;
  font-size: 1em;
  margin-bottom: 1rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button-icon {
  font-size: 1rem;
}

/* Vue Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
}

.contact-me-button {
  border: 1px solid transparent;
  margin-top: 2em;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #994FF5;
  cursor: pointer;
  transition: background-color 0.5s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.contact-me-button:hover {
  background-color: #B074F7;
}

.download-cv-button {
  border: 1px solid #7780A1;
  margin-left: 2em;
  margin-top: 2em;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: background-color 0.75s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.download-cv-button:hover {
  background-color: #050C17;
  color: white;
}
</style>
