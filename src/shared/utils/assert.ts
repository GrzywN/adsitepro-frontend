export const assert = (isConditionMet: boolean, message: string): void => {
  if (import.meta.env.DEV && !isConditionMet) {
    throw new Error(message);
  }

  if (import.meta.env.PROD && !isConditionMet) {
    // TODO: Send error to Sentry
  }
};
