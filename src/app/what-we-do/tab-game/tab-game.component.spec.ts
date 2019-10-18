import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGameComponent } from './tab-game.component';

describe('TabGameComponent', () => {
  let component: TabGameComponent;
  let fixture: ComponentFixture<TabGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
