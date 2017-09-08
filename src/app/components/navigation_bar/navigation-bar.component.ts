import {Component, OnInit} from '@angular/core';

import {NavigationBarLink} from '../../models/NavigationBarLink';
import {NavigationLinksService} from '../../services/navigation-links.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigatorBarComponent implements OnInit {
  navigationLinks: NavigationBarLink[];

  constructor(private navigationLinksService: NavigationLinksService) {}

  ngOnInit(): void {
    this.navigationLinksService.getAllLinks().then(navigationLinks => this.navigationLinks = navigationLinks);
  }
}
