<template>
  <div class="list-item">
    <div class="column">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
      <a :href="linkUrl">{{ linkText }}</a>
    </div>
    <div class="first-column">
      <img :src="imageSrc" alt="Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    items: Array, // Array of items for the list
    linkUrl: String,
    linkText: String,
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaecef;
}

.column,
.first-column {
  flex: 1;
  padding: 10px;
  align-items: center;
}

.first-column {
  max-width: 300px !important;
}

img {
  max-width: 100%;
  max-height: 100%; /* Ensure the image fits within the container */
}

a {
  color: #3eaf7c;
  text-decoration: underline;
}
</style>
