import { Component, OnInit } from '@angular/core';
import {Backend1Service} from '../../services/backend1.service'
import {Activity} from "../../interfaces/activity";

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent {

  activities: Activity[] = [];

  constructor(private backend: Backend1Service) {}

  ngOnInit(): void {
    this.backend.getActivities().subscribe(resp => {
      this.activities = resp.activities;
      console.log(this.activities)
    });
  }
}
