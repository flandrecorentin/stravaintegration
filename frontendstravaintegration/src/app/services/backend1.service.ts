import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Activities} from '../interfaces/activities'

@Injectable()
export class Backend1Service {
  // TODO : modify api from backend in production

  activitiesSubdirectory = 'activities/'

  constructor(private http: HttpClient) {}

  getActivities(){
    return this.http.get<Activities>('/api/'+this.activitiesSubdirectory)
  }
}
