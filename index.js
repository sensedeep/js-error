/*
    js-error.js -- Error exception classes
 */

function init(self, message, errors) {
    self.name = self.constructor.name
    self.message = message
    self.errors = errors
    if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(self, self.constructor)
    } else {
        self.stack = (new Error(message)).stack
    }
}

export class AuthError extends Error {
    constructor(message, errors) {
        super(message)
        init(this, message, errors)
    }
}

export class CodeError extends Error {
    constructor(message, errors) {
        super(message)
        init(this, message, errors)
    }
}

export class OpsError extends Error {
    constructor(message, errors) {
        super(message)
        init(this, message, errors)
    }
}

export class UserError extends Error {
    constructor(message, errors) {
        super(message)
        init(this, message, errors)
    }
}

export class DataError extends Error {
    constructor(message) {
        super(message)
        init(this, message)
    }
}

export class ValidationError extends Error {
    constructor(message, errors) {
        super(message)
        init(this, message, errors)
    }
}
