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
    this.router.navigate(['/'])
    this.projectsService.navigateHome.next()
  }
  onProjects() {
    this.router.navigate(['/'])
    this.projectsService.navigateProjects.next()
    
  }
  onJSProjects() {
    this.router.navigate(['/'])
    this.projectsService.navigateJSProjects.next()
  }
  onAboutMe() {
    this.dialogService.openAboutMeDialog({});
  }
  onCV() {
    this.router.navigate(['/cv'])
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
