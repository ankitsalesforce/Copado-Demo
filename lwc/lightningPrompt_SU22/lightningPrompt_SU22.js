import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';
import LightningAlert from 'lightning/alert';

export default class LightningPrompt_SU22 extends LightningElement {

    callPrompt(){
        const result = LightningPrompt.open({
            message:"Please enter your age?",
            label:"check your voting eligiblity",
            theme:"success"
        }).then((result)=>{
            if(result && Number(result) > 18){
                this.callAlert("Congrats..!!, You are eligible","Success","success")
                console.log('Congrats..!!, You are eligible')
            }else{
                this.callAlert("Sorry You are not eligible","Info","error")
                console.log('Sorry You are not eligible')
            }
            
        })

        
    }

    callAlert(message,label,theme){
        LightningAlert.open({
            message,
            label,
            theme
        })
    }

    // async callPrompt(){
    //     const result = await LightningPrompt.open({
    //         message:"Please enter your age?",
    //         label:"Prompt - Label"
    //     })
    //         console.log('result >> ' ,result)
        

        
    // }
}