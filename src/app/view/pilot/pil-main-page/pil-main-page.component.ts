import { Component, OnInit } from '@angular/core';
import { RequestService} from "../../../services/request.service";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pil-main-page',
  templateUrl: './pil-main-page.component.html',
  styleUrls: ['./pil-main-page.component.css']
})
export class PilMainPageComponent implements OnInit {
 

  constructor(
    public router : Router,
    private RequestService : RequestService
  ) {
    
   }

  
  pending_req_arr = [];
 

  ngOnInit() {
    this.RequestService.getAll_Requests().subscribe(
    (res) => {
      console.log(res);
      this.pending_req_arr=res;
      //this.router.navigateByUrl('/login');
    })
    // (res=>this.pending_req_arr=res)
    // console.log("printing all")
    // console.log(this.pending_req_arr)
  }
  

}