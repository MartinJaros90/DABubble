import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from '../workspace/childs/chat/chat.component';
import {DevspaceComponent} from '../workspace/childs/devspace/devspace.component';
import {ThreadComponent} from '../workspace/childs/thread/thread.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';

@Component({
    standalone: true,
    selector: 'app-workspace',
    imports: [CommonModule, ChatComponent, DevspaceComponent, ThreadComponent, HeaderComponent],
    templateUrl: './workspace.component.html',
    styleUrl: './workspace.component.scss',
})
export class WorkspaceComponent {
    isThreadVisible = true;
    isDevspaceVisible = true;
    isMobileView = false;

    constructor() {
        this.checkScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.checkScreenSize();
    }

    checkScreenSize() {
        this.isMobileView = window.innerWidth <= 768;

        // Optional: Automatically hide devspace on mobile if desired
        // if (this.isMobileView) {
        //   this.isDevspaceVisible = false;
        // }
    }

    toggleThread() {
        this.isThreadVisible = !this.isThreadVisible;
    }

    toggleDevspace() {
        this.isDevspaceVisible = !this.isDevspaceVisible;
    }

    getChatClasses(): string {
        const classes = ['chat'];
        if (!this.isThreadVisible) classes.push('thread-hidden');
        if (!this.isDevspaceVisible) classes.push('devspace-hidden');
        if (!this.isThreadVisible && !this.isDevspaceVisible)
            classes.push('both-hidden');
        if (this.isMobileView) classes.push('mobile-view');
        return classes.join(' ');
    }

    openChannelDialog(event: Event) {
        console.log('Channel Dialog öffnen');
    }

    getWorkspaceMenuText(): string {
        return this.isDevspaceVisible
            ? 'Workspace-Menü schließen'
            : 'Workspace-Menü öffnen';
    }
}
