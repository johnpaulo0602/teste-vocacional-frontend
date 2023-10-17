import { Session } from './session.interface';

export interface UserCommon {
    _id: ObjectId;
    name: string;
    email: string;
    typeUser?: TypeUser;
}

export interface User extends UserCommon {
    password: string;
}

export interface Participant extends UserCommon {
    phone: string;
    /* @TODO: check is necessary this information */
    // state: string;
    // city: string;
    // scholarship: string;
    // university: string;
}

export interface ParticipantSession extends Participant, Session {}

export enum TypeUser {
    ADM_USER = 'adm',
    PARTICIPANT = 'participant',
}