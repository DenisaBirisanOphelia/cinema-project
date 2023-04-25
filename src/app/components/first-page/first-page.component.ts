import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../model/Client";
import {ClientService} from "../../service/ClientService";


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  clientList:Client[] = [];
  ownerList:any;
  loginForm:FormGroup|undefined;
  username: string="";
  userprenume:string="";
  userChoice:string="";
  password:string="";
  data:Array<String>=["Client","Admin"];

  constructor(private clientService:ClientService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    //first things first, imi va afisa toate movies pe pagina
    // this.movieService.getAllMovies().subscribe((res)=>{
    //     console.log(res);
    //     this.movieList=res;
    //   },
    //   (_error)=>{
    //
    //   });
    //apoi va apela functiile astea si formularul pentru movies
//    this.movieService.(1).subscribe();
  //  this.masinaService.getMasinaByMarca("Logan").subscribe();

    this.initLoginForm();

  }

  initLoginForm(){
    this.loginForm=this.formBuilder.group({
      username:['default', Validators.required],
      userprenume:['default',Validators.required],
      userChoice:['default',Validators.required],
      password:['default',Validators.required],
    })
  }
clearUp()
{
  this.username="";
  this.userprenume="";
  this.userChoice="";
  this.password="";
}
  login() {
    if(this.userChoice=="Client") {
      this.clientService.login(this.loginForm?.value.username,
        this.loginForm?.value.userprenume,
        this.loginForm?.value.password).subscribe
      ((response) => {console.log("login successful")},
        error => {
          console.log("unsuccessful login")
      ,this.clearUp()});
    }
    else {
      //aici voi verifica pentru admin
    }
  }

  selected() {
    console.log(this.userChoice)
  }

  understood() {

  }
}
