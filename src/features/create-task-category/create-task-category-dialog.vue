<script setup lang="ts">
import CreateTaskCategoryForm from '@/features/create-task-category/components/create-task-category-form.vue';

const emit = defineEmits<{
  success: () => void;
}>();

const visible = defineModel();
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Create new task category"
    :style="{ width: '25rem' }"
    :draggable="false"
  >
    <CreateTaskCategoryForm @success="emit('success')" />
  </Dialog>
</template>
