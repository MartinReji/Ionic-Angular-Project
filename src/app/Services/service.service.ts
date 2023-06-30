import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public afs:AngularFirestore) { }
  adminlogin(username: any, password: any) {
    return this.afs.collection('collection_adminlogin', (ref) => ref.where("username", "==", username).where("password", "==", password))
      .valueChanges({ idField: "collection_adminloginId" });
  }

  AddType(TypeData: any) {
    const TypeDatas = JSON.parse(JSON.stringify(TypeData));
    return this.afs.collection("collection_connectiontypes").add(TypeDatas);
  }

  deletetype(typeId: string)
  {
    return this.afs.doc("collection_connectiontypes/" +typeId).delete();
  }

  gettype()
  {
    const type = this.afs.collection("collection_connectiontypes").valueChanges({ idField: "collection_connectiontypesId" });
    return type;
  } 
  
  gettypebyid(requestid: any) {
    const requestData = this.afs.doc<any>("collection_connectiontypes/" + requestid).valueChanges();
    return requestData;
  }

  edittype(typeId: string,Typedetails: any){

    return this.afs.doc("collection_connectiontypes/" +typeId).update(Typedetails);
  }

  getdistrict()
  {
    const district = this.afs.collection("collection_district").valueChanges({ idField: "collection_districtId" });
    return district;
  } 

  AddPanchayath(PanchayathData: any) {
    const PanchayathDatas = JSON.parse(JSON.stringify(PanchayathData));
    return this.afs.collection("collection_panchayath").add(PanchayathDatas);
  }

  getpanchayath()
  {
    const panchayath = this.afs.collection("collection_panchayath").valueChanges({ idField: "collection_panchayathId" });
    return panchayath;
  }
  getpanchayathbydistrict(district:any){
    const panchayath = this.afs.collection('collection_panchayath', (ref) => ref.where("districtname", "==", district))
    .valueChanges({ idField: "collection_panchayathId" });
    return panchayath;
  }

  deletepanchayath(panchayathId: string)
  {
    return this.afs.doc("collection_panchayath/" +panchayathId).delete();
  }

  AddCustomer(CustomerData: any) {
    const CustomerDatas = JSON.parse(JSON.stringify(CustomerData));
    return this.afs.collection("collection_consumer").add(CustomerDatas);
  }

  consumerlogin(email: any, password: any) {
    return this.afs.collection('collection_consumer', (ref) => ref.where("email", "==", email).where("password", "==", password))
      .valueChanges({ idField: "collection_consumerId" });
  }

  getprofile() {
    const profile = this.afs.doc<any>('collection_consumer/' + localStorage.getItem("consumerId", ))
      .valueChanges({ idField: "collection_consumerId" });
    return profile;
    }

  editdetails(Consumerdetails: any){

    return this.afs.doc("collection_consumer/" + localStorage.getItem("consumerId", )).update(Consumerdetails);
  }

  AddConnection(ConnectionData: any) {
    const ConnectionDatas = JSON.parse(JSON.stringify(ConnectionData));
    return this.afs.collection("collection_newconnection").add(ConnectionDatas);
}

getrequest(){
  const request = this.afs.collection('collection_newconnection', (ref) => ref.where("status", "==", "Pending"))
  .valueChanges({ idField: "collection_newconnectionId" });
  return request;
}

getdetailsbyid(consumerId:any){
  const details = this.afs.doc<any>('collection_consumer/' + consumerId)
  .valueChanges({ idField: "collection_consumerId" });
return details;
}

acceptrequest(requestId: any) {
  
  return this.afs.doc("collection_newconnection/" + requestId).update({status:"Accepted"});
  }
