import { Group } from '../interface/question.interface';

export const CareerMock: CareerMock = {
    [Group.GROUP_I]: {
        title: 'Ciências físicas',
        description: 'Queda para o campo das ciências físicas, que abrange profissões como engenharia, física e computação.'
    },
    [Group.GROUP_II]: {
        title: 'Humanas',
        description: 'Tem maior interesse pela área de humanas como direito, psicologia, sociologia, economia e administração.'
    },
    [Group.GROUP_III]: {
        title: 'Biológicas',
        description: 'Mostra interesse pela área de biológicas, ou seja, por medicina, biologia, odotonlogia e etc.'
    },
    [Group.GROUP_IV]: {
        title: 'Domínio das línguas (oral e escrita)',
        description: 'Exibe maior interesse por profissão ligadas ao uso e domínio da língua (oral e escrita), como publicidade, relações públicas, jornalismo, letras e etc.'
    },
    [Group.GROUP_V]: {
        title: 'Atividades artíticas',
        description: 'Tem interesse por atividadse artísticas, como cinema, teatro, música, arquitetura e artes plásticas.'
    }
}

interface CareerMock {
    [key: string]: Career
}

interface Career {
    title: string;
    description: string;
}