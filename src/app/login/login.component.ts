import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'practice';
  constructor(private router: Router){}


   ngOnInit(){ }



  showMsg=true;    //displays the message only if showmsg =true
  //showMsg=false;   doesn't display the message as it is fals
  colorName='green';


  viewmsg=true;

  showvalue=false;
  Ifblock=true
  //switch statement

  //switchvalue=0;       prints default output i,e; when no condition mtch execute the "defaultswitch"
  //switchvalue=1;       //prints output 1  output depends on the value provuserided
  switchvalue='three';    //prints output Three


//dynamically passing the data

users=[
  {userid:1, firstname: 'ionic'},
  {userid:2, firstname: 'bootstrap'},    // key-value pair
  {userid:3, firstname: 'angular'},
  {userid:4, firstname: 'html'},
  {userid:5, firstname: 'json'},
  {userid:6, firstname: 'jquey'},
  {userid:7, firstname: 'react'}
];

 readme(){
   console.log('button clicked')
 }
 onsubmit(){
  this.router.navigate(['/tasks'])
  console.log('button clicked')


 }
 colorval = 'blue'; // ngStyle
 clsone = 'onecls';  //ngClass
 clstwo='two';   //ngClass

 //data binding --- interpolation concept

 subtitle = 'Its fun to learn Interpolation';
 episode = 17;

 user = {
   userid: 201,
   username: 'ABC',
   status: 'Active'
 };

 //data binding--- property binding concept

    linecolor = 'red';
    Clsname = 'c1';
    placeholderval = 'Enter the value';
    title1 = 'propert binding';


}
