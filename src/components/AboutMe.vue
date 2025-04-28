<template>
  <div class="about-page">
    <div class="about-container">
      <div class="about-card">
        <div class="about-content">
          <p class="about-text">
            I'm a passionate frontend developer with experience in building modern web applications.
            I began my career as an intern and later continued on a contract basis until the end of December,
            working as a frontend developer on loan to OPAP S.A.—a leading Greek company in games of chance and more,
            headquartered in Athens.
          </p>
          <p class="about-text">
            During my time at OPAP, I worked extensively with Vue.js to improve existing websites,
            develop new applications, and contribute to large-scale projects. Notably, I was involved
            in the expansion of the main site, which integrated three additional games. I collaborated
            with a large team in two-week sprints, managing tasks in Jira, and gained experience in
            creating unit tests using Bamboo and Azure.
          </p>
          <p class="about-text">
            In my last two years at OPAP, I was entrusted with developing new pages and handling
            solo projects from start to finish.
          </p>
        </div>
        <div class="skills-section">
          <h2 class="skills-title">Skills & Technologies</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3 class="category-title">Frontend</h3>
              <div class="skills-list">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">TailwindCSS</span>
              </div>
            </div>
            <div class="skill-category">
              <h3 class="category-title">Backend</h3>
              <div class="skills-list">
                <span class="skill-tag">C#</span>
                <span class="skill-tag">Java</span>
                <span class="skill-tag">SQL</span>
                <span class="skill-tag">Firebase</span>
              </div>
            </div>
            <div class="skill-category">
              <h3 class="category-title">Tools & Others</h3>
              <div class="skills-list">
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Jira</span>
                <span class="skill-tag">Azure</span>
                <span class="skill-tag">Bamboo</span>
                <span class="skill-tag">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.about-page {
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.about-card {
  background: #050C17;
  border-radius: 12px;
  padding: 2rem;
}

.about-content {
  margin-bottom: 3rem;
  display:flex;
  flex-direction: column;
}

.about-text {
  color: #7780A1;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.skills-section {
  margin-top: 2rem;
}

.skills-title {
  color: white;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: rgba(153, 79, 245, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
}

.category-title {
  color: #994FF5;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skill-tag {
  background: #994FF5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  transition: transform 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-page {
    padding: 1rem;
  }

  .about-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .about-card {
    padding: 1.5rem;
  }

  .about-text {
    font-size: 1rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>