<template>
  <div class="two-column-component">
    <div class="column">
      <div class="image-container">
        <img :src="imageSrc" alt="Image" />
      </div>
      <h3>{{ title }}</h3>
    </div>
    <div class="column">
      <p>{{ description }}</p>
      <a :href="linkUrl">{{ linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    description: String,
    linkUrl: String,
    linkText: String,
  },
};
</script>

<style scoped>
.two-column-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column {
  flex: 1;
  padding: 10px;
}

.image-container {
  width: 200px; /* You can adjust the width as needed */
  height: auto; /* Set height to 'auto' to maintain aspect ratio */
}

img {
  max-width: 100%;
  max-height: 100%; /* Ensure the image fits within the container */
}

a {
  color: blue;
  text-decoration: underline;
}
</style>
