import snakecase from 'snakecase-keys';

const baseTemplate = (message: string) => {
  return {
    success: true,
    messages: {
      text: message,
      error: '',
      error_code: '',
    },
  };
};

const create = <T>(message: string, data: T) => {
  const template = baseTemplate(message);
  return { statusCode: 201, data: { ...template, data: snakecase(data) } };
};

const ok = <T>(message: string, data: T) => {
  const template = baseTemplate(message);
  return { statusCode: 200, data: { ...template, data: snakecase(data) } };
};

const destroy = <T>(message: string, data: T) => {
  const template = baseTemplate(message);
  return { statusCode: 202, data: { ...template, data: snakecase(data) } };
};

export const ResponseSuccess = { create, ok, destroy };
