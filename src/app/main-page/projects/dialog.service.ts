import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(data: any): void {
    this.dialog.open(DetailsComponent, { data });
  }
  openSkillsDialog(data: any): void {
    this.dialog.open(SkillsComponent, { data });
  }
  openAboutMeDialog(data: any): void {
    this.dialog.open(AboutMeComponent, {
        height: '90%',
        maxHeight: '700px',
        width: '90%',
        maxWidth: '800px'
    });
  }
}