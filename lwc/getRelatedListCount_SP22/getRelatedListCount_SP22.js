import { LightningElement,wire } from 'lwc';
import {getRelatedListCount} from 'lightning/uiRelatedListApi';

export default class GetRelatedListCount_SP22 extends LightningElement {
count;

    @wire(getRelatedListCount,{
        parentRecordId:'0012y000007a55LAAQ', //parentRecord ID can ne accountId
        relatedListId:'Contacts' //it can be child object like contact,opportunity 
    })ListRelatedListCount({error,data}){
        if(data){
            this.count = data.count;
            console.log('count >> ' ,this.count)
            console.log(JSON.stringify(data))
        }if(error){
            console.error(error)
        }
    }
}