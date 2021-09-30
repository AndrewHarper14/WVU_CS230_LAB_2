import { Component, OnInit } from "@angular/core";
import { mock_card } from "./mock-cards";
import { Card } from "./card.model";

@Component({
    selector: "ecampus-one",
    templateUrl: "b-one.component.html"
})
export class OneComponent implements OnInit {
    cards: Card [] = [];
    ngOnInit(): void {
        for (var card of mock_card) {
            this.cards.push(new Card(card))
        }
    }
}