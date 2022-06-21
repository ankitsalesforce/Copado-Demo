import { LightningElement, wire } from 'lwc';
import {getRelatedListRecords} from 'lightning/uiRelatedListApi';

export default class GetRelatedListRecord_SP22 extends LightningElement {
    relatedListInfo;

    @wire(getRelatedListRecords,{
        parentRecordId:'0012y000007a55LAAQ',
        relatedListId:'Contacts',
        fields:['Contact.Name','Contact.Id'] //opaional fields
    })RelatedListRecord({data,error}){
        if(data){
            console.log(JSON.stringify(data))
            this.relatedListInfo = data.records
        }
        if(error){
            console.error(error)
        }
    }
}