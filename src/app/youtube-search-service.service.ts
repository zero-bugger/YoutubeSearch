import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClientModule,HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SearchResultClass } from './search-result-class';

@Injectable()
export class YoutubeSearchServiceService {
private api_key="";
private api_url="";
  constructor(private http: HttpClient) { }

    search(query:string):Observable<SearchResultClass[]>{
          const params : string = [
            `q=${query}`,
            `key=${this.api_key}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`

          ].join('&')
           const queryUrl = `${this.api_url}?${params}`;
           return this.http.get(queryUrl).pipe(map(response=>{
             return <any>response['items'].map(item=>{
                  return new SearchResultClass({
                      id: item.id.videoId,
                      title: item.snippet.title,
                      description: item.snippet.description,
                      thumbnailUrl: item.snippet.thumbnails.high.url
                  })
             })
           }))
        
          
    }
}
