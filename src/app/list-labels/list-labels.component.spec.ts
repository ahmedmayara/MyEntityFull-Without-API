import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabelsComponent } from './list-labels.component';

describe('ListLabelsComponent', () => {
  let component: ListLabelsComponent;
  let fixture: ComponentFixture<ListLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
