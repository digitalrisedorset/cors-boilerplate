export class ErrorWrapper {
    extractError = (error: unknown) => {
        if (error instanceof Error) {
            return error.message
        } else {
            const exception = new Error('Unknonw error')
            return exception.message
        }
    }
}