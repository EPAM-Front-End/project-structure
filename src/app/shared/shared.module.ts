import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
   faPlus,
   faEdit,
   faTrash,
   faTimes,
   faCaretUp,
   faCaretDown,
   faExclamationTriangle,
   faFilter,
   faTasks,
   faCheck,
   faSquare,
   faLanguage,
   faPaintBrush,
   faLightbulb,
   faWindowMaximize,
   faStream,
   faBook,
   faUserCircle,
   faAsterisk,
   faCircleNotch,
   faAdjust
} from '@fortawesome/free-solid-svg-icons';
import { faMediumM, faGithub } from '@fortawesome/free-brands-svg-icons';

import { ControlMessagesComponent } from './components/control-messages/control-messages.component';

@NgModule({
   imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, FontAwesomeModule, FlexLayoutModule],
   declarations: [ControlMessagesComponent],
   exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModule, FontAwesomeModule, ControlMessagesComponent]
})
export class SharedModule {
   constructor(faIconLibrary: FaIconLibrary) {
      faIconLibrary.addIcons(
         faGithub,
         faMediumM,
         faPlus,
         faEdit,
         faTrash,
         faTimes,
         faCaretUp,
         faCaretDown,
         faExclamationTriangle,
         faFilter,
         faTasks,
         faCheck,
         faSquare,
         faLanguage,
         faPaintBrush,
         faLightbulb,
         faWindowMaximize,
         faStream,
         faBook,
         faUserCircle,
         faAsterisk,
         faCircleNotch,
         faAdjust
      );
   }
}
