<script setup lang="ts">
import { useField, useFieldError } from 'vee-validate';
import { type Component, type VNode } from 'vue';

defineOptions({
  inheritAttrs: false,
});

type FormFieldProps = {
  name: string;
  label: string;
  component?: Component | VNode | undefined;
  isRequired?: boolean | undefined;
};

const props = withDefaults(defineProps<FormFieldProps>(), {
  isRequired: true,
  component: undefined,
});

const { value } = useField<string>(
  () => props.name,
  (inputValue: unknown) => !!inputValue,
);

const errorMessage = useFieldError(() => props.name);
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" :for="name" class="mb-1 text-xs">
      {{ label }} <span v-if="isRequired" class="text-red-500">*</span>
    </label>

    <InputText
      v-if="!component"
      v-bind="$attrs"
      :id="name"
      v-model="value"
      :data-invalid="!!errorMessage"
    />
    <component
      :is="component"
      v-bind="$attrs"
      :id="name"
      v-model="value"
      :data-invalid="!!errorMessage"
    />

    <small v-if="!$attrs.disabled" class="text-red-500">
      {{ errorMessage }}
    </small>
  </div>
</template>
