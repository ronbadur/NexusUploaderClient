import {AbstractControl, ValidatorFn} from '@angular/forms';
export class UploadValidator {

  public validateFileExtension(fileExtension: string): boolean {
    const validExtension = 'zip';
    return fileExtension === validExtension;
  }

  public forbiddenNameValidator(check): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    console.log(check);
    const forbidden = check.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
}
