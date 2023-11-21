import { Component } from '@angular/core';
import { APIService, Question } from '../API.service';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  I18n = I18n;

  public faqList: Array<Question> = [];

  constructor(public api: APIService) {


  }


  ngOnInit(): void {
    this.api.ListQuestions().then(value => {
      this.faqList = value.items as Question[];
    });
  }


}
