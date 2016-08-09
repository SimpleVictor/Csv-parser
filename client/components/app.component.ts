import {Component} from "@angular/core";
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from "ng2-file-upload/ng2-file-upload";
import {NgClass, NgStyle, CORE_DIRECTIVES} from "@angular/common";
import {FORM_DIRECTIVES} from "@angular/forms";

declare var Papa;

const URL = 'http://localhost:3000/api';

@Component({
    directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: ['./client/components/app.component.css'],
    selector: "app",
    templateUrl: `./client/components/app.component.html`
})
export class AppComponent {
    // public uploader:FileUploader = new FileUploader({url: URL});
    uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver:boolean = false;
    //
    // constructor(private _http: Http){
    //
    // }
    //
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }


    ngOnInit() {
    }
    uploadFile() {
        this.uploader.queue[0].upload();
    }


    getName(){
        console.log(this.uploader.queue[0].some);
        var myFile = this.uploader.queue[0].some;
        Papa.parse(myFile, {
            header: true,
            complete: function(results){
                console.log(results);
            }
        });
    }




}
