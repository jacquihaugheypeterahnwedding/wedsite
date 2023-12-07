import { Component } from '@angular/core';
import { UserService } from '../user.service';

import { I18n } from 'aws-amplify';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  I18n = I18n;

  welcome: string = "Welcome cherished family and friends! You've stumbled upon the cyber hub of our love story—our wedding website! This is the GitHub repository of our love story, filled with commits of cherished memories, branches of shared dreams, and occasional pull requests for advice (because, hey, love can be as tricky as debugging a complex algorithm!). So, whether you're here to peek at the source code of our romance, debug any wedding jitters, or simply to 'fork' some cake, we’re thrilled to have you part of this adventure. Get ready for an unforgettable 'code merge' as we commit to a lifetime of happiness together!";
  travel: string = "Attention, fellow adventurers from far and wide! If your path to our legendary celebration involves traversing the vast digital highways or braving the interstellar byways, look no further than our Travel Section—an invaluable treasure trove of guidance and wisdom specially crafted for explorers like you! Whether you're navigating through the quantum realms or hitchhiking on a friendly spaceship, our Travel Section is your trusty sidekick, ready to ensure your journey is smoother than debugging a tricky piece of code. Our collection of insider insights and dimension-hopping advice awaits your discovery. Safe travels!";
  story: string = "Scroll through our virtual blueprint of <a href=\"ourstory\">Our Story</a>, witness the structural integrity of our journey, and join us as we revel in the beauty of a perfectly engineered union. Think of this as the interface to our love story, where bytes of laughter, loops of cherished moments, and a sprinkle of binary banter all come together in a beautifully compiled code of memories.";
  faq: string = "Craving knowledge? Venture into our '<a href=\"faq\">FAQ - Fantastic Answers Quest</a>'; your personal 'debugging console' for unraveling life's mysteries. It's where you bring your burning questions, and just like a console, it throws back witty answers instead of error codes.";
  gallery: string = "Our journey has been a symphony of calculated risks, moments perfectly engineered, and a beautiful equation of love that's stood the test of time. Welcome to our pixel-perfect <a href=\"gallery\">gallery</a> of love, unity, and a lifetime of 'syntax errors' turned 'perfect code!'";
  date: string = "Ready to dive into the epic schedule of fun we've cooked up? Head on over to our <a href=\"events\">Events</a> Page for all the juicy details! Let the countdown to the festivities begin! Look out for the main event on April 14th! The day when taxes have to be in and love is in the air—quite the combo, huh? It's like the universe saying, 'Hey, here's a tax deadline and a chance to celebrate love simultaneously!'";
  update: string = "Stay tuned for more tales of love, chaotic planning adventures, and a few surprise plot twists.";

  constructor(public userService: UserService) {

  }

  async ngOnInit() {
    

  }

}
