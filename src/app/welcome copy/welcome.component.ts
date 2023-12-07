import { Component } from '@angular/core';
import { UserService } from '../user.service';

import { I18n } from 'aws-amplify';
import * as $ from 'jquery' 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  I18n = I18n;
  container: any;

  constructor(public userService: UserService) {

  }

  async ngOnInit() {
    const container = document.querySelector('.all') as any;
    this.container = container;
    //const h = this.createHeart()
    //console.log(h);
    console.log(this)


    //const love = setInterval(this.addHeart.bind(this), 500);
  





/*
    $( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")  
});
*/
var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

   // $('.bg_heart').append("<div class='heartz' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

   // $('.bg_heart').append("<div class='heartz' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");


    //$('.bg_heart').append("<div class='heartz'></div>");
    
    
    
    const heart = document.createElement('div');
    heart.classList.add('heartz');
    heart.style.display = "block";
    container.appendChild(heart);
    
    
    
    
    $('.heartz').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '') as unknown as number;
        var width = $(this).css("width").replace(/[^-\d\.]/g, '') as unknown as number;
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
    
}, 500);






  }




  removeHearts(): void {
    const hearts = this.container.querySelectorAll('.hearty');
    console.log(hearts);
    hearts.forEach((heart: any) => {
      const top = parseFloat(getComputedStyle(heart).getPropertyValue('top'));
      const width = parseFloat(getComputedStyle(heart).getPropertyValue('width'));
      if (top <= -100 || width >= 150) {
        heart.remove();
      }
    });
  }

  addHeart(): void {
    const heart1 = this.createHeart();
    const heart2 = this.createHeart();
    this.container.appendChild(heart1);
    this.container.appendChild(heart2);
    setTimeout(this.removeHearts.bind(this), 1000);
  }

  
  createHeart(): any {
    const heart = document.createElement('div');
    heart.classList.add('heartx');
    heart.style.width = `${Math.floor(Math.random() * 65) + 10}px`;
    heart.style.height = heart.style.width;
    heart.style.left = `${Math.floor(Math.random() * 100) + 1}%`;
    heart.style.background = `rgba(255, ${Math.floor(Math.random() * 25) + 100 - 25}, ${Math.floor(Math.random() * 25) + 100}, 1)`;
    const duration = Math.floor(Math.random() * 5) + 5;
    heart.style.animation = `love ${duration}s ease`;
    return heart;
  }


  openUp(): void {
    console.log('here')
    const $opentop= document.querySelector('#opentop') as any;
    const $top= document.querySelector('#top') as any;
    const $front= document.querySelector('#front') as Element;
    const $back= document.querySelector('#back') as Element;
    const $letter= document.querySelector('#letter') as any;
    const $button= document.querySelector('#open') as any;
    const $hearts= document.querySelector('#hearts') as any;
    
    $button.style.display = "none";
    $opentop.beginElement();
    
    $top.style.zIndex = 2;

    $letter.style.display = "flex";
    $hearts.style.display = "block";

    
    $top.classList.add('animate');
    $front.classList.add('animate');
    $back.classList.add('animate');
    $button.classList.add('animate');
    $letter.classList.add('animate');
    console.log('done')
    
    
  }



}
