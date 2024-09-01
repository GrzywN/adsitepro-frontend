<script setup lang="ts">
import { useField } from 'vee-validate';
import { inject } from 'vue';
import ErrorState from '@/shared/components/error-state.vue';
import { UserService } from '@/shared/services/user.service';
import { useUserAutocomplete } from '@/shared/hooks/use-user-autocomplete.hook';

const fieldName = inject('fieldName');
const userService = inject(UserService.name);

const { value: selectedUser } = useField(fieldName);
const { data: availableUsers, isPending, isError } = useUserAutocomplete(userService, selectedUser);
</script>

<template>
  <ErrorState v-if="isError" />
  <Select
    v-else
    v-model="selectedUser"
    :options="availableUsers?.data"
    option-label="name"
    option-value="id"
    :loading="isPending"
    @complete="complete"
  />
</template>
