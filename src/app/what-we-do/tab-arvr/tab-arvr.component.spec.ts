import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabARVRComponent } from './tab-arvr.component';

describe('TabARVRComponent', () => {
  let component: TabARVRComponent;
  let fixture: ComponentFixture<TabARVRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabARVRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabARVRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
