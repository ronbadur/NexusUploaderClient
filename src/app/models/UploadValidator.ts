export class UploadValidator {

  public validateFileExtension(fileExtension: string): boolean {
    const validExtension = 'zip';
    return fileExtension === validExtension;
  }
}
