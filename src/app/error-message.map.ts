export const ERROR_MESSAGE_MAP: Map<string, (field: string) => string> = new Map([
    ["required", (field: string) => `${field} field is required`],
    ["email", (field: string) => `${field} should be a valid email address`]
]);
