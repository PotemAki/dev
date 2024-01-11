import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../main-page/projects.service';
import { DialogService } from '../main-page/projects/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toProjects = new EventEmitter<any>()
  darkMode = false
  private isDarkModeSub: Subscription


  constructor(private dialogService: DialogService, private router: Router, public projectsService: ProjectsService) { }

  ngOnInit() {
    this.isDarkModeSub = this.projectsService.darkMode.subscribe((res) => {
      this.darkMode = res
    })
  }

  onHome() {
    if (this.router.url.includes('/cv')) {  
        this.projectsService.navigateCV.next()
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2);
      } else {
        this.projectsService.navigateHome.next()
      }
  }
  onProjects() {
    if (this.router.url.includes('/cv')) {  
      this.router.navigate(['/']);
      setTimeout(() => {
        this.projectsService.navigateProjects.next()
      }, 2);
    } else {
      this.projectsService.navigateProjects.next()
    }
  }
  onJSProjects() {

    if (this.router.url.includes('/cv')) {  
      this.router.navigate(['/']);
      setTimeout(() => {
        this.projectsService.navigateJSProjects.next()
      }, 2);
    } else {
      this.projectsService.navigateJSProjects.next()
    }
  }
  onAboutMe() {
    this.dialogService.openAboutMeDialog({});
  }
  onCV() {
    if (this.router.url.includes('/cv')) {  
      this.projectsService.navigateCV.next()
    } else {
        this.projectsService.navigateHome.next()
        setTimeout(() => {
          this.router.navigate(['/cv']);
        }, 2);
    }
  }

  toDarkMode() {
    if (this.darkMode) {
      this.projectsService.darkMode.next(false)
      localStorage.removeItem('darkMode')
      localStorage.setItem('darkMode', 'false')
    } else {
      this.projectsService.darkMode.next(true)
      localStorage.removeItem('darkMode')
      localStorage.setItem('darkMode', 'true')
    }
  }
  ngOnDestroy() {
    this.isDarkModeSub.unsubscribe()
  }
}
