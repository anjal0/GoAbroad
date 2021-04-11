import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) { }

  getUniversities(){
    return this.http.get('http://localhost:5000/university');
  }

  newUniversity(item){
    return this.http.post('http://localhost:5000/addUniversity', {'university':item})
    .subscribe(data =>{console.log(data)})
  }

  singleUniversity(id){
    return this.http.get('http://localhost:5000/single', {
      params:{ i: id }
    });
  }

  deleteUniversity(id:any){
    return this.http.delete('http://localhost:5000/remove/'+id)
    .subscribe(data => { console.log('done') })
  }

  updateUniversity(id:any,item){
    return this.http.post('http://localhost:5000/update/'+id,{'university':item})
    .subscribe(data=>{console.log(data)})
  }
}
