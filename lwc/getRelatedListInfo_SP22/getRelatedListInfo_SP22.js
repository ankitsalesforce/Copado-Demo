import { LightningElement,wire } from 'lwc';
import {getRelatedListInfo} from 'lightning/uiRelatedListApi'

export default class GetRelatedListInfo_SP22 extends LightningElement {

    relatedListData;

    @wire(getRelatedListInfo,{
        parentObjectApiName:'Account' ,//this call be parent obj name that you want to see related list info
        relatedListId:'Contacts',
        //recordTypeId:'' //optional
    })RelatedListInfo({data,error}){
        if(data){
            console.log(JSON.stringify(data))
            this.relatedListData = data.displayColumns
        }
        if(error){
            console.error(error)
        }
    }
}