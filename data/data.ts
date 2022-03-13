import { string } from "prop-types";

export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface IWork {
    title: string;
    logo: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    stack: { name: string; icon: string; }[];
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: string;
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
    current?: boolean;
}

export interface IAward {
    title: string;
    issuer: string;
    location: string;
    logo: string;
    description: string;
    link: string;
    date: string;
}

export interface ILanguage {
    name: string;
    level: string;
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    skills: ISkill[];
    awards: IAward[];
    languages: ILanguage[];
    contact: IContact[];
}

const Resume: IResume = {
    introduction: {
        name: "Carlos Henrique do Nascimento Melo",
        avatar: "./images/avatar.jpg",
        location: "Pernambuco, Brazil",
        description: "Desenvolvedor Fullstack versátil com mais de 3 anos de experiência no desenvolvimento de aplicativos Javascript, Embarcados e Mobile. -- Desenvolvimento e integrações de API RESTful.",
        position: "Fullstack Developer"
    },
    experience: [
        {
            title: 'Fullstack Developer',
            company: 'BaltarTec',
            logo: 'http://baltartec.com.br/imagens/logo_neg.png',
            duration: 'August 2018 - 2020',
            location: 'Barcelona, Spain',
            description: [
            ],
            stack: [
                { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Elixir', icon: './images/elixir.jpeg' },
                { name: 'Phoenix', icon: 'https://cdn.svgporn.com/logos/phoenix.svg' },
                { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },        
                { name: 'Flutter', icon: 'https://cdn.svgporn.com/logos/flutter.svg' },        
                { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },                
                { name: 'Styled Components', icon: './images/styled-components.png' },
            ]
        }
    ],
    education: [
        { name: 'Universidade Federal de Pernambuco', logo: './images/ufpe.jpeg', title: 'Mestrado, INTELIGÊNCIA COMPUTACIONAL', duration: '2020 - presente' },
        { name: 'Udemy', logo: './images/udemy.png', title: 'Do Zero ao Node-Red (Prototipagem rápida)', duration: 'Março 2020', credentialLink: 'https://www.udemy.com/certificate/UC-e44d8d1e-6490-43fa-9b2d-3bb970ec30a4/' },
        { name: 'Universidade Federal de Pernambuco', logo: './images/ufpe.jpeg', title: 'Sistemas de Informações', duration: '2014 - 2019' },
        { name: 'Udemy', logo: './images/udemy.png', title: 'Python Scrapy: Capture Dados Web de forma rápida e escalável', duration: 'Agosto 2019', credentialLink: 'https://www.udemy.com/certificate/UC-8Y4IKM6B/' },
        { name: 'Data Science Academy', logo: './images/DSA.png', title: 'Testes Unitários em Java Utilizando o JUnit', duration: 'Agosto 2019', credentialLink: 'https://mycourse.app/DTSkpv9gdzpZ3QBQ9' },
        { name: 'Udemy', logo: './images/udemy.png', title: 'Testes Unitários em Java Utilizando o JUnit', duration: 'Novembro 2017', credentialLink: 'https://www.udemy.com/certificate/UC-8Y4IKM6B/' },
        { name: 'Escola Técnica Estadual Professor Agamemnon Magalhães', logo: './images/etepam.jpeg', title: 'Tecnico em Manuntenção e Suporte em Informatica', duration: '2011 - 2013'},
    ],
    skills: [
        { name: 'Javascript', icon: 'https://cdn.svgporn.com/logos/javascript.svg', current: true },
        { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg', current: true },
        { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
        { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },
        { name: 'Angularjs', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
        { name: 'Nextjs', icon: 'https://cdn.svgporn.com/logos/nextjs.svg', current: true },
        { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', current: true },
        { name: 'Jest', icon: 'https://cdn.svgporn.com/logos/jest.svg', current: true },
        { name: 'React Testing library', icon: 'https://testing-library.com/img/logo-large.png' },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg', current: true },
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg', current: true },
        { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
        { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg', current: true },
        { name: 'C', icon: 'https://cdn.svgporn.com/logos/c.svg'},
        { name: 'Flutter', icon: 'https://cdn.svgporn.com/logos/flutter.svg', current: true },
        { name: 'Styled Components', icon: './images/styled-components.png' },
        { name: 'JSS', icon: './images/jss.png', current: true },
        { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg' },
        { name: 'Stylus', icon: 'https://cdn.svgporn.com/logos/stylus.svg' },
    ],
    awards: [
    ],
    languages: [
        {
            name: 'English',
            level: 'Iniciante'
        },
        {
            name: 'Português',
            level: 'Nativa'
        }
    ],
    contact: [
        { name: 'Linkedin', icon: './images/linkedin.png', link: 'https://www.linkedin.com/in/carlosh-melo/' },
        { name: 'Github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/chnmelo' },
        { name: 'Twitter', icon: 'https://cdn.svgporn.com/logos/twitter.svg', link: 'https://twitter.com/chnmelo' },
        { name: 'chnm@cin.ufpe.br', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:chnm@cin.ufpe.br' },
    ]
};

export default Resume;