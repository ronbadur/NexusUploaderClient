import { Injectable } from '@angular/core';

import { Upload } from '../models/Upload';

const Uploads: Upload[] = [{id: 1, uploaderId: 's8196792', fileName: 'repository.zip', date: '22/10/2017'},
                           {id: 2, uploaderId: 's6798142', fileName: 'zip4j.rar', date: '14/10/2017'},
  {id: 3, uploaderId: 's8576392', fileName: 'rxjs.rar', date: '14/10/2017'},
  {id: 4, uploaderId: 's7845672', fileName: 'node_modules.rar', date: '14/10/2017'},
  {id: 5, uploaderId: 's798733', fileName: 'graphql.rar', date: '14/10/2017'},
  {id: 6, uploaderId: 's7586349', fileName: 'mockito.rar', date: '14/10/2017'},
  {id: 7, uploaderId: 's9875653', fileName: 'loadash.rar', date: '14/10/2017'},
  {id: 8, uploaderId: 's8726389', fileName: 'sevenzip.rar', date: '14/10/2017'}];

@Injectable()
export class UploadsHistoryService {

  getUploadsHistory(): Promise<Upload[]> {
    return Promise.resolve(Uploads);
  }
}
