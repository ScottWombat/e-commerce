import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState }from 'src/store'
import type { AppDispatch,store } from './index';
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

