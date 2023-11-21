/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';



Amplify.configure(aws_exports);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  import { I18n } from 'aws-amplify';
import translation_dict from './translation';

//I18n.setLanguage('ko');


I18n.putVocabularies(translation_dict);



