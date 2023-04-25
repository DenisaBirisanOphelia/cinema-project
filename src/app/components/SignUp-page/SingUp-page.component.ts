import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/movieservice";


@Component({
  selector: 'app-first-page',
  templateUrl: './SingUp-page.component.html',
  styleUrls: ['./SingUp-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  movieList:Movie[] = [];
  ownerList:any;
  updateForm:FormGroup | undefined;

  constructor(private movieService:MovieService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    //first things first, imi va afisa toate movies pe pagina
    this.movieService.getAllMovies().subscribe((res)=>{
        console.log(res);
        this.movieList=res;
      },
      (_error)=>{

      });
    //apoi va apela functiile astea si formularul pentru movies
//    this.movieService.(1).subscribe();
    //  this.masinaService.getMasinaByMarca("Logan").subscribe();

    this.initOwnerCarsForm();
  }

  initOwnerCarsForm(){
    this.updateForm=this.formBuilder.group({
      ownerInput:[null, Validators.required],
      carInput:[null,Validators.required]
    })
  }

}
