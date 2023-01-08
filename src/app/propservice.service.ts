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
  isEdit:boolean = false


  constructor(private httpClient: HttpClient, private storage: AngularFireStorage) { }
  getPosts(){
    return this.httpClient.get(this.url+"getPropertyfromDB");
  }

  postProp(postData:any){
    this.httpClient.post(this.url + "postPropertyinDB", postData).subscribe(data => {
      console.log(data);
      console.log("data posted");
      alert(data)
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
 }
