<script setup lang="ts"></script>

<template>
  <div id="sub-options-container">
    <i class="ri-align-left"></i>
    <i class="ri-align-center"></i>
    <i class="ri-align-right"></i>
    <i class="ri-align-justify"></i>
  </div>
</template>

<style scoped>
#sub-options-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #472ca8;
}

#sub-options-container i {
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
}
</style>
