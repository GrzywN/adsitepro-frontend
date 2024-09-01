<script setup lang="ts"></script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Create new task"
    :style="{ width: '25rem' }"
    :draggable="false"
  >
  </Dialog>
</template>
