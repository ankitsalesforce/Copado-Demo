import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'

export default class LightningAlert_SU22 extends LightningElement {
    theme;

    async callAlert(event){
        //window.alert() we are using this before SU22 as many browser declare that they will not allow to use this method
        console.log('button click >> ' ,event.target.name)
        const {name} = event.target
        // if(event.target.name==="default"){
        //     this.theme=""
        // }
        // if(event.target.name==="success"){
        //     this.theme="success"
        // }
        // if(event.target.name==="warning"){
        //     this.theme="warning"
        // }
        // if(event.target.name==="error"){
        //     this.theme="error"
        // }
        // if(event.target.name==="info"){
        //     this.theme="info"
        // }
        await LightningAlert.open({
            message:"This is alert",
            label:`Alert-${name}`,
            theme:name,
            //variant:"headerless" //to make headerless alert
        })
    // await means, its wait to perform logic inside await functionality.
    //await require async to complete operation
    //once user click on "ok", then controller will move to next logic 
        let x=5;
        let y=2;
        this.add(x,y)
    }

    add(x,y){
        console.log(x+y)
    }
}