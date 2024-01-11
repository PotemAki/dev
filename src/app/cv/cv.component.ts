import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../main-page/projects.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, OnDestroy{
  @ViewChild('top', { read: ElementRef }) top: ElementRef;

  darkMode = false
  private isDarkModeSub: Subscription
  sub: Subscription

  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
    this.isDarkModeSub = this.projectsService.darkMode.subscribe((res) => {
      this.darkMode = res
    })
    this.sub = this.projectsService.navigateCV.subscribe(() =>{
      this.scroll(this.top.nativeElement)
    })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  ngOnDestroy() {
    this.isDarkModeSub.unsubscribe()
  }
}