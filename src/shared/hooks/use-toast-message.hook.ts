import { useToast } from 'primevue/usetoast';

const life = 3000 as const;

export const useToastMessage = () => {
  const toast = useToast();

  const add = (severity: string, summary: string, detail: string) => {
    toast.add({
      severity,
      summary,
      detail,
      life,
    });
  };

  const info = (summary: string, detail: string) => {
    add('info', summary, detail);
  };

  const success = (summary: string, detail: string) => {
    add('success', summary, detail);
  };

  const warn = (summary: string, detail: string) => {
    add('warn', summary, detail);
  };

  const error = (summary: string, detail: string) => {
    add('error', summary, detail);
  };

  return {
    info,
    success,
    warn,
    error,
  };
};
