import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateContactLds extends LightningElement {
    @track contactName;
    @track contactPhone;
    @track contactEmail;

    contactNameChangehandler(event){

                 this.contactName=event.target.value;

    }
    contactPhoneChangehandler(event){

        this.contactPhone=event.target.value;

}
contactEmailChangehandler(event){

    this.contactEmail=event.target.value;

}
createContact(){

    const fields={'LastName':this.contactName,'Phone':this.contactPhone,'Email':this.contactEmail};
    const recordInput={apiName:'Contact',fields};
    createRecord(recordInput).then(Response=>{
        console.log('contact has been create successfully',response.id);
    }).catch(error=>{
        console.log('error in creating record',error.body.message);
    });
}

}