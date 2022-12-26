class ApplicationError extends Error {
  constructor (message, code, innerException) {
    super(message)
    this.code = code
    this.innerException = innerException
    this.loggable = true
    this.sendable = true
  }

  isLoggable () {
    return this.loggable || true
  }

  isSendable () {
    return this.sendable
  }

  send (send) {
    this.sendable = send
  }

  getHttpStatusCode () {
    return this.statusCode || DEFAULT_HTTP_STATUS_CODE
  }

  getModelOut () {
    const { code, message } = this
    return {
      code,
      message
    }
  }
}

export default ApplicationError
