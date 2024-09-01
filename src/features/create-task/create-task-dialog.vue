<script setup lang="ts">
import CreateTaskForm from '@/features/create-task/components/create-task-form.vue';

const emit = defineEmits<{
  success: [];
}>();

const visible = defineModel();
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Create new task"
    :style="{ width: '25rem' }"
    :draggable="false"
  >
    <CreateTaskForm @success="emit('success')" />
  </Dialog>
</template>
