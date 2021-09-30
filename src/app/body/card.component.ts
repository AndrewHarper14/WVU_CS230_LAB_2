import { Component, Input } from "@angular/core";

@Component({
    selector: 'ecampus-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent {
    @Input()
    title! : string;
    @Input()
    text! : string;
    @Input()
    link! : string;
    @Input()
    image! : string;
}