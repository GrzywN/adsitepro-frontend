import { useConfirm } from 'primevue/useconfirm';

export const useConfirmDialog = () => {
  const { require, close } = useConfirm();

  return {
    require,
    close,
  };
};
