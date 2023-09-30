<template>
  <div class="details-card">
    <div class="first-column">
      <img :src="imageSrc" alt="Image" />
    </div>
    <div class="column">
      <!-- Use a slot to render the content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
  },
};
</script>

<style scoped>
.details-card {
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
</style>
