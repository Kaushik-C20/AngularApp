import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  isdestrindexneeded = false;
  ismodindexneeded = false;
  isChangeneeded = false;
  
  // Accessing a template Element like InputHtml value using below line
  @ViewChild('newName', { static: false }) serverNewName: ElementRef;
  @ViewChild('newContent', { static:false }) servernewContent: ElementRef;
  index:string;  
  // index checking
  check_changeNum(){
    if(this.serverElements.length > 0){
        this.isdestrindexneeded = false;
        this.ismodindexneeded = true;
    }else{
      alert("No Elements to modify!");
    }
  }
  check_DestNum(){
    if(this.serverElements.length > 0){
        this.ismodindexneeded = false;
        this.isdestrindexneeded = true;
    }else{
      alert("No Elements to Destroy!");
    }
  }

  modAct(){
    this.isChangeneeded = true;
    this.ismodindexneeded = false;
    this.isdestrindexneeded = false;
  }

  destAct(){
    if((Number(this.index) <= this.serverElements.length)&&(Number(this.index) > 0)){
        this.serverElements.splice(Number(this.index)-1, 1);
    }
    else{
        alert("Try Again and Enter a Valid Index (1 - MaxNum)");
    }
    this.isChangeneeded = false;
    this.ismodindexneeded = false;
    this.isdestrindexneeded = false;
    this.index = '';
  }

  ChangeEl() {
    if((Number(this.index) <= this.serverElements.length)&&(Number(this.index) > 0)){
      this.serverElements[Number(this.index)-1].name = this.serverNewName.nativeElement.value;
      this.serverElements[Number(this.index)-1].content = this.servernewContent.nativeElement.value;
    }
    else{
      alert("Try Again and Enter a Valid Index (1 - MaxNum)");
    }
    this.isChangeneeded = false;
    this.ismodindexneeded = false;
    this.isdestrindexneeded = false;
    this.index = '';
  }

}
