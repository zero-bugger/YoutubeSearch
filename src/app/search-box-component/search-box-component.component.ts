import { Component, OnInit, ElementRef, Output ,EventEmitter } from '@angular/core';
import { YoutubeSearchServiceService } from '../youtube-search-service.service';
import { SearchResultClass } from '../search-result-class';
import { Observable  } from 'rxjs';
import { fromEvent } from 'rxjs';




@Component({
  selector: 'app-search-box-component',
  templateUrl: './search-box-component.component.html',
  styleUrls: ['./search-box-component.component.css']
})
export class SearchBoxComponentComponent implements OnInit {

  @Output() private loading:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() private result:EventEmitter<SearchResultClass[]> = new EventEmitter<SearchResultClass[]>();

  constructor(private service:YoutubeSearchServiceService, private e1:ElementRef) { }

  ngOnInit(): void {
    Observable.formEvent(this.e1.nativeElement,'keyup')
    .map((e:any)=>e.target.value)
    .filter((text:string)=>text.length>1)
    .debounceTime(250)
    .do(()=>this.loading.emit(true))
    .map((query)=>this.service.search(query))
    .switch()
    .subscribe(
      ((result:SearchResultClass[]) =>{
            this.loading.emit(false)
            this.result.emit(result)
      }),
      (err:any)=>{
        this.loading.emit(false)
        console.log(err);
      },
      ()=>{
          this.loading.emit(false)
      }

    )
  }

}
