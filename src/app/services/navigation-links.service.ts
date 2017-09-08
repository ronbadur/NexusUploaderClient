import {Injectable} from "@angular/core";
import {NavigationBarLink} from "../models/NavigationBarLink";

const navigationLinks: NavigationBarLink[] = [{path: '/homepage', name: 'NexusUploader'}, {path: '/upload', name: 'Upload'},
  {path: '/uploadsHistory', name: 'Uploads HIstory'}, {path: '/about', name: 'About'}];

@Injectable()
export class NavigationLinksService {

  getAllLinks(): Promise<NavigationBarLink[]> {
    return Promise.resolve(navigationLinks);
  }
}
