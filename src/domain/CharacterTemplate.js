const attributes = {
    agility: {
        name: {
            en: 'Agility',
            pl: 'Zręczność'
        }
    },
    smarts: {
        name: {
            en: 'Smarts',
            pl: 'Spryt'
        }
    },
    spirit: {
        name: {
            en: 'Spirit',
            pl: 'Duch'
        }
    },
    strength: {
        name: {
            en: 'Strength',
            pl: 'Siła'
        }
    },
    vigor: {
        name: {
            en: 'Vigor',
            pl: 'Wigor'
        }
    }
};

const skills = [
    {
        arcane: false,
        basic: false,
        key: 'shooting',
        attribute: 'agility',
        name: {
            en: 'Shooting',
            pl: 'Strzelanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'fighting',
        attribute: 'agility',
        name: {
            en: 'Fighting',
            pl: 'Walka'
        }
    },
    {
        arcane: false,
        basic: true,
        key: 'stealth',
        attribute: 'agility',
        name: {
            en: 'Stealth',
            pl: 'Skradanie'
        }
    },

    {
        arcane: false,
        basic: true,
        key: 'athletics',
        attribute: 'agility',
        name: {
            en: 'Athletics',
            pl: 'Wysportowanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'piloting',
        attribute: 'agility',
        name: {
            en: 'Piloting',
            pl: 'Pilotowanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'driving',
        attribute: 'agility',
        name: {
            en: 'Driving',
            pl: 'Prowadzenie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'thievery',
        attribute: 'agility',
        name: {
            en: 'Thievery',
            pl: 'Złodziejstwo'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'boating',
        attribute: 'agility',
        name: {
            en: 'Boating',
            pl: 'Żeglowanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'riding',
        attribute: 'agility',
        name: {
            en: 'Riding',
            pl: 'Jeździectwo'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'academics',
        attribute: 'smarts',
        name: {
            en: 'academics',
            pl: 'Wykształcenie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'battle',
        attribute: 'smarts',
        name: {
            en: 'Battle',
            pl: 'Dowodzenie'
        }
    },
    {
        arcane: false,
        basic: true,
        key: 'common knowledge',
        attribute: 'smarts',
        name: {
            en: 'Common Knowledge',
            pl: 'Wiedza Ogólna'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'electronics',
        attribute: 'smarts',
        name: {
            en: 'Electronics',
            pl: 'Elektronika'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'gambling',
        attribute: 'smarts',
        name: {
            en: 'Gambling',
            pl: 'Hazard'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'hacking',
        attribute: 'smarts',
        name: {
            en: 'Hacking',
            pl: 'Hakowanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'intimidation',
        attribute: 'spirit',
        name: {
            en: 'Intimidation',
            pl: 'Zastraszanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'language',
        attribute: 'smarts',
        name: {
            en: 'Language',
            pl: 'Język'
        }
    },
    {
        arcane: false,
        basic: true,
        key: 'notice',
        attribute: 'smarts',
        name: {
            en: 'Notice',
            pl: 'Spostrzegawczość'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'occult',
        attribute: 'smarts',
        name: {
            en: 'Occult',
            pl: 'Okultyzm'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'performance',
        attribute: 'spirit',
        name: {
            en: 'Performance',
            pl: 'Występowanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'repair',
        attribute: 'smarts',
        name: {
            en: 'Repair',
            pl: 'Reperowanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'research',
        attribute: 'smarts',
        name: {
            en: 'Research',
            pl: 'Wyszukiwanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'science',
        attribute: 'smarts',
        name: {
            en: 'Science',
            pl: 'Nauka'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'survival',
        attribute: 'smarts',
        name: {
            en: 'Survival',
            pl: 'Przetrwanie'
        }
    },
    {
        arcane: false,
        basic: true,
        key: 'persuasion',
        attribute: 'spirit',
        name: {
            en: 'Persuasion',
            pl: 'Przekonywanie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'healing',
        attribute: 'smarts',
        name: {
            en: 'Healing',
            pl: 'Leczenie'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'taunt',
        attribute: 'smarts',
        name: {
            en: 'Taunt',
            pl: 'Wyśmiewanie'
        }
    },
    {
        arcane: true,
        basic: false,
        key: 'concentration',
        attribute: 'spirit',
        name: {
            en: 'Concentration',
            pl: 'Skupienie'
        }
    },
    {
        arcane: true,
        basic: false,
        key: 'spells',
        attribute: 'smarts',
        name: {
            en: 'Spells',
            pl: 'Rzucanie Czarów'
        }
    },
    {
        arcane: true,
        basic: false,
        key: 'weird science',
        attribute: 'smarts',
        name: {
            en: 'Weird Science',
            pl: 'Niesamowita Nauka'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'psionic',
        attribute: 'smarts',
        name: {
            en: 'Psionic',
            pl: 'Psionika'
        }
    },
    {
        arcane: false,
        basic: false,
        key: 'faith',
        attribute: 'spirit',
        name: {
            en: 'Faith',
            pl: 'Wiara'
        }
    }
];

const diceTypes = ['k4', 'k6', 'k8', 'k10', 'k12'];

export {attributes, skills, diceTypes};
