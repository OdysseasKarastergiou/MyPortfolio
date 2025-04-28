<template>
  <div class="contact-page">
    <h1 class="contact-title">Contact Me</h1>
    <div class="contact-container">
      <div class="contact-card">
        <div class="contact-item">
          <font-awesome-icon :icon="['fas', 'mobile-alt']" class="contact-icon" />
          <div class="contact-info">
            <span class="contact-label">Mobile</span>
            <a href="tel:+306951481023" class="contact-value">+30 6951481023</a>
          </div>
        </div>

        <div class="contact-item">
          <font-awesome-icon :icon="['fas', 'envelope']" class="contact-icon" />
          <div class="contact-info">
            <span class="contact-label">Email</span>
            <a href="mailto:odysseas.karastergiou@gmail.com" class="contact-value">odysseas.karastergiou@gmail.com</a>
          </div>
        </div>

        <div class="contact-item">
          <font-awesome-icon :icon="['fab', 'github']" class="contact-icon" />
          <div class="contact-info">
            <span class="contact-label">GitHub</span>
            <a href="https://github.com/OdysseasKarastergiou" target="_blank" class="contact-value">OdysseasKarastergiou</a>
          </div>
        </div>

        <div class="contact-item">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="contact-icon" />
          <div class="contact-info">
            <span class="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/odysseas-karastergiou" target="_blank" class="contact-value">Odysseas Karastergiou</a>
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
.contact-page {
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-title {
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
}

.contact-container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.contact-card {
  background: #050C17;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.contact-item:hover {
  background-color: rgba(153, 79, 245, 0.1);
}

.contact-icon {
  font-size: 1.5rem;
  color: #994FF5;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(153, 79, 245, 0.1);
  border-radius: 50%;
  padding: 0.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  color: #7780A1;
  display: flex;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  color: white;
  text-decoration: none;
  font-size: 1.125rem;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #994FF5;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }

  .contact-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .contact-item {
    gap: 1rem;
  }

  .contact-value {
    font-size: 1rem;
    word-break: break-all;
  }
}
</style>