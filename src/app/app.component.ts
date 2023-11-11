import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './main-page/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dev';

  constructor(public projectsService: ProjectsService) { }


  ngOnInit() {
    // this.projectsService.autoDarkMode()
  }
}
