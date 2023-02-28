import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppState } from './store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

 // Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector