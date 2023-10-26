import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogService } from './dialog.service';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy{
  @ViewChild('appJSProjects', { read: ElementRef }) appJSProjects: ElementRef;
  sub3: Subscription;
  constructor(private dialogService: DialogService, public projectsService: ProjectsService) {}

  ngOnInit() {
    this.sub3 = this.projectsService.navigateJSProjects.subscribe(() =>{
      this.scroll(this.appJSProjects.nativeElement)
    })
   
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  openDialogVariant1() {
    this.dialogService.openDialog({
      title: 'Curriculum Vitae generator',
      contentLine1: `We can insert "about-me" tab,`,
      contentLine2: `We can list multiple educations elements or two education elements + courses,`,
      contentLine3: `We can add multiple experience elements, two of them can be detailed,`,
      contentLine4: `We can add multiple languages and additional informations,`,
      contentLine5: `We can input link to our portfolio and give that link specific name,`,
      contentLine6: `We can download our CV in PDF format (link to portfolio still works) - this is recommend on deskopt.`
    });
  }

  openDialogVariant2() {
    this.dialogService.openDialog({
      title: 'Login App with notes',
      contentLine1: `App connects to firebase,`,
      contentLine2: `We can create an account and login,`,
      contentLine3: `We can recieve forgot password email,`,
      contentLine4: `App will automatically log us out after 1h,`,
      contentLine5: `We can login and then edit our details: display name and password,`,
      contentLine6: `We can create notes that are assigned to our account.`
    });
  }
  openDialogVariant3() {
    this.dialogService.openDialog({
      title: 'A simple ToDo List',
      contentLine1: `We can add new elements,`,
      contentLine2: `We can edit existing elements,`,
      contentLine3: `We can move elements to archive which will add to our archived element date of completion.`,
    });
  }
  openDialogVariant4() {
    this.dialogService.openDialog({
      title: 'A simple Weather App',
      contentLine1: `App sends http request to API server, that's live database of weather conditions,`,
      contentLine2: `We can search cities and check current time, weather, humidity and wind,`,
      contentLine3: `App look will change depending on weather and day/night time.`,
    });
  }
  openDialogVariant5() {
    this.dialogService.openDialog({
      title: 'Rock Paper Scissors',
      contentLine1: `Let us play game with computer, that randomly generate number,`,
      contentLine2: `Counts score, saves score when we refresh game. We can reset score,`,
      contentLine3: `We can use autoplay to let computer play for us.`,
    });
  }
  openDialogVariant6() {
    this.dialogService.openDialog({
      title: 'Calculator',
      contentLine1: `Let us add, subtract, multiply and divide,`,
      contentLine2: `We can use decimal numbers,`,
      contentLine3: `Error when using inapropriate calculation (dividing by 0).`,
    });
  }
  openDialogVariant7() {
    this.dialogService.openDialog({
      title: 'Convert-Values',
      contentLine1: `Let convert from both ways: temperature, weight and distance.`
    });
  }
  openDialogVariant8() {
    this.dialogService.openDialog({
      title: 'StopWatch',
      contentLine1: `Let us count the time,`,
      contentLine2: `We can save period of time up to 10 times.`,
    });
  }
  openDialogVariant9() {
    this.dialogService.openDialog({
      title: 'Color Generator',
      contentLine1: `Let us generate random color,`,
      contentLine2: `Give us details of the color, so we can use it.`,
    });
  }

  ngOnDestroy(): void {
    this.sub3.unsubscribe()
  }
}