numberupdate(requestId: any,consumerno:any) {
  
  return this.afs.doc("collection_newconnection/" + requestId).update({consumernumber:consumerno});
  }

  rejectrequest(requestId: any) {
 
    return this.afs.doc("collection_newconnection/" + requestId).update({status:"Rejected"});
  }

  getnewconnectionbyid(newconnectionid : any) {
    const data = this.afs.doc<any>('collection_newconnection/' + newconnectionid)
      .valueChanges({ idField: "collection_newconnectionId" });
    return data;
  }

  getmyconnection(){
    const connectiondata = this.afs.collection('collection_newconnection', (ref) => ref.where("status", "==", "Accepted").where("consumerid", "==",  localStorage.getItem("consumerId")))
    .valueChanges({ idField: "collection_newconnectionId" });
    return connectiondata;
  }

  consumernogen() {
    return this.afs.collection('collection_newconnection',(ref) => ref.where("status", "==", "Accepted"))
    .valueChanges({ idField: "collection_newconnectionId" });
  }

  getregectedconnection(){
    const connectiondata = this.afs.collection('collection_newconnection', (ref) => ref.where("status", "==", "Rejected").where("consumerid", "==",  localStorage.getItem("consumerId")))
    .valueChanges({ idField: "collection_newconnectionId" });
    return connectiondata;
  }

  getpendingconnection(){
    const connectiondata = this.afs.collection('collection_newconnection', (ref) => ref.where("status", "==", "Pending").where("consumerid", "==",  localStorage.getItem("consumerId")))
    .valueChanges({ idField: "collection_newconnectionId" });
    return connectiondata;
  }

  getdetailsbyconsno(consno:any){
    const consdetails = this.afs.collection('collection_newconnection', (ref) => ref.where("consumernumber", "==", consno))
    .valueChanges({ idField: "collection_newconnectionId" });
    return consdetails;
  }

  getmonthelydetaisbyconsno(consumernumber:any,month:any,year:any)
  {
    console.log(month);
    console.log(year);
    console.log(consumernumber);


    const consdetails = this.afs.collection('collection_monthlyreading', (ref) => ref
    .where("consumernumber", "==", consumernumber)
    .where("month", "==", parseInt(month))
    .where("year", "==", parseInt(year))
    )
    .valueChanges({ idField: "collection_monthlyreadingId" });
    return consdetails;
  }

  gettypebytypename(typename:any)
  {
    const type = this.afs.collection("collection_connectiontypes", (ref) => ref.where("typename", "==", typename)).valueChanges({ idField: "collection_connectiontypesId" });
    return type;
  } 

  AddMonthlyreading(ReadingData: any) {
    const ReadingDatas = JSON.parse(JSON.stringify(ReadingData));
    return this.afs.collection("collection_monthlyreading").add(ReadingDatas);
}

getconsumernobyid(consumerid:any){
  const connectiondata = this.afs.collection('collection_newconnection', (ref) => ref.where("status", "==", "Accepted").where("consumerid", "==", consumerid ))
  .valueChanges({ idField: "collection_newconnectionId" });
  return connectiondata;
}

getmonthlyreading(status:any,consumerno:any){
  const readingdata = this.afs.collection('collection_monthlyreading', (ref) => ref.where("paymentstatus", "==", status).where("consumernumber", "==", consumerno ))
  .valueChanges({ idField: "collection_monthlyreadingId" });
  return readingdata;
}

getreadingbyid(readindId:any){
  const readingdetails = this.afs.doc<any>('collection_monthlyreading/' + readindId)
  .valueChanges({ idField: "collection_monthlyreadingId" });
return readingdetails;
}

statusupdate(requestId: any) {
  
  return this.afs.doc("collection_monthlyreading/" + requestId).update({paymentstatus:"Completed"});
  }

  AddDate(requestId: any,date: any) 
  {
    return this.afs.doc("collection_monthlyreading/" + requestId).update({paymentdate:date});
  }
  
  getdetailsbypanchayat(panchayath:any,type:any,fdate:any,tdate:any){
    const consdetails = this.afs.collection('collection_newconnection', (ref) => ref
    .where("panchayathname", "==", panchayath)
    .where("status", "==", 'Accepted' )
    .where("typename", "==", type )
    .where("requestdate", "<=", tdate)
    .where("requestdate", ">=",fdate  ))
    .valueChanges({ idField: "collection_newconnectionId" });
    return consdetails;
  }

  // getconsnobypanchayat(panchayath:any){
  //   const consdetails = this.afs.collection('collection_newconnection', (ref) => ref
  //   .where("panchayathname", "==", panchayath)
  //   .where("status", "==", 'Accepted' ))
  //   .valueChanges({ idField: "collection_newconnectionId" });
  //   return consdetails;
  // }
  // getpendingbyconsno(consumerno:any){
  //   const readingdata = this.afs.collection('collection_monthlyreading', (ref) => ref.where("paymentstatus", "==", 'Pending').where("consumernumber", "==", consumerno ))
  //   .valueChanges({ idField: "collection_monthlyreadingId" });
  //   return readingdata;
  // }

  getpendingpayment(month:any,year:any)
  {
    console.log(month);
    console.log(year);


    const pendingdetails = this.afs.collection('collection_monthlyreading', (ref) => ref
    .where("paymentstatus", "==", 'Pending')
    .where("month", "==", parseInt(month))
    .where("year", "==", parseInt(year))
    )
    .valueChanges({ idField: "collection_monthlyreadingId" });
    return pendingdetails;
  }
  
  getbilldetails(billid:any){
    console.log(billid);
    const billdetails = this.afs.doc<any>('collection_monthlyreading/' + billid)
    .valueChanges({ idField: "collection_monthlyreading" });
  return billdetails;
  }
}
