import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileComponent } from './file.component';
import { MaterialModule } from '@angular/material';

describe('FilesListComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileComponent ],
      imports: [ MaterialModule ],
        providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
