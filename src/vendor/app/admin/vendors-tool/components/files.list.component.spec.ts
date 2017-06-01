import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilesListComponent } from './files.list.component';
import { MaterialModule } from '@angular/material';

describe('FilesListComponent', () => {
  let component: FilesListComponent;
  let fixture: ComponentFixture<FilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilesListComponent],
      imports: [BrowserAnimationsModule, MaterialModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

