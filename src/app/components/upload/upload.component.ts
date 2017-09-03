import {Component} from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  fileToUpload: File;
  inputText: string;

  constructor() {
    this.inputText = 'Drag your file here or click in this area.';
  }

  onChange(files: FileList) {
    this.fileToUpload = files[0];
    this.inputText = this.fileToUpload.name;
  }

  onSubmit() {
    console.log('Submit');
  }
}
