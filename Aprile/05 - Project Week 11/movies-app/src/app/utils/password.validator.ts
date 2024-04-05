import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms"


export function passwordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(control.value);
        return isValid ? null : { pattern: true };
    };
}

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConf = control.get('passwordConf');
    return password && passwordConf && password.value === passwordConf.value ? null : { passwordMatch: true };
};
