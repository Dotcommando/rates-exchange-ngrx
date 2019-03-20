import { Action } from '@ngrx/store';
import { IXMLDateArray } from '../../interfaces/xml.interface';

export enum ActionTypes {
  LOAD_REQUEST = '[RATES] Load Request',
  LOAD_FAILURE = '[RATES] Load Failure',
  LOAD_SUCCESS = '[RATES] Load Success',
  SELECT_RATE = '[RATES] Select Item'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: IXMLDateArray }) {}
}

export class SelectTaskAction implements Action {
  readonly type = ActionTypes.SELECT_RATE;
  constructor(public payload: { selectedId: number | null }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction | SelectTaskAction;

