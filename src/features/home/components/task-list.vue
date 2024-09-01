<script setup lang="ts">
import { TaskService } from '@/features/home/services/task.service';
import { inject } from 'vue';
import useTasks from '@/features/home/hooks/use-tasks.hook';
import EmptyState from '@/shared/components/empty-state.vue';
import ErrorState from '@/shared/components/error-state.vue';
import DeleteTaskButton from '@/features/delete-task/delete-task-button.vue';

const taskService = inject(TaskService.name);
const { isPending, isError, data: tasks } = useTasks(taskService);
</script>

<template>
  <ErrorState v-if="isError" />
  <DataView v-else :value="tasks?.data">
    <template #list>
      <Accordion>
        <AccordionPanel v-for="task in tasks.data" :key="task.id" :value="task.id">
          <AccordionHeader>{{ task.title }}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ task.description }}
            </p>
            <div class="w-full">
              <div class="flex justify-end gap-2">
                <Button icon="ph ph-pencil" icon-pos="right" label="Edit" severity="info" />
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
