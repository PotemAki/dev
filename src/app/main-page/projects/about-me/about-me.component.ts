import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SkillsComponent } from '../skills/skills.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectsService } from '../../projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate(300, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(0, style({ opacity: 1}))
      ]),
    ])
  ]
})
export class AboutMeComponent implements OnInit, OnDestroy {
  selectedTab1 = true
  selectedTab2 = false
  selectedTab3 = false
  darkMode = false
  private isDarkModeSub: Subscription

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AboutMeComponent>, 
    public projectsService: ProjectsService) {}

  ngOnInit() {
    this.isDarkModeSub = this.projectsService.darkMode.subscribe((res) => {
      this.darkMode = res
    })
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  selectedTitle: string | null = null;

  showText(title: string): void {
    this.selectedTitle = title;
  }
  showTab1() {
    this.selectedTab1 = true
    this.selectedTab2 = false
    this.selectedTab3 = false
  }
  showTab2() {
    this.selectedTab2 = true
    this.selectedTab1 = false
    this.selectedTab3 = false
  }
  showTab3() {
    this.selectedTab2 = false
    this.selectedTab1 = false
    this.selectedTab3 = true
  }
  ngOnDestroy(): void {
    this.isDarkModeSub.unsubscribe()
  }
}

