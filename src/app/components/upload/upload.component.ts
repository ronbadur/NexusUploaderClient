import {Component} from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  fileToUpload: File;
  inputText: string;
  isFileChosen = false;

  constructor() {
    this.inputText = 'Drag your file here or click in this area.';
  }

  onChange(files: FileList) {
    this.fileToUpload = files[0];
    this.inputText = this.fileToUpload.name;
    this.isFileChosen = true;
  }

  onSubmit() {
    console.log('Submit');
  }
}
