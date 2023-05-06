import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnterpriseComponent } from './list-enterprise.component';

describe('ListUsersComponent', () => {
  let component: ListEnterpriseComponent;
  let fixture: ComponentFixture<ListEnterpriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEnterpriseComponent]
    });
    fixture = TestBed.createComponent(ListEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
