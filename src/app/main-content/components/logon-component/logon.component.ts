import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-logon',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './logon.component.html',
    styleUrl: './logon.component.scss'
})
export class LogonComponent {
}
