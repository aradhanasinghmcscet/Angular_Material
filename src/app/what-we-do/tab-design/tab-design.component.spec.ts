import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDesignComponent } from './tab-design.component';

describe('TabDesignComponent', () => {
  let component: TabDesignComponent;
  let fixture: ComponentFixture<TabDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
