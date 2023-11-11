import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../main-page/projects.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, OnDestroy{
  darkMode = false
  private isDarkModeSub: Subscription


  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
    this.isDarkModeSub = this.projectsService.darkMode.subscribe((res) => {
      this.darkMode = res
    })
  }

  ngOnDestroy() {
    this.isDarkModeSub.unsubscribe()
  }
}