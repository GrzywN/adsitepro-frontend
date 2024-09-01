import type { UserService } from '@/shared/services/user.service';
import { useQuery } from '@tanstack/vue-query';
import type { Ref } from 'vue';

export const USERS_AUTOCOMPLETE_QUERY_KEY = ['users-autocomplete'];

export const useUserAutocomplete = (userService: UserService, query: Ref<string>) =>
  useQuery({
    queryKey: USERS_AUTOCOMPLETE_QUERY_KEY.concat(query.value),
    queryFn: () => userService.getUsersAutocompletion(query.value),
  });
