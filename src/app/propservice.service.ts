import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { resolve } from 'dns';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})

export class PropserviceService {

  private url = 'https://homesfinderserver2.onrender.com/api/';
  private basePath = '/uploads';
  currentPropHolder:any
  public isEdit:boolean = false
   public uploadComplete = false;
  public isButtonDisabled: boolean = false;
  isLoggedIn:boolean=false
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
             
            this.fileSignal()
          
        });
       
      })
    ).subscribe();
    }
    resolve(imagesUri)
    
  return imagesUri
  }))
}
fileSignal(){
    alert("File Uploaded")
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

getAllInquries(){
  return this.httpClient.get(this.url+"getInquriesfromDB");
}


getAllDevelopers(): Observable<any> {
  return this.httpClient.get<any>(this.url+"getAllDevelopersfromDB")
}

postDeveloper(form:any)  {
  console.log(form);
  
  return this.httpClient.post(this.url+"postDeveloperinDB",form).subscribe((data:any) => {
   
    console.log("Developer Added");
    alert(data.message)
  },(error) => { alert(error.error.message); console.log(error);
   });
}
updateDeveloperPriority(form:any){
  return this.httpClient.put(this.url + "priorotizeDeveloper",form )
}
isAuthenticated(){
  return this.isLoggedIn
}

  postBHKVariant(bhkForm:any){
    return this.httpClient.post(this.url + "postBhkVariantinDB",bhkForm )
  }

  getAllVaraintofProject(id:any){
    return this.httpClient.post(this.url + "getAllBhkVarinatbyID",{"projectID":id} )
  }
  deleteSpecificVariant(id:any){
    return this.httpClient.post(this.url + "deleteBhkVariantfromDB",{"_id":id} )
  }
 }


