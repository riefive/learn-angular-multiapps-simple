// based on - https://itnext.io/building-a-reusable-validation-component-for-angular-forms-2f2e9bd13867
import { ValidationErrors } from '@angular/forms';

const  messages = new Map<string, { message: string, validatorErrorsKey?: string[] }>([
    ['required',  { message : 'This field is required'} ],
    ['minlength', { message : 'Password must be at least {0} characters long'   , validatorErrorsKey: ['requiredLength']} ],
    ['maxlength', { message : 'Password cannot be more than {0} characters long', validatorErrorsKey: ['requiredLength']} ],
    ['email',     { message : 'Email must be a valid email address'} ],
]);

function StringFormat(template: string|undefined, ...args: any[]) {
    if (template) {
        return template.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined'
            ? args[index]
            : match;
        });
    }
    return undefined;
}

export const GetValidatorErrorMessage = (validatorName: string, validatorErrors?: ValidationErrors): string|undefined => {
    let args = messages.get(validatorName)?.validatorErrorsKey?.map(name => validatorErrors?.[name]);
    return (args) ? StringFormat(messages.get(validatorName)?.message,...args) : messages.get(validatorName)?.message;
}
