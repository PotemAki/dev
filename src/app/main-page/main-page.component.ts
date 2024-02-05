import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogService } from './projects/dialog.service';
import { ProjectsService } from './projects.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare let gtag: Function;

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
    trigger('slideSide3', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-1000%)' }),
        animate('300ms ease-in')
      ]),
    ]),
    trigger('slideSide4', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-1000%)' }),
        animate('350ms ease-in')
      ]),
    ]),
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate(500, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(0, style({ opacity: 1}))
      ]),
    ]),
  ],
})
export class MainPageComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild('appProjects', { read: ElementRef }) appProjects: ElementRef;
  @ViewChild('appHome', { read: ElementRef }) appHome: ElementRef;
  sub1: Subscription;
  sub2: Subscription;
  darkMode = false
  private isDarkModeSub: Subscription

  constructor(private dialogService: DialogService, public projectsService: ProjectsService) {}

  ngOnInit() {
    this.sub1 = this.projectsService.navigateProjects.subscribe(() =>{
      this.scroll(this.appProjects.nativeElement)
    })
    this.sub2 = this.projectsService.navigateHome.subscribe(() =>{
      this.scroll(this.appHome.nativeElement)
    })
    this.isDarkModeSub = this.projectsService.darkMode.subscribe((res) => {
      this.darkMode = res
    })
    
  }
  ngAfterViewInit(): void {
    this.observeElement(this.appProjects.nativeElement, 'appprojects');
  }
  observeElement(element: HTMLElement, component: string) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.17
    };
   
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            this.projectsService.runAnimation.next(component)
        }
      });
    }, options);

    observer.observe(element);
  }


  openAboutMe() {
    this.dialogService.openAboutMeDialog({});
    this.trackOutboundLink('dialog-aboutme')
  }
  openSkillsInfo() {
    this.dialogService.openSkillsDialog({});
    this.trackOutboundLink('dialog-skills')
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  trackOutboundLink(label: string) {
    // Send an event to Google Analytics
    gtag('event', 'click', {
       event_category: 'Outbound Link',
       event_label: label,
    });
 }
  ngOnDestroy(){
    this.sub1.unsubscribe()
    this.sub2.unsubscribe()
    this.isDarkModeSub.unsubscribe()
  }
}
