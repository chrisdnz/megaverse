class ApplicationError extends Error {
  DEFAULT_HTTP_STATUS_CODE = 500
  constructor (message, code, innerException) {
    super(message)
    this.code = code
    this.innerException = innerException
    this.loggable = true
    this.sendable = true
    this.statusCode = this.DEFAULT_HTTP_STATUS_CODE
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
    return this.statusCode || this.DEFAULT_HTTP_STATUS_CODE
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
