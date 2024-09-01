<script setup lang="ts">
import { useConfirmDialog } from '@/shared/hooks/use-confirm-dialog.hook';
import { useCompleteTask } from '@/features/complete-task/hooks/use-complete-task';
import { TaskService } from '@/features/home/services/task.service';
import { provide } from 'vue';

const taskService = new TaskService();

provide(TaskService.name, taskService);

export type CompleteTaskButtonProps = {
  id: number;
};

const { id } = defineProps<CompleteTaskButtonProps>();
const emit = defineEmits<{
  success: [];
}>();

const { require } = useConfirmDialog();
const { mutateAsync } = useCompleteTask(taskService);

const handleComplete = () => {
  require({
    header: 'Complete Task',
    message: 'Are you sure you want to complete this task?',
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
    icon="ph ph-check"
    icon-pos="right"
    label="Complete"
    severity="success"
    @click="handleComplete"
  />
</template>
