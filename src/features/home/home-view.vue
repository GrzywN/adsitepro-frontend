<script setup lang="ts">
import AppLayout from '@/shared/components/app-layout.vue';
import TaskList from '@/features/home/components/task-list.vue';
import { TaskService } from '@/features/home/services/task.service';
import { provide } from 'vue';

const taskService = new TaskService();

provide(TaskService.name, taskService);
</script>

<template>
  <AppLayout title="Tasks" icon-class="ph ph-check-fat">
    <TaskList />
  </AppLayout>
</template>
