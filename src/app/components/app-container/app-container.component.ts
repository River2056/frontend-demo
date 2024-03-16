import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../appservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetBillRs } from '../../app-container.model';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css',
})
export class AppContainerComponent implements OnInit {
  items: GetBillRs[] = [];
  isAllChecked: boolean = false;
  selectedBills: boolean[] = [];

  printBills: GetBillRs[] = [];

  constructor(private appService: AppserviceService) {}
  ngOnInit(): void {
    this.appService.getBill().subscribe((result: GetBillRs[]) => {
      this.items = result;
      console.log(result);
      this.selectedBills = new Array(result.length).fill(false);
    });
  }

  toggleAll(): void {
    console.log(`this.selectedBills:`, this.selectedBills);
    console.log(typeof this.selectedBills);
    console.log('is array: ' + Array.isArray(this.selectedBills));
    this.isAllChecked = !this.isAllChecked;
    if (this.isAllChecked) {
      const indexes = this.items.map((_: any, i: number) => i);
      console.log(`indexes:`, indexes);
      this.selectedBills = new Array(this.selectedBills.length).fill(true);
    } else {
      this.selectedBills = new Array(this.selectedBills.length).fill(false);
    }
  }

  printSelected(): void {
    console.log(this.selectedBills);
    this.printBills = [];
    this.printBills = this.items.filter((_, i) => this.selectedBills[i]);
  }
}
