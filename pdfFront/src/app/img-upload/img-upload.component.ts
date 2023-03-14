import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css']
})
export class ImgUploadComponent {

  url: any;
	msg = "";

	selectFile(event: any) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;


		if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
      this.msg = "";
			this.url = reader.result;
    }

  }

  pointerCoords = { x : 0, y : 0 }






    @ViewChild('PDF')
    PDF!: ElementRef;

    getScale() {
      const img: HTMLImageElement = this.PDF.nativeElement;
      var scale = img.naturalWidth / img.clientWidth
      return scale;
    }



    setCoords() {

    const img = this.PDF.nativeElement;
    const imgOffx = img.offsetLeft
    const imgOffy = img.offsetTop
    img.addEventListener("mousemove", (e : MouseEvent) =>{
      this.pointerCoords.x = ( e.x - imgOffx ) * this.getScale();
      this.pointerCoords.y = ( e.y - imgOffy )* this.getScale();
    })
  };
}




