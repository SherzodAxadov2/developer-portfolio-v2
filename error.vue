<template>
  <div id="error-page">
    <div id="error-content">
      <p id="error-code">{{ error?.statusCode || 404 }}</p>
      <p id="error-message">{{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}</p>
      <button id="error-btn" @click="goHome">Go back home</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ error: Object });

const goHome = () => {
  clearError({ redirect: '/' });
};
</script>

<style scoped>
#error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #010C15;
  font-family: 'Fira Code', monospace;
}

#error-content {
  text-align: center;
}

#error-code {
  font-size: 6rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 1rem;
}

#error-message {
  font-size: 1.1rem;
  color: #607b96;
  margin-bottom: 2rem;
}

#error-btn {
  padding: 0.6rem 1.6rem;
  border: 1px solid #1e2d3d;
  background: transparent;
  color: #607b96;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

#error-btn:hover {
  color: #ffffff;
  border-color: #607b96;
}
</style>
