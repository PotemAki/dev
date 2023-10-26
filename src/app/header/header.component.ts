import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../main-page/projects.service';
import { DialogService } from '../main-page/projects/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toProjects = new EventEmitter<any>()
  


  constructor(private dialogService: DialogService, private router: Router, public projectsService: ProjectsService) { }

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
}
