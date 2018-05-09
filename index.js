/*
    js-error.js -- Error exception classes
 */

function init(self, message, errors, code) {
    self.name = self.constructor.name
    self.message = message
    self.errors = errors
    self.code = code
    if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(self, self.constructor)
    } else {
        self.stack = (new Error(message)).stack
    }
}

export class AuthError extends Error {
    constructor(message, errors, code) {
        super(message)
        init(this, message, errors, code)
    }
}

export class CodeError extends Error {
    constructor(message, errors, code) {
        super(message)
        init(this, message, errors, code)
    }
}

export class OpsError extends Error {
    constructor(message, errors, code) {
        super(message)
        init(this, message, errors, code)
    }
}

export class UserError extends Error {
    constructor(message, errors, code) {
        super(message)
        init(this, message, errors, code)
    }
}

export class DataError extends Error {
    constructor(message, errors, code) {
        super(message)
        init(this, message, code)
    }
}

export class ValidationError extends Error {
    constructor(message, errors, code) {
        super(message)
        init(this, message, errors, code)
    }
}

export class ServiceError extends Error {
    constructor(message, errors, code) {
        super(message)
        init(this, message, errors, code)
    }
}
