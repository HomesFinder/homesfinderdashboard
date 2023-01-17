import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})

export class PropserviceService {

  private url = 'https://homesfinder-service.onrender.com/api/';
  private basePath = '/uploads';
  currentPropHolder:any
  public isEdit:boolean = false
   public uploadComplete = false;
  public isButtonDisabled: boolean = false;
  constructor(private httpClient: HttpClient, private storage: AngularFireStorage) { }
  getPosts(){
    return this.httpClient.get(this.url+"getPropertyfromDB");
  }

  postProp(postData:any){
    this.isButtonDisabled=true
    console.log(this.isButtonDisabled);
    
    this.httpClient.post(this.url + "postPropertyinDB", postData).subscribe(data => {
      console.log(data);
      console.log("data posted");
      this.isButtonDisabled=false
      console.log(this.isButtonDisabled);
      
      alert("Data Posted")
    })
  
  }


  uploadImages(images:any,imgsArray:any[]){
    
   let imagesUri=imgsArray
   console.log(imagesUri);
   
    return new Promise((resolve=>{
    console.log("inimg",images.length);
    for (let i = 0; i < images.length; i++) {
      
      const filePath = `${this.basePath}/${images[i].name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath,images[i]);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
           let url = downloadURL;
           imagesUri.push(url)
          
            console.log(url);
             
              
          
        });
       
      })
    ).subscribe();
    }
    resolve(imagesUri)
    console.log("images uploaded");
  return imagesUri
  }))
}
 
// uploadSingleImage(images:any){
//   let imageUri: any
//    return new Promise((resolve=>{
 
   
     
//      const filePath = `${this.basePath}/${images[0].name}`;
//    const storageRef = this.storage.ref(filePath);
//    const uploadTask = this.storage.upload(filePath,images[0]);

//    uploadTask.snapshotChanges().pipe(
//      finalize(() => {
//        storageRef.getDownloadURL().subscribe(downloadURL => {
//           let url = downloadURL;
//           imageUri=url
//            console.log(url);
           
         
//        });
//      })
//    ).subscribe();
   
//    resolve(imageUri)
//  return imageUri
//  }))
// }


editProp(prop:any) {
  console.log(prop);
  
  this.currentPropHolder=prop;
  console.log(this.currentPropHolder);
  
}

postTestimony(obj:any) {

 this.httpClient.post(this.url + "postTestimonyinDB", obj).subscribe(data => {
  console.log(data);
  console.log("Testimony data posted");
  alert(data)
});
}

deleteDatafromDB(id:any){
  this.httpClient.post(this.url + "deleteDatafromDB", {"_id":id}).subscribe(data => {
    
    console.log("Deleted Successfully");
    alert(data)
  });
}
 }


//  import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'priceFormat'
// })
// export class PriceFormatPipe implements PipeTransform {
//   transform(value: number): string {
//     if (value >= 10000000) {
//       return (value / 10000000).toFixed(2) + ' Crore';
//     } else if (value >= 100000) {
//       return (value / 100000).toFixed(2) + 'Lakh';
//     } else {
//       return value.toFixed(2);
//     }
//   }
// }

// You can then use this pipe in your template like this:
// {{ price | priceFormat }}

// 2nd Option
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'priceFormat'
// })
// export class PriceFormatPipe implements PipeTransform {
//   transform(value: number, format: string = 'comma'): string {
//     let formattedValue: string;
//     if (value >= 10000000) {
//       formattedValue = (value / 10000000).toFixed(2) + ' Crore';
//     } else if (value >= 100000) {
//       formattedValue = (value / 100000).toFixed(2) + 'Lakh';
//     } else {
//       formattedValue = value.toFixed(2);
//     }

//     if (format === 'comma') {
//       return this.addComma(formattedValue);
//     } else {
//       return formattedValue;
//     }
//   }

//   addComma(value: string): string {
//     return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
// }

