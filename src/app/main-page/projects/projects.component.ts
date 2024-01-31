import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogService } from './dialog.service';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../projects.service';

declare let gtag: Function;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy{
  @ViewChild('appJSProjects', { read: ElementRef }) appJSProjects: ElementRef;
  sub3: Subscription;
  darkMode = false
  private isDarkModeSub: Subscription

  constructor(private dialogService: DialogService, public projectsService: ProjectsService) {}

  ngOnInit() {
    this.sub3 = this.projectsService.navigateJSProjects.subscribe(() =>{
      this.scroll(this.appJSProjects.nativeElement)
    })
    this.isDarkModeSub = this.projectsService.darkMode.subscribe((res) => {
      this.darkMode = res
    })
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  openDialogVariant1() {
    this.dialogService.openDialog({
      title: 'Curriculum Vitae Generator',
      contentLine1: `We can insert the "About Me" tab.`,
      contentLine2: `We can list multiple education elements or courses.`,
      contentLine3: `We can add multiple experience elements; two of them can be detailed.`,
      contentLine4: `We can add multiple languages and additional information.`,
      contentLine5: `We can input a link to our portfolio and give that link a specific name.`,
      contentLine6: `We can download our CV in PDF format (the link to the portfolio still works) - this is recommended on desktop.`
    });
    this.trackOutboundLink('generate-desc')
  }
  openDialogVariant2() {
    this.dialogService.openDialog({
      title: 'Login App with Notes',
      contentLine1: `The app connects to Firebase.`,
      contentLine2: `We can create an account and log in.`,
      contentLine3: `We can receive a forgot password email.`,
      contentLine4: `The app will automatically log us out after 1 hour.`,
      contentLine5: `We can log in and then edit our details: display name and password.`,
      contentLine6: `We can create notes that are assigned to our account.`
    });
    this.trackOutboundLink('login-desc')
  }
  openDialogVariant3() {
    this.dialogService.openDialog({
      title: 'Arcadia',
      contentLine1: `Reactive ToDo: We can hold a ToDo and move it around to either delete or archive our task. We can create multiple groups for our list of Todos.`,
      contentLine2: `Apps: Calculator, StopWatch, Convert-Values and Generate color`,
      contentLine3: `Game: Let us play a game with the computer, which randomly generates a outcome, there is an option to autoplay too.`,
      contentLine4: `Weather App: Using an API server, we can check the current time and weather conditions across different cities.`
    });
    this.trackOutboundLink('apps-desc')
  }
  openDialogVariant4() {
    this.dialogService.openDialog({
      title: 'Bookmarks Demo Project',
      contentLine1: `Professional and user-friendly design,`,
      contentLine2: `Pop-up modal after 30s on page, footer info about members gradually going down to 0,`,
      contentLine3: `Sidebar when on a smaller screen.`,
    });
    this.trackOutboundLink('bookmarks-desc')
  }
  openDialogVariant5() {
    this.dialogService.openDialog({
      title: 'Rock Paper Scissors',
      contentLine1: `Let's play a game with the computer, which randomly generates a number.`,
      contentLine2: `It counts the score and saves the score when we refresh the game. We can reset the score.`,
      contentLine3: `We can use autoplay to let the computer play for us.`
    });
  }
  openDialogVariant6() {
    this.dialogService.openDialog({
      title: 'Calculator',
      contentLine1: `Let's add, subtract, multiply, and divide.`,
      contentLine2: `We can use decimal numbers.`,
      contentLine3: `An error occurs when using inappropriate calculations (dividing by 0).`
    });
  }
  openDialogVariant8() {
    this.dialogService.openDialog({
      title: 'Stopwatch',
      contentLine1: `Let's count the time.`,
      contentLine2: `We can save periods of time up to 10 times.`
    });
  }
  openDialogVariant10() {
    this.dialogService.openDialog({
      title: 'Posts App',
      contentLine1: `The app connects through NodeJS using Express to a MongoDB database, where it stores all users and posts.`,
      contentLine2: `We create an account to fully use the website; the backend server encrypts the password using bcrypt to ensure security. You can use the ready account with the login: michal@gmail.com and the password: testtest.`,
      contentLine3: `We can add a post with a picture; later, we can edit that post (if we are the creator) and change or delete that picture.`,
      contentLine4: `Small details: we can like a post and then see people who liked it by hovering on it; we can check other users and their profile by navigating the sidebar, and we can switch to day/night mode.`,
      contentLine5: `We can edit our account: change nickname, password, or profile picture.`,
      contentLine6: `The app uses AWE hosting service as GitHub doesn't support backend hosting.`
    });
    this.trackOutboundLink('posts-desc')
  }
  openDialogVariant11() {
    this.dialogService.openDialog({
      title: 'Restaurant App',
      contentLine1: `Animations in view,`,
      contentLine2: `Connected Google Maps API`,
      contentLine3: `Interesting, well balanced, responsive and modern look.`,
    });
  }
  
  trackOutboundLink(label: string) {
    // Send an event to Google Analytics
    gtag('event', 'click', {
       event_category: 'Outbound Link',
       event_label: label,
    });
 }

  ngOnDestroy(): void {
    this.sub3.unsubscribe()
    this.isDarkModeSub.unsubscribe()
  }
}
