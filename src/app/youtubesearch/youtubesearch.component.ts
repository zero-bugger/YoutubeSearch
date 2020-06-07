import { Component, OnInit } from '@angular/core';
import { SearchResultClass } from '../search-result-class';

@Component({
  selector: 'app-youtubesearch',
  templateUrl: './youtubesearch.component.html',
  styleUrls: ['./youtubesearch.component.css']
})
export class YoutubesearchComponent implements OnInit {
  result:SearchResultClass[];
  loading:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  updateResult(result:SearchResultClass[]){
        this.result=result;
  }

}
