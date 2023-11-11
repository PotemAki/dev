import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  navigateProjects = new Subject<void>()
  navigateJSProjects = new Subject<void>()
  navigateHome = new Subject<void>()
  darkMode = new BehaviorSubject<boolean>(false)


  autoDarkMode() {
    const autoDarkMode = localStorage.getItem('darkMode')
    if (!autoDarkMode) {
      return
    }
    if (autoDarkMode === 'true') {
      this.darkMode.next(true)
    } else {
      this.darkMode.next(false)
    }
    
  }
}