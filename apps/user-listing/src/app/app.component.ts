import { Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user-listing';
  columnNames = ['id', 'name', 'company'];
  dataSource = [{
    "id": 1,
    "name": "Alix",
    "company": "Mycat"
  }, {
    "id": 2,
    "name": "Norbert",
    "company": "Oyoba"
  }, {
    "id": 3,
    "name": "Lorrie",
    "company": "Dabshots"
  }, {
    "id": 4,
    "name": "Wilburt",
    "company": "Brainlounge"
  }, {
    "id": 5,
    "name": "Noelyn",
    "company": "Vinte"
  }, {
    "id": 6,
    "name": "Thorsten",
    "company": "Skynoodle"
  }, {
    "id": 7,
    "name": "Iain",
    "company": "Wikibox"
  }, {
    "id": 8,
    "name": "Clevey",
    "company": "Aimbu"
  }, {
    "id": 9,
    "name": "Stephanie",
    "company": "BlogXS"
  }, {
    "id": 10,
    "name": "Arlen",
    "company": "Jabbersphere"
  }, {
    "id": 11,
    "name": "Brant",
    "company": "Dynava"
  }, {
    "id": 12,
    "name": "Tabby",
    "company": "Einti"
  }, {
    "id": 13,
    "name": "Gigi",
    "company": "Topicware"
  }, {
    "id": 14,
    "name": "Roderich",
    "company": "Vipe"
  }, {
    "id": 15,
    "name": "Alejoa",
    "company": "Nlounge"
  }, {
    "id": 16,
    "name": "Sephira",
    "company": "Ozu"
  }, {
    "id": 17,
    "name": "Efrem",
    "company": "Yotz"
  }, {
    "id": 18,
    "name": "Reinhard",
    "company": "Lazz"
  }, {
    "id": 19,
    "name": "Consolata",
    "company": "Skinix"
  }, {
    "id": 20,
    "name": "Ernestus",
    "company": "Divape"
  }];
}
