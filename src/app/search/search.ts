import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
    selector: 'app-Search',
    templateUrl: './Search.page.html',
    styleUrls: ['./Search.page.scss'],
  })


  export class Search implements OnInit {


    constructor(){ }

    ngOnInit() : void{
    }
    enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter <string> = new EventEmitter <string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  }
