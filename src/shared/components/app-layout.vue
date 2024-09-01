<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  iconClass: String,
  title: String,
});
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
          label="Add task"
          class="mr-2"
          severity="primary"
        />
        <Button
          icon="ph ph-plus"
          icon-pos="right"
          label="Add task category"
          class="mr-2"
          severity="secondary"
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
</template>
