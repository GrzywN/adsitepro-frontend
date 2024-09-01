<script setup lang="ts">
import { useAuthStore } from '@/shared/stores/use-auth-store';

const auth = useAuthStore();

const handleLogout = () => {
  auth.logout();
};
</script>

<template>
  <Button icon="ph ph-sign-out" icon-pos="right" severity="secondary" @click="handleLogout" />
</template>
