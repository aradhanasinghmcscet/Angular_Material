import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVideoComponent } from './tab-video.component';

describe('TabVideoComponent', () => {
  let component: TabVideoComponent;
  let fixture: ComponentFixture<TabVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
