import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-build-tool-options',
  templateUrl: './build-tool-options.component.html',
  styleUrls: ['./build-tool-options.component.css']
})
export class BuildToolOptionsComponent implements OnInit {
  buildTools: string[];

  ngOnInit(): void {
    this.buildTools = ['Maven', 'Npm'];
  }
}
