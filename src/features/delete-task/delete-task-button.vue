<script setup lang="ts">
import { useConfirmDialog } from '@/shared/hooks/use-confirm-dialog.hook';
import { useDeleteTask } from '@/features/delete-task/hooks/use-delete-task';
import { TaskService } from '@/features/home/services/task.service';
import { provide } from 'vue';

const taskService = new TaskService();

provide(TaskService.name, taskService);

export type DeleteTaskButtonProps = {
  id: number;
};

const { id } = defineProps<DeleteTaskButtonProps>();
const emit = defineEmits<{
  success: () => void;
}>();

const { require } = useConfirmDialog();
const { mutateAsync } = useDeleteTask(taskService);

const handleDelete = () => {
  require({
    title: 'Delete Task',
    message: 'Are you sure you want to delete this task?',
    accept: async () => {
      await mutateAsync(id, {
        onSuccess: () => {
          emit('success');
        },
      });
    },
  });
};
</script>

<template>
  <Button
    icon="ph ph-trash"
    icon-pos="right"
    label="Delete"
    severity="danger"
    @click="handleDelete"
  />
</template>
