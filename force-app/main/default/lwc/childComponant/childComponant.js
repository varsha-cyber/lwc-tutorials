import { LightningElement  } from 'lwc';

export default class ChildComponant extends LightningElement {
 
    handleChange(event)
    {
        const name=this.target.event
        const selectEvent=new CustomEvent('mycustomevent',{detail:name});
        this.dispatchEvent(selectEvent)

    }
}