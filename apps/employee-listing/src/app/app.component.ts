import { Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employee-listing';
  columnNames = ['id', 'name', 'email'];
  dataSource = [{
    "id": 1,
    "name": "Alyse",
    "email": "alambarth0@rambler.ru"
  }, {
    "id": 2,
    "name": "Budd",
    "email": "bbakster1@1und1.de"
  }, {
    "id": 3,
    "name": "Nikolos",
    "email": "ntripney2@imdb.com"
  }, {
    "id": 4,
    "name": "Kaleena",
    "email": "kciotti3@delicious.com"
  }, {
    "id": 5,
    "name": "Chester",
    "email": "ctippell4@de.vu"
  }, {
    "id": 6,
    "name": "Carney",
    "email": "ctarbert5@businessinsider.com"
  }, {
    "id": 7,
    "name": "Skippy",
    "email": "sleteurtre6@vimeo.com"
  }, {
    "id": 8,
    "name": "Olvan",
    "email": "obartholat7@dedecms.com"
  }, {
    "id": 9,
    "name": "Crystie",
    "email": "cclayworth8@stumbleupon.com"
  }, {
    "id": 10,
    "name": "Kaspar",
    "email": "kbathow9@accuweather.com"
  }, {
    "id": 11,
    "name": "Corbett",
    "email": "cbriknera@squidoo.com"
  }, {
    "id": 12,
    "name": "Hillier",
    "email": "hmilleb@jiathis.com"
  }, {
    "id": 13,
    "name": "Kessia",
    "email": "kupwardc@cpanel.net"
  }, {
    "id": 14,
    "name": "Hewie",
    "email": "handrind@ameblo.jp"
  }, {
    "id": 15,
    "name": "Corbet",
    "email": "chanburye@godaddy.com"
  }, {
    "id": 16,
    "name": "Hayley",
    "email": "hbifordf@nydailynews.com"
  }, {
    "id": 17,
    "name": "Hamil",
    "email": "hfarnieg@independent.co.uk"
  }, {
    "id": 18,
    "name": "Ellie",
    "email": "epartletonh@cafepress.com"
  }, {
    "id": 19,
    "name": "Roanne",
    "email": "rremirezi@rambler.ru"
  }, {
    "id": 20,
    "name": "Kristina",
    "email": "kbahlmannj@slideshare.net"
  }]
}
