<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'VueJS Work Assignment',
    description: 'A frontend developer assignment focused on building a Joke Collection.',
    tags: ['VueJS', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/OdysseasKarastergiou/joke-collection-assignment',
    demo: 'https://odysseaskarastergiou.github.io/joke-collection-assignment/',
  },
  {
    title: 'ReactJS Work Assignment',
    description: 'A frontend developer assignment focused on building a Staff Management System.',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Redux'],
    github: 'https://github.com/OdysseasKarastergiou/kinessos-assignment',
    demo: null
  },
  {
    title: 'Video Editor Portfolio',
    description: 'Website done in VueJS+Vite with TailwindCSS, FontAwesome, and SwiperJS.',
    tags: ['Vue.js', 'Vite', 'TailwindCSS'],
    github: null,
    demo: 'https://odysseaskarastergiou.github.io/kalworkportfolio/'
  },
  {
    title: 'Weather App',
    description: 'A weather app built using C# for the backend and SQL for storing search history.',
    tags: ['C#', 'SQL', 'API Integration'],
    github: 'https://github.com/OdysseasKarastergiou/WeatherApp/',
    demo: null
  },
  {
    title: 'TravelBuddy',
    description: 'Website done in ReactJS+Vite with Bootstrap and ReactRouter.',
    tags: ['React', 'Vite', 'Bootstrap'],
    github: null,
    demo: 'https://odysseaskarastergiou.github.io/travel-buddy/'
  },
  {
    title: 'MyAbilityLab',
    description: 'Website done in WordPress.',
    tags: ['WordPress'],
    github: null,
    demo: 'https://www.myabilitylab.com'
  },
  {
    title: 'Mini Lottery Demo',
    description: 'Project completed in preparation for a VueJS role to simulate lotteries with Firebase integration.',
    tags: ['Vue.js', 'Firebase'],
    github: 'https://github.com/OdysseasKarastergiou/LotteryVueJS',
    demo: null
  },
  {
    title: 'Card Flip',
    description: 'Project focused on learning animations by creating 3D model cards with smooth flip interactions.',
    tags: ['Vue.js', 'CSS Animations'],
    github: 'https://github.com/OdysseasKarastergiou/CardFlip',
    demo: null
  },
  {
    title: 'Da Game',
    description: 'A game developed in Unity with C# for a school project.',
    tags: ['Unity', 'C#'],
    github: 'https://github.com/OdysseasKarastergiou/DaGame',
    demo: null
  },
  {
    title: 'PROJECT ATHENA',
    description: 'Group Project: university-like database of students and teachers built with Java.',
    tags: ['Java', 'Database'],
    github: 'https://github.com/theobalasis/athena',
    demo: null
  }
])
</script>

<template>
  <div class="projects-page">
    <h1 class="projects-title">Independent Projects</h1>
    <div class="projects-container">
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                <font-awesome-icon :icon="['fab', 'github']" /> GitHub
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
                <font-awesome-icon :icon="['fas', 'link']" /> Live Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  padding: 2rem;
}

.projects-title {
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: #050C17;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}

.project-description {
  color: #7780A1;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #994FF5;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.project-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: #994FF5;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-link:hover {
  background: #B074F7;
}

.project-link i {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>