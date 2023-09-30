<template>
  <div class="collapsible-section">
    <button @click="toggleCollapse">
      {{ collapsed ? "Expand" : "Collapse" }}
    </button>
    <div v-if="!collapsed">
      <!-- Content of the collapsible section -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
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
</style>
