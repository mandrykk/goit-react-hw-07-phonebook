import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactOperations from './phonebook-operation';

const phonebook = createReducer([], {
    [contactOperations.fetchContacts.fulfilled]: (_, action) => action.payload,
    [contactOperations.addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [contactOperations.deleteContact.fulfilled]: (state, { payload }) => state.filter(({id})=> id !==payload.id)
});

const filter = createReducer('', {
    [contactOperations.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
    phonebook,
    filter
});