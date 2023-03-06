import Dexie from 'dexie';

export const db = new Dexie('studentReactDB');

db.version(1).stores({
    students: `
        id++,
        taskName,
        dueDate,
        assignedTo`,
});