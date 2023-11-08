export const validateString = (value: unknown) => {
  if (!value || typeof value !== 'string') {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown) => {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = error.message;
  } else {
    message = 'Something went wrong';
  }

  return message;
};
