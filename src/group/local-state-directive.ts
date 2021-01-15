import { Directive, EventEmitter, Output } from '@angular/core';
import { KeyValue } from '../state';

import { Actions } from '../actions';
import { NgrxFormDirective } from './directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'form[ngrxFormState][ngrxFormsAction]',
})
export class NgrxLocalFormDirective<TValue>
  extends NgrxFormDirective<TValue> {

  @Output() ngrxFormsAction = new EventEmitter<Actions<TValue extends KeyValue ? TValue : never>>();

  constructor() {
    super(null);
  }

  protected dispatchAction(action: Actions<TValue extends KeyValue ? TValue : never>) {
    this.ngrxFormsAction.emit(action);
  }
}
