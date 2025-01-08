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

  private url = 'https://homefindr.in/api/';
  //  private url = 'http://localhost:8089/api/';
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

  // poststudio(postData:any){
  //   this.isButtonDisabled=true
  //   console.log(this.isButtonDisabled);
    
  //   this.httpClient.post(this.url + "postPropertyinDB", postData).subscribe(data => {
  //     console.log(data);
  //     console.log("data posted");
  //     this.isButtonDisabled=false
  //     console.log(this.isButtonDisabled);
  //     alert("Data Posted")
  //   })
  
  // }


  uploadImages(images:any,imgsArray:any[],projectName: String){
    
   let imagesUri=imgsArray
   console.log(imagesUri);
    return new Promise((resolve=>{
    console.log("inimg",images);
    for (let i = 0; i < images.length; i++) {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'short' });
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const imgType="Img2Slider"
      const newFileName = `${projectName}_${day}-${month}-${year} ${hours}:${minutes}_${i}_${imgType}`

      const filePath = `${this.basePath}/${newFileName}`;
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

uploadDisplayImages(images:any,imgsArray:any[],projectName: String){
    
  let imagesUri=imgsArray
  console.log(imagesUri);
  
   return new Promise((resolve=>{
   console.log("inimg",images);
   for (let i = 0; i < images.length; i++) {    
     const currentDate = new Date();
     const day = currentDate.getDate();
     const month = currentDate.toLocaleString('default', { month: 'short' });
     const year = currentDate.getFullYear();
     const hours = currentDate.getHours();
     const minutes = currentDate.getMinutes();
     const imgType="Img2Show"
     const newFileName = `${projectName}_${day}-${month}-${year} ${hours}:${minutes}_${i}_${imgType}`

     const filePath = `${this.basePath}/${newFileName}`;
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

removeFilesFromFirebase(images: any): Promise<void> {
  const deletePromises: Promise<void>[] = [];
    console.log(images);
    const filePath = `${this.basePath}/${images.name}`;
    const fileRef = this.storage.ref(filePath);

    // Delete the file and add the promise to the deletePromises array
    const deletePromise = fileRef.delete().toPromise();
    deletePromises.push(deletePromise);

  // Wait for all delete promises to complete
  return Promise.all(deletePromises)
    .then(() => {
      console.log('File deleted successfully.');
    })
    .catch((error) => {
      console.log('Error deleting files:', error);
      throw error;
    });
}

deleteImageByUrl(imageUrl: string): Promise<void> {
  const filePathMatch = imageUrl.match(/\/o\/([^?]+)/);
  if (!filePathMatch || filePathMatch.length < 2) {
    throw new Error('Invalid image URL');
  }

  const filePath = decodeURIComponent(filePathMatch[1]);
  const fileRef = this.storage.ref(filePath);

  return fileRef
    .delete()
    .toPromise()
    .then(() => {
      console.log('Image deleted successfully.');
    })
    .catch((error) => {
      console.log('Error deleting image:', error);
      throw error;
    });
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
  return this.httpClient.post(this.url + "deleteDatafromDB", {"_id":id})
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

  addEmployee(credentials:any){
    return this.httpClient.post(this.url + "addEmployee",credentials )
  }

  changePropStatus(propId:any){
    const url = this.url + 'property/' + propId + '/change-status';
    return this.httpClient.post(url,{});
  }
  
  getAllUserPostedProps(){
    return this.httpClient.get(this.url+"getAllUserPostedProp");
  }

  // ****** STUDIO PROPERTIES API *******//

  getAllStudiofromDB(){
    return this.httpClient.get(this.url + "getAllStudiofromDB",)
  }

  postStudioinDB(property:any){
    return this.httpClient.post(this.url + "postStudioinDB",property)
  }

  updateStudioinDB(propform:any){
    return this.httpClient.put(this.url + "updateStudioinDB",propform)
  }

  deleteStudiofromDB(id:any){
    return this.httpClient.post(this.url + "deleteStudiofromDB",{"_id":id})
  }

// ****** Resale PROPERTIES API *******//
  getresalefromDB(){
    return this.httpClient.get(this.url + "getresalefromDB",)
  }

  postresaleinDB(property:any){
    return this.httpClient.post(this.url + "postresaleinDB",property)
  }

  updateresaleinDB(propform:any){
    return this.httpClient.put(this.url + "updateresaleinDB",propform)
  }

  deleteresalefromDB(id:any){
    return this.httpClient.post(this.url + "deleteresalefromDB",{"_id":id})
  }

 }


