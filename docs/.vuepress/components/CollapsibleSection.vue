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
.collapsible-section {
  --accent-colour: 44, 62, 80;
  border: 1px solid #eaeaea; /* Updated border color */
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(var(--accent-colour), 0.1); /* Updated box shadow */
  overflow: hidden;
  background-color: #3eaf7c;
  color: white;
}

.collapse-button {
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px 5px 0 0;
  padding: 15px; /* Increased padding */
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff; /* Updated background color */
  border-bottom: 1px solid #eaeaea; /* Added border bottom for separation */
}

.dropdown-arrow {
  font-size: 18px;
  color: #777;
  transition: transform 0.2s ease; /* Added smooth transition */
}

.content {
  padding: 15px 20px; /* Updated padding */
  display: block;
  transition: max-height 0.3s ease-out;
  background-color: #ffffff; /* Updated background color */
}

.collapsed-content {
  max-height: 0;
  overflow: hidden;
  display: none;
}

/* Added styles for the collapse/expand icon */
.collapse-button.collapsed .dropdown-arrow {
  transform: rotate(0deg); /* Rotate 0 degrees when collapsed */
}

.collapse-button.expanded .dropdown-arrow {
  transform: rotate(180deg); /* Rotate 180 degrees when expanded */
}
</style>
