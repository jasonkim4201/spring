import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create login tags', () => {
    expect(compiled.querySelectorAll('.login')).toBeTruthy();
  });

  it('should create label for username', () => {
    expect(compiled.querySelector('#label__username').textContent).toContain('username');
  });

  it('should create label for password', () => {
    expect(compiled.querySelector('#label__password').textContent).toContain('password');
  });

});
