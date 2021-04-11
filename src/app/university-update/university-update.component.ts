import { Component, OnInit } from '@angular/core';
import { UniversityModel } from '../university/university.model';
import { Router } from '@angular/router';
import { UniversityService } from '../university.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university-update',
  templateUrl: './university-update.component.html',
  styleUrls: ['./university-update.component.css']
})
export class UniversityUpdateComponent implements OnInit {
  public id: string;
  uItem = new UniversityModel(null, null,null,null,null);

  constructor(private route: ActivatedRoute, private router: Router, private universityService: UniversityService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  update(){
    this.universityService.updateUniversity(this.id,this.uItem);
    this.router.navigate(['/university']);
  }
}
