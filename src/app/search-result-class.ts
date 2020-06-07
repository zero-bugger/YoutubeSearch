export class SearchResultClass {

    id:String;
    videoUrl:String;
    title:String;
    thumbnailUrl:String;
    description:String;


    constructor(obj?:any){
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl ||
        `https://www.youtube.com/watch?v=${this.id}`;
    }
}
