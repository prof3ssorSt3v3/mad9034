<template>
  <div class="two-column-component">
    <div class="first-column">
      <img :src="imageSrc" alt="Image" />
    </div>
    <div class="column">
      <h4>{{ title }}</h4>
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
  align-items: center; /* Vertically center the content */
  border-top: 1px solid #eaecef;
}

.column,
.first-column {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.first-column {
  max-width: 200px; /* You can adjust the width as needed */
}

img {
  max-width: 100%;
  max-height: 100%; /* Ensure the image fits within the container */
}

a {
  color: #3eaf7c;
  text-decoration: underline;
}
h4 {
  margin: 0;
}
</style>
