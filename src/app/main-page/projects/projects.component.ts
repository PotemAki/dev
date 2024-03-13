import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogService } from './dialog.service';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { projectsAngular, projectsReact } from './projects-list';

declare let gtag: Function;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy{
  @ViewChild('appJSProjects', { read: ElementRef }) appJSProjects: ElementRef;

  projectsA = projectsAngular
  projectsR = projectsReact

  sub3: Subscription;
  subAnimation: Subscription;
  darkMode = false
  runAnimation = false;
  private isDarkModeSub: Subscription

  constructor(private dialogService: DialogService, public projectsService: ProjectsService) {}

  ngOnInit() {
    this.sub3 = this.projectsService.navigateJSProjects.subscribe(() =>{
      this.scroll(this.appJSProjects.nativeElement)
    })
    this.isDarkModeSub = this.projectsService.darkMode.subscribe((res) => {
      this.darkMode = res
    })
    this.subAnimation = this.projectsService.runAnimation.subscribe((component) =>{
      if (component === 'appprojects') {
        this.runAnimation = true
      }
    })
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  openDialog(project) {
    if (project === 'project1') {
      this.projectDialog1()
    }
    if (project === 'project2') {
      this.projectDialog2()
    }
    if (project === 'project3') {
      this.projectDialog3()
    }
    if (project === 'project4') {
      this.projectDialog4()
    }
    if (project === 'project5') {
      this.projectDialog5()
    }
    if (project === 'project6') {
      this.projectDialog6()
    }
  }

  projectDialog1() {
    this.dialogService.openDialog({
      title: 'Restaurant App',
      contentLine1: `Animations in view,`,
      contentLine2: `Connected Google Maps API`,
      contentLine3: `Interesting, well balanced, responsive and modern look.`,
    });
  }

  projectDialog2() {
    this.dialogService.openDialog({
      title: 'Posts App',
      contentLine1: `The app connects through NodeJS using Express to a MongoDB database, where it stores all users and posts.`,
      contentLine2: `We create an account to fully use the website; the backend server encrypts the password using bcrypt to ensure security. You can use the ready account with the login: michal@gmail.com and the password: testtest.`,
      contentLine3: `We can add a post with a picture; later, we can edit that post (if we are the creator) and change or delete that picture.`,
      contentLine4: `Small details: we can like a post and then see people who liked it by hovering on it; we can check other users and their profile by navigating the sidebar, and we can switch to day/night mode.`,
      contentLine5: `We can edit our account: change nickname, password, or profile picture.`,
      contentLine6: `The app uses AWE hosting service as GitHub doesn't support backend hosting.`
    });
  }

  projectDialog3() {
    this.dialogService.openDialog({
      title: 'Arcadia',
      contentLine1: `Reactive ToDo: We can hold a ToDo and move it around to either delete or archive our task. We can create multiple groups for our list of Todos.`,
      contentLine2: `Apps: Calculator, StopWatch, Convert-Values and Generate color`,
      contentLine3: `Game: Let us play a game with the computer, which randomly generates a outcome, there is an option to autoplay too.`,
      contentLine4: `Weather App: Using an API server, we can check the current time and weather conditions across different cities.`
    });
  }
  
  projectDialog4() {
    this.dialogService.openDialog({
      title: 'Curriculum Vitae Generator',
      contentLine1: `We can insert the "About Me" tab.`,
      contentLine2: `We can list multiple education elements or courses.`,
      contentLine3: `We can add multiple experience elements; two of them can be detailed.`,
      contentLine4: `We can add multiple languages and additional information.`,
      contentLine5: `We can input a link to our portfolio and give that link a specific name.`,
      contentLine6: `We can download our CV in PDF format (the link to the portfolio still works) - this is recommended on desktop.`
    });
  }
  projectDialog6() {
    this.dialogService.openDialog({
      title: 'Shop App',
      contentLine1: `Add multiple values of products to cart.`,
      contentLine2: `Dynamically searching through product database.`,
      contentLine3: `Different types of filters we can apply at once or separately.`,
      contentLine4: `Dynamic product information: ratings and number of reviews. We can add our own comment affecting rating and reviews.`,
      contentLine5: `The landing page will show us products with the most reviews. The product's subheader will advertise the product with the best rating.`,
    });
  }

  /* REACT */
  projectDialog5() {
    this.dialogService.openDialog({
      title: 'Bookmarks Project',
      contentLine1: `Professional and user-friendly design,`,
      contentLine2: `Pop-up modal after 30s on page, footer info about members gradually going down to 0,`,
      contentLine3: `Sidebar when on a smaller screen.`,
    });
  }

  ngOnDestroy(): void {
    this.sub3.unsubscribe()
    this.isDarkModeSub.unsubscribe()
    this.subAnimation.unsubscribe()
  }
}
