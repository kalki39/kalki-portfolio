import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Angular",percent:90,remark:'excellent'}, {name:"Javascript",percent:90,remark:'excellent'},{name:"Typescript",percent:90,remark:'excellent'},{name:"Ionic",percent:70,remark:'very-good'}, {name:"Java", percent:60,remark:'good'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Vscode, Intelij",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql,MongoDb",percent:90,remark:'excellent'}],
    methodologies:[{name:"Responsive Design",percent:90,remark:'excellent'},{name:"Design Thinking",percent:90,remark:'excellent'},{name:"Agile",percent:90,remark:'excellent'},{name:"Scrum",percent:70,remark:'very-good'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
