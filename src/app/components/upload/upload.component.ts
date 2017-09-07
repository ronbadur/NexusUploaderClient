import {Component, OnInit} from '@angular/core';
import {UploadValidator} from '../../models/UploadValidator';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  fileToUpload: File;
  inputText: string;
  isFileChosen = false;
  uploadValidator: UploadValidator;

  constructor() {
    this.inputText = 'Drag your file here or click in this area.';
  }

  onChange(files: FileList) {
    if (this.uploadValidator.validateFileExtension(files[0].name)) {
      this.fileToUpload = files[0];
      this.inputText = this.fileToUpload.name;
      this.isFileChosen = true;
    } else {
      alert('Invalid File Extension!');
    }
    const inputElement = <HTMLInputElement>document.getElementById('file');
    inputElement.value = '';
  }

  ngOnInit(): void {
    this.uploadValidator = new UploadValidator();
  }

  onSubmit() {
    console.log('Submit');
  }
}
