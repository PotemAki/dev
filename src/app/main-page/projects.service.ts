import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  navigateProjects = new Subject<void>()
  navigateJSProjects = new Subject<void>()
  navigateHome = new Subject<void>()
  
}