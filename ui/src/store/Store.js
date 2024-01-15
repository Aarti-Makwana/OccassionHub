import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import venueSlice from './venueSlice';
import DjSlice from './DjSlice';
import DecorationSlice from './DecorationSlice';
import CatererSlice from './CatererSlice';
export default configureStore({
    reducer : {
        userSlice : userSlice,
        venueSlice : venueSlice,
        DjSlice : DjSlice,
        DecorationSlice: DecorationSlice,
        CatererSlice : CatererSlice,
        
    }
});