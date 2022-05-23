import * as contactAPI from './phonebook-api';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
async (_, { rejectWithValue }) => {
    try {
        const contact = await contactAPI.fetchContacts();
        return contact;
    } catch (error) {
        return rejectWithValue(error);
    }
},
);

export const addContact = createAsyncThunk('contacts/addContact',
async (payload, { rejectWithValue }) => {
    try {
        const contact = await contactAPI.addContacts(payload);
        return contact;
    } catch (error) {
        return rejectWithValue(error);
    }
},
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
async (contactId, { rejectWithValue }) => {
    try {
        const contact = await contactAPI.deleteContacts(contactId);
        return contact;
    } catch (error) {
            return rejectWithValue(error);
        }
    },
);
    
export const filterChange = createAction('contacts/filterChange');