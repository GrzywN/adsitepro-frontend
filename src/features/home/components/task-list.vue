<script setup lang="ts">
import { TaskService } from '@/features/home/services/task.service';
import { inject } from 'vue';
import useTasks from '@/features/home/hooks/use-tasks.hook';
import EmptyState from '@/shared/components/empty-state.vue';
import ErrorState from '@/shared/components/error-state.vue';
import DeleteTaskButton from '@/features/delete-task/delete-task-button.vue';
import CompleteTaskButton from '@/features/complete-task/complete-task-button.vue';

const taskService = inject(TaskService.name);
const { isPending, isError, data: tasks } = useTasks(taskService);
</script>

<template>
  <ErrorState v-if="isError" />
  <DataView v-else :value="tasks?.data">
    <template #list>
      <Accordion>
        <AccordionPanel v-for="task in tasks.data" :key="task.id" :value="task.id">
          <AccordionHeader
            ><h2 :class="{ 'line-through': task.completed_at }">
              {{ task.title }}
            </h2></AccordionHeader
          >
          <AccordionContent>
            <div class="flex flex-col" :class="{ 'line-through': task.completed_at }">
              <p class="m-0">
                {{ task.description }}
              </p>
              <ul class="mt-4 list-disc pl-4">
                <li><strong>Issued by:</strong> {{ task.owner.name }}</li>
                <li><strong>Assigned user:</strong> {{ task.assigned_user.name }}</li>
                <li><strong>Category:</strong> {{ task.category.name }}</li>
                <li><strong>Estimated minutes:</strong> {{ task.estimated_minutes }}</li>
              </ul>
            </div>
            <div class="w-full">
              <div class="flex justify-end gap-2">
                <CompleteTaskButton :id="task.id" :disabled="task.completed_at" />
                <DeleteTaskButton :id="task.id" />
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </template>
    <template #empty>
      <!-- TODO: replace with proper skeleton loader -->
      <ProgressSpinner v-if="isPending" />
      <EmptyState v-else />
    </template>
  </DataView>
</template>
