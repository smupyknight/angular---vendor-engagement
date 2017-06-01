import {
  Component,
  OnDestroy,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

// Core - these two are required :-)
import 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';

// Plugins
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/autoresize/plugin';

declare var tinymce: any;

@Component({
  selector: 'text-editor',
  template: `<textarea id="mytextarea"></textarea>`
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {
  @Output() onEditorClick = new EventEmitter<any>();
  @Input() content: string;

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#mytextarea',
      skin_url: '/tinymce/custom',
      body_class: 'mail',
      content_css: '/tinymce/texteditor.css',
      plugins: ['paste'],
      menubar: false,  // removes the menubar
      toolbar: false, // 'bold italic',
      paste_as_text: true,
      height: '100%',
      min_height: '100vh',
      statusbar: false,
      setup: editor => {
        this.editor = editor;
        editor.on('click', () => {
          this.onEditorClick.emit();
        });
        editor.on('init', () => {
          editor.setContent(this.content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
