import { TestBed } from '@angular/core/testing';

import { ShowSplashGuard } from './show-splash.guard';

describe('ShowSplashGuard', () => {
  let guard: ShowSplashGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowSplashGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
