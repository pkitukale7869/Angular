import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkComponentComponent } from './sk-component.component';

describe('SkComponentComponent', () => {
  let component: SkComponentComponent;
  let fixture: ComponentFixture<SkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
