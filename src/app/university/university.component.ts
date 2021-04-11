import { Component, OnInit } from '@angular/core';
import { UniversityModel } from './university.model';
import { UniversityService } from '../university.service'

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  universities: UniversityModel[];

  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.universityService.getUniversities().subscribe((data)=>{
      // console.log(data);
      this.universities = JSON.parse(JSON.stringify(data));
    })
  }

}
