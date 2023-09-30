<template>
  <div class="collapsible-section">
    <button @click="toggleCollapse" class="collapse-button">
      {{ collapsed ? "Expand" : "Collapse" }}
      <span v-if="collapsed" class="dropdown-arrow">&#9662;</span>
      <span v-else class="dropdown-arrow">&#9652;</span>
    </button>
    <div :class="['content', { 'collapsed-content': collapsed }]">
      {{ text }}
      <!-- Display the text prop here -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String, // Define a 'text' prop of type String
  },
  data() {
    return {
      collapsed: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
/* Add your CSS styling here for the collapsible section */

.collapsible-section {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.collapse-button {
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px 5px 0 0;
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-arrow {
  font-size: 18px;
}

.content {
  padding: 10px;
  display: block;
  transition: max-height 0.3s ease-out;
}

.collapsed-content {
  max-height: 0;
  overflow: hidden;
}
</style>
