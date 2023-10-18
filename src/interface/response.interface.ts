import { Group, QuestionGroup, TypeResponse } from './question.interface';

export interface ResponseQuestions {
    _id: string;
    /**
     * Hash to identify what session is this response
     */
    sessionHash: string;
    /**
     * identity what group is this response
     */
    group: Group;
    /**
     * alternative selected by user
     */
    response: TypeResponse;
    /**
     * what subgroup is this response
     */
    questionGroup: number;
}

export interface ResponseFinal {
    [key: Group]: {
        counterResponse: number;
    };
}