import { Component /*, EventEmitter, Output*/ } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }
    constructor(private serverService: ServerService) {}
    onSaveData() {
        this.serverService.saveData(this);
    }
}
