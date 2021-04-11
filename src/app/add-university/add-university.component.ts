import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityModel } from '../university/university.model';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
  uItem = new UniversityModel(null,null,null,null,null);

  constructor(private universityService: UniversityService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    this.universityService.newUniversity(this.uItem);
    this.router.navigate(['/university']);
  }

}
