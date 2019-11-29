import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { dependencies } from './test-dependencies/caliber.test.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(dependencies).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo application'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todo application');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('todo app is running!');
  // });
});
