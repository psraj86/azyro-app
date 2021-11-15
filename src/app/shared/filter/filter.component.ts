import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, AfterViewInit {
  filterForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.createForm();
  }

  ngAfterViewInit() {

  }

  createForm() {
    return this.fb.group({
      fund: new FormControl('-1'),
      sector: new FormControl('-1'),
      scenario: new FormControl('-1'),
      dateRange: new FormControl('-1'),
    })
  }

}
