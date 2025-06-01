import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ImageLogoComponent } from './image-logo.component';
import { IonImg } from '@ionic/angular/standalone';

describe('ImageLogoComponent', () => {
  let component: ImageLogoComponent;
  let fixture: ComponentFixture<ImageLogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ImageLogoComponent, IonImg]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});