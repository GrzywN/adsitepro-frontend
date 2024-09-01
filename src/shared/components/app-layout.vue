<script setup lang="ts">
import { defineProps, ref } from 'vue';
import CreateTaskDialog from '@/features/create-task/create-task-dialog.vue';
import CreateTaskCategoryDialog from '@/features/create-task-category/create-task-category-dialog.vue';

defineProps({
  iconClass: String,
  title: String,
});

const isCreateTaskDialogVisible = ref(false);
const isCreateTaskCategoryDialogVisible = ref(false);

const handleCreateTask = () => {
  isCreateTaskDialogVisible.value = true;
};

const handleCloseCreateTaskDialog = () => {
  isCreateTaskDialogVisible.value = false;
};

const handleCreateTaskCategory = () => {
  isCreateTaskCategoryDialogVisible.value = true;
};

const handleCloseCreateTaskCategoryDialog = () => {
  isCreateTaskCategoryDialogVisible.value = false;
};
</script>

<template>
  <main class="flex flex-col gap-4 px-6 py-8">
    <Toolbar>
      <template #start>
        <IconField>
          <InputIcon>
            <i class="ph ph-magnifying-glass" />
          </InputIcon>
          <InputText placeholder="Search" />
        </IconField>
      </template>

      <template #end>
        <Button
          icon="ph ph-plus"
          icon-pos="right"
          label="Create task"
          class="mr-2"
          severity="primary"
          @click="handleCreateTask"
        />
        <Button
          icon="ph ph-plus"
          icon-pos="right"
          label="Create task category"
          class="mr-2"
          severity="secondary"
          @click="handleCreateTaskCategory"
        />
      </template>
    </Toolbar>

    <Card class="p-8">
      <template #header>
        <h2 class="inline-flex items-center gap-2 text-lg font-semibold">
          <i class="text-3xl" :class="iconClass" />{{ title }}
        </h2>
      </template>

      <template #content>
        <slot />
      </template>
    </Card>
  </main>

  <CreateTaskDialog
    v-model:visible="isCreateTaskDialogVisible"
    @success="handleCloseCreateTaskDialog"
  />
  <CreateTaskCategoryDialog
    v-model:visible="isCreateTaskCategoryDialogVisible"
    @success="handleCloseCreateTaskCategoryDialog"
  />

  <Toast />
</template>
