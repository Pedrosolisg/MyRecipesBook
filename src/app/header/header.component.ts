import { Component /*, EventEmitter, Output*/ } from '@angular/core';
import { Response } from '@angular/http';
import { ServerService } from '../shared/server.service';

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
        this.serverService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.serverService.getRecipes();
    }
}
