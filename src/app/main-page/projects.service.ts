import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  navigateProjects = new Subject<void>()
  navigateJSProjects = new Subject<void>()
  navigateHome = new Subject<void>()
  navigateCV = new Subject<void>()
  darkMode = new BehaviorSubject<boolean>(false)
  runAnimation = new BehaviorSubject<string>('none')


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