import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-sign-up',
    imports: [RouterModule, TranslateModule],
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent {}
