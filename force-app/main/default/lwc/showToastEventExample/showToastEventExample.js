import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ShowToastEventExample extends LightningElement {

    handleSuccess(){
        const showSucess=new ShowToastEvent({
            title:'Sucess!',
            message:'This is Success Message',
            variant:'Success',
        });
        this.dispatchEvent(showSucess);
    }

    handleError(){
        const showError=new ShowToastEvent({
            title:"Error!",
            message:"This is Error Message",
            variant:"Error",
        });
        this.dispatchEvent(showError);
    }


    handleWarning(){
        const showWarning=new ShowToastEvent({
            title:"Warning!",
            message:"This is Warning Message",
            variant:"Warning",
        });
        this.dispatchEvent(showWarning);
    }

    handleinfo(){
        const showInfo=new ShowToastEvent({
            title:"Info!",
            message:"This is Info Message",
            variant:"Info",
        });
        this.dispatchEvent(showInfo);
    }
}
