import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogService } from './projects/dialog.service';
import { ProjectsService } from './projects.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('slideSide1', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-500%)' }),
        animate('400ms ease-in')
      ]),
    ]),
    trigger('slideSide2', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-500%)' }),
        animate('600ms ease-in')
      ]),
    ]),
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate(300, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(0, style({ opacity: 1}))
      ]),
    ]),
  ],
})
export class MainPageComponent implements OnInit, OnDestroy{
  @ViewChild('appProjects', { read: ElementRef }) appProjects: ElementRef;
  @ViewChild('appHome', { read: ElementRef }) appHome: ElementRef;
  sub1: Subscription;
  sub2: Subscription;

  constructor(private dialogService: DialogService, public projectsService: ProjectsService) {}

  ngOnInit() {
    this.sub1 = this.projectsService.navigateProjects.subscribe(() =>{
      this.scroll(this.appProjects.nativeElement)
    })
    this.sub2 = this.projectsService.navigateHome.subscribe(() =>{
      this.scroll(this.appHome.nativeElement)
    })
  }
  openAboutMe() {
    this.dialogService.openAboutMeDialog({});
  }
  openSkillsInfo() {
    this.dialogService.openSkillsDialog({});
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  ngOnDestroy(){
    this.sub1.unsubscribe()
    this.sub2.unsubscribe()
  }
}
