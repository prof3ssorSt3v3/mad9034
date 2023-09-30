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
  --accent-colour: 44, 62, 80;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 8px 0px rgba(var(--accent-colour), 0.23);
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
  background-color: white;
  border-color: #3eaf7c;
}

.dropdown-arrow {
  font-size: 18px;
}

.content {
  padding: 20px;
  display: block;
  transition: max-height 0.3s ease-out;
  background-color: white;
}

.collapsed-content {
  display: none;
}

.accordion:after {
  content: "\02795"; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}
</style>
