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
  


  constructor(private httpClient: HttpClient, private storage: AngularFireStorage) { }
  getPosts(){
    return this.httpClient.get(this.url+"getPropertyfromDB");
  }

  postProp(postData:any){
    this.httpClient.post(this.url + "postPropertyinDB", postData).subscribe(data => {
      console.log(data);
      console.log("data posted");
    });
  }


  uploadImages(images:any){
   let imagesUri: any[]=[]
    return new Promise((resolve=>{
    console.log(images.length);
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
 
 }
