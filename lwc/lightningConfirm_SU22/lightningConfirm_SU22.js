import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm'
export default class LightningConfirm_SU22 extends LightningElement {

    callConfirm(){
        LightningConfirm.open({
            message:"Are you sure to refresh this current page ?",
            theme:"warning",
            label:"Refresh Confirmation"
            //variant:"headerless",

        }).then((result)=>{
            console.log('result >> ',result)
            location.reload();
        })
    }
}