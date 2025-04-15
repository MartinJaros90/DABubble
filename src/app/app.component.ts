import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {RealtimeDbService} from "./shared/services/realtimeDB/realtime-db.service";
import {PickerModule} from '@ctrl/ngx-emoji-mart';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, PickerModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
})
export class AppComponent implements OnInit {
    showSplash = true;
    private realtimeDbService = inject(RealtimeDbService)
    title: string;

    constructor() {
        this.title = 'DaBubble';
    }

    onAnimationComplete() {
        this.showSplash = false;
    }

    ngOnInit() {
        this.realtimeDbService.trackUserPresence();
    }
}
