import type { Project } from '../model/projects.types';

export const ProjectsService = {
    async list(): Promise<Project[]> {
        return [
            { id: 'pacewargame', title: 'Space war game', url: 'https://maxkukish8.github.io/mkulish-testwork/',
                giturl: 'https://github.com/maxkukish8/mkulish-testwork/',
                tags: ['Dev/Design', 'TypeScript','PixiJS', 'Webpack', 'Tween.js']
            },
            { id: 'flightapp', title: 'Flight App', url: 'https://maxkukish8.github.io/flight-app',
                giturl: 'https://github.com/maxkukish8/flight-app.git',
                tags: ['Dev/Design', 'React 18', 'TypeScript', 'Vite', 'Material-UI', 'Redux Toolkit', 'React Router', 'Axios', 'Jest / React Testing Library']
            },
            { id: 'musicapp', title: 'Music App', url: 'https://p01--music-tracks-api--kyj4sxk6dnw9.code.run/',
                giturl: 'https://github.com/maxkukish8/music-tracks-app.git',
                tags: ['Dev/Design', 'Vue 3','Vite', 'SCSS', 'Fastify', 'Docker', 'Northflank', 'Node.js']
            },
            { id: 'shoppingcartapp', title: 'Shopping Cart App', url: 'https://maxkukish8.github.io/mkulish-testwork-ui-arts/',
                giturl: 'https://github.com/maxkukish8/mkulish-testwork-ui-arts.git',
                tags: ['Dev/Design', 'Vue 3', 'Vue CLI', 'SCSS', 'localStorage']
            },
            { id: 'biogas101', title: 'Biogas101', url: 'https://biogas101.com',
                tags: ['Dev', 'WordPress','HTML, SCSS, JavaScript, JSON, Node.js, Fastify, REST API, Docker']
            },
            { id: 'directfabrics', title: 'Direct fabrics', url: 'https://www.direct-fabrics.co.uk/',
                tags: ['Dev', 'Magento, Hyva Theme, HTML, Tailwind CSS, Alpine.js, React.js, PHP, Docker, Composer, SQL']
            },
            { id: 'spacecamper', title: 'Spacecamper', url: 'https://www.spacecamper-shop.de/',
                tags: ['Dev', 'Magento','HTML, LESS, jQuery, PHP']
            },
            { id: '8wines', title: '8wines', url: 'https://8wines.com/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, Docker, Composer, SQL']
            },
            { id: 'avantree', title: 'Avantree', url: 'https://avantree.com/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            },
            { id: 'shoptireco', title: 'Shoptireco', url: 'https://shoptireco.com/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            },
            { id: 'sportano', title: 'Sportano', url: 'https://sportano.pl/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            },
            { id: 'theoldcinema', title: 'The old cinema', url: 'https://www.theoldcinema.co.uk/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            },
            { id: 'thermos', title: 'Thermos', url: 'https://thermos.com/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            },
            { id: 'detail', title: 'Detail', url: 'https://www.detail.de/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            },
            { id: 'kinderkraft', title: 'Kinderkraft', url: 'https://kinderkraft.pl/',
                tags: ['Dev', 'Magento, Hyva Theme, HTML, Tailwind CSS, Vue.js, PHP, SQL']
            },
            { id: 'mipinc', title: 'Mipinc', url: 'https://store.mipinc.com/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            },
            { id: 'dinnyhall', title: 'Dinnyhall', url: 'https://www.dinnyhall.com/',
                tags: ['Dev', 'Magento, HTML, LESS, jQuery, Knockout.js, PHP, SQL']
            }
        ];
    }
};
