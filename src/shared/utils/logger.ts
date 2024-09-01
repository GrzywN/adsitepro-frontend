export const logger = import.meta.env.DEV
  ? console
  : {
      log: () => {},
      warn: () => {},
      error: () => {},
      // Add more methods as needed
    };
