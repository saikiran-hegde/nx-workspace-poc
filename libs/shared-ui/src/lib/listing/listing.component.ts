import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-workspace-poc-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  @Input() title: string = '';
  @Input() columnNames: string[] = [];
  @Input() dataSource: any[] = [];
}
