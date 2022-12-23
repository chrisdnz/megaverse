import ApplicationError from '../errors/ApplicationError';

const errorHandler = (error, req, res, next) => {
  const applicationError = error;
  if (applicationError.stack) {
    console.error('Error stack trace: ', applicationError.stack.replace(/\n/g, ' '));
  }

  if (!applicationError instanceof ApplicationError) {
    applicationError = new ApplicationError(applicationError.message, 'unexpected-error', applicationError);
  }

  if (applicationError.isLoggable()) {
    console.error(applicationError.message);
  }

  if (applicationError.isSendable()) {
    res.status(applicationError.getHttpStatusCode()).send(applicationError.getModelOut());
  }
};

export default errorHandler;
