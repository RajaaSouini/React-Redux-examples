import { createSelector } from "reselect";

export const SelectAllUsers = (state) => state.users ;

export const selectClientByusers = (name) =>
    createSelector([SelectAllUsers], (users) =>
        users.filter((user) => user.name === name)
    );