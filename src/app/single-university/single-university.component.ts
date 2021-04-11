import { Component, OnInit } from '@angular/core';
import { UniversityModel } from '../university/university.model';
import { Router } from '@angular/router';
import { UniversityService } from '../university.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-single-university',
  templateUrl: './single-university.component.html',
  styleUrls: ['./single-university.component.css']
})
export class SingleUniversityComponent implements OnInit {
  university: UniversityModel[];
  public id: string;

  constructor(private universityService: UniversityService,public auth:AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.universityService.singleUniversity(this.id).subscribe((data)=>{
      this.university = JSON.parse(JSON.stringify(data));
      // console.log(this.university);
    })
  }

  delete(){
    this.universityService.deleteUniversity(this.id);
    this.router.navigate(['/university']);
  }

}
