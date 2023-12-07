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
    


      var body = $("body"),
          universe = $("#universe"),
          solarsys = $("#solar-system");
    
      var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
          $(this).removeClass('hide-UI').addClass("set-speed");
          $(this).dequeue();
        });
      };
    
      var setView = function(view: any) { universe.removeClass().addClass(view); };
    
      $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
      });
    
      $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
      });
    
      $("#data a").click(function(e) {
        var ref = $(this).attr("class") as any;
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
      });
    
      $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
      $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
      $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
      $(".set-size").click(function() { setView("scale-s set-size"); });
      $(".set-distance").click(function() { setView("scale-d set-distance"); });
    
      init();
    





      var settings = {
        particles: {
          length:   1000, // maximum amount of particles
          duration:   8, // particle duration in sec
          velocity: 10, // particle velocity in pixels/sec
          effect: 4.0, // play with this for a nice effect
          size:      18, // particle size in pixels
        },
      };

      /*
 * Point class
 */
var Point = (function() {
  function Point(x, y) {
    this.x = (typeof x !== 'undefined') ? x : 0;
    this.y = (typeof y !== 'undefined') ? y : 0;
  }
  Point.prototype.clone = function() {
    return new Point(this.x, this.y);
  };
  Point.prototype.length = function(length) {
    if (typeof length == 'undefined')
      return Math.sqrt(this.x * this.x + this.y * this.y);
    this.normalize();
    this.x *= length;
    this.y *= length;
    return this;
  };
  Point.prototype.normalize = function() {
    var length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  };
  return Point;
})();
/*
 * Particle class
 */
var Particle = (function() {
  function Particle() {
    this.position = new Point(null, null);
    this.velocity = new Point(null, null);
    this.acceleration = new Point(null, null);
    this.age = 0;
  }
  Particle.prototype.initialize = function(x, y, dx, dy) {
    this.position.x = x;
    this.position.y = y;
    this.velocity.x = dx;
    this.velocity.y = dy;
    this.acceleration.x = dx * settings.particles.effect;
    this.acceleration.y = dy * settings.particles.effect;
    this.age = 0;
  };
  Particle.prototype.update = function(deltaTime) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += this.acceleration.y * deltaTime;
    this.age += deltaTime;
  };
  Particle.prototype.draw = function(context, image) {
    function ease(t) {
      return (--t) * t * t + 1;
    }
    var size = image.width * ease(this.age / settings.particles.duration);
    context.globalAlpha = 1 - this.age / settings.particles.duration;
    context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
  };
  return Particle;
})();
/*
 * ParticlePool class
 */
var ParticlePool = (function() {
  var particles,
      firstActive = 0,
      firstFree   = 0,
      duration    = settings.particles.duration;
 
  function ParticlePool(length) {
    // create and populate particle pool
    particles = new Array(length);
    for (var i = 0; i < particles.length; i++)
      particles[i] = new Particle();
  }
  ParticlePool.prototype.add = function(x, y, dx, dy) {
    particles[firstFree].initialize(x, y, dx, dy);
   
    // handle circular queue
    firstFree++;
    if (firstFree   == particles.length) firstFree   = 0;
    if (firstActive == firstFree       ) firstActive++;
    if (firstActive == particles.length) firstActive = 0;
  };
  ParticlePool.prototype.update = function(deltaTime) {
    var i;
   
    // update active particles
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++)
        particles[i].update(deltaTime);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].update(deltaTime);
      for (i = 0; i < firstFree; i++)
        particles[i].update(deltaTime);
    }
   
    // remove inactive particles
    while (particles[firstActive].age >= duration && firstActive != firstFree) {
      firstActive++;
      if (firstActive == particles.length) firstActive = 0;
    }
   
   
  };
  ParticlePool.prototype.draw = function(context, image) {
    // draw active particles
    var i;
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++)
        particles[i].draw(context, image);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].draw(context, image);
      for (i = 0; i < firstFree; i++)
        particles[i].draw(context, image);
    }
  };
  return ParticlePool;
})();
/*
 * Putting it all together
 */
(function(canvas: any) {
  var context = canvas.getContext('2d'),
      particles = new ParticlePool(settings.particles.length),
      particleRate = settings.particles.length / settings.particles.duration, // particles/sec
      time;
 
  // get point on heart with -PI <= t <= PI
  function pointOnHeart(t) {
    return new Point(
      200 * Math.pow(Math.sin(t), 3),
      160 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
    );
  }
 
  // creating the particle image using a dummy canvas
  var image = (function() {
    var canvas  = document.createElement('canvas'),
        context = canvas.getContext('2d');
    canvas.width  = settings.particles.size;
    canvas.height = settings.particles.size;
    // helper function to create the path
    function to(t) {
      var point = pointOnHeart(t);
      point.x = settings.particles.size / 2 + point.x * settings.particles.size / 350;
      point.y = settings.particles.size / 2 - point.y * settings.particles.size / 350;
      return point;
    }
    // create the path
    context.beginPath();
    var t = -Math.PI;
    var point = to(t);
    context.moveTo(point.x, point.y);
    while (t < Math.PI) {
      t += 0.01; // baby steps!
      point = to(t);
      context.lineTo(point.x, point.y);
    }
    context.closePath();
    // create the fill
    context.fillStyle = '#67A7DE';
    context.fill();
    // create the image
    var image = new Image();
    image.src = canvas.toDataURL();
    return image;
  })();
 
  // render that thing!
  function render() {
    // next animation frame
    requestAnimationFrame(render);
   
    // update time
    var newTime   = new Date().getTime() / 1000,
        deltaTime = newTime - (time || newTime);
    time = newTime;
   
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
   
    // create new particles
    var amount = particleRate * deltaTime;
    for (var i = 0; i < amount; i++) {
      var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
      var dir = pos.clone().length(settings.particles.velocity);
      particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
    }
   
    // update and draw particles
    particles.update(deltaTime);
    particles.draw(context, image);
  }
 
  // handle (re-)sizing of the canvas
  function onResize() {
    canvas.width  = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  window.onresize = onResize;
 
  // delay rendering bootstrap
  setTimeout(function() {
    onResize();
    render();
  }, 10);
})(document.getElementById('pinkboard'));


      



    }




  openUp(): void {
    console.log('here')
    const $opentop= document.querySelector('#opentop') as any;
    const $top= document.querySelector('#top') as any;
    const $front= document.querySelector('#front') as Element;
    const $back= document.querySelector('#back') as Element;
    const $letter= document.querySelector('#letter') as any;
    const $button= document.querySelector('#open') as any;
    
    $button.style.display = "none";
    $opentop.beginElement();
    
    $top.style.zIndex = 2;

    $letter.style.display = "flex";

    
    $top.classList.add('animate');
    $front.classList.add('animate');
    $back.classList.add('animate');
    $button.classList.add('animate');
    $letter.classList.add('animate');
    console.log('done')
    
    
  }

}
