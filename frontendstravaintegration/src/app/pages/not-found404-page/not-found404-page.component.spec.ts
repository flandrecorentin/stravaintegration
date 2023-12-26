import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound404PageComponent } from './not-found404-page.component';

describe('NotFound404PageComponent', () => {
  let component: NotFound404PageComponent;
  let fixture: ComponentFixture<NotFound404PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFound404PageComponent]
    });
    fixture = TestBed.createComponent(NotFound404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
