import { FormControlState, FormControlValueTypes } from '../../state';
import { Actions, UnfocusAction } from '../../actions';

export function unfocusReducer<TValue extends FormControlValueTypes>(
  state: FormControlState<TValue>,
  action: Actions<TValue>,
): FormControlState<TValue> {
  if (action.type !== UnfocusAction.TYPE) {
    return state;
  }

  if (state.isUnfocused) {
    return state;
  }

  return {
    ...state,
    isFocused: false,
    isUnfocused: true,
  };
}
