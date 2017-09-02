import {Component, OnInit} from '@angular/core';

import {Upload} from '../../models/Upload';
import {UploadsHistoryService} from '../../services/uploads-history.service';

@Component({
  selector: 'app-uploads-history',
  templateUrl: './uploads-history.component.html',
  styleUrls: ['./uploads-history.component.css']
})
export class UploadsHistoryComponent implements OnInit {

  uploads: Upload[];

  constructor(private uploadHistoryService: UploadsHistoryService) {}

  ngOnInit(): void {
    this.uploadHistoryService.getUploadsHistory().then(uploads => this.uploads = uploads);
  }
}
