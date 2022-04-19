export const navItems =[
{
    id: 1,
    title: 'Home',
    path:'./',
    cName: 'navCategories'
},
{
    id: 2,
    title: 'Oled Materials',
    path:'./oled',
    cName: 'navCategories',
    submenu: [
        {
            id: 1 ,
            title: 'Hole Transport Materials',
            path:'./oled/hole-transport-materials',
            category:'Oled',
            submenu: [
            {
                id: 1,
                title: 'Carbazole derivatives',
                path:'carbazole-derivatives',
                cName: 'navSubContent',
                subCategory:'Hole Transport Materials'
                    
            },
            {
                id: 2,
                title: 'Triphenyldiamine derivatives',
                path:'triphenyldiamine-derivatives',
                cName: 'navSubContent',
                subCategory:'Hole Transport Materials'
                    
            },
            {
                id: 3,
                title: 'Other hole transport materials',
                path:'other-hole-transport-materials',
                cName: 'navSubContent',
                subCategory:'Hole Transport Materials'
                    
            }
            ],
        },
        ]
},
{
    id: 3,
    title: 'Fine Chemistry',
    path:'./fine-chemistry',
    cName: 'navCategories',
    submenu: [
        {
            id: 1 ,
            title: 'Screening Compounds',
            path:'screening-compounds',
            category:'Fine Chemistry',
            submenu:[
            {
                id: 1,
                title: 'Benzylalcohols',
                path:'benzylalcohols',
                cName: 'navSubContent',
                subCategory:'Screening Compounds'
            },
            {
                id: 2,
                title: 'Indolopyranones',
                path:'indolopyranones',
                cName: 'navSubContent',
                subCategory:'Screening Compounds'
            },
            {
                id: 3,
                title: 'Lactones',
                path:'lactones',
                cName: 'navSubContent',
                subCategory:'Screening Compounds'
            },
            {
                id: 4,
                title: 'Thienopyranones',
                path:'thienopyranones',
                cName: 'navSubContent',
                subCategory:'Screening Compounds'
            },
            {
                id: 5,
                title: 'Esters',
                path:'esters',
                cName: 'navSubContent',
                subCategory:'Screening Compounds'
            },
            ]
        },
        {
            id: 2 ,
            title: 'Organic Intermediates',
            path:'./fine-chemistry/hole-transport-materials',
            category:'Fine Chemistry',
            submenu:[
                {
                    id: 1,
                    title: 'Acrylic acids',
                    path:'acrylic-acids',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 2,
                    title: 'Alkynes',
                    path:'alkynes',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 3,
                    title: 'Haloalkyls',
                    path:'haloalkyls',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 4,
                    title: 'Indoles',
                    path:'indoles',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 5,
                    title: 'Styrenes',
                    path:'styrenes',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 6,
                    title: 'Tetrazines',
                    path:'tetrazines',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 7,
                    title: 'Allenic acids',
                    path:'./fine-chemistry/hole-transport-materials/allenic-acids',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 8,
                    title: 'Lactonic reagents',
                    path:'lactonic-reagents',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 9,
                    title: 'Organophosphorus',
                    path:'organophosphorus',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                {
                    id: 10,
                    title: 'Carbonyls',
                    path:'carbonyls',
                    cName: 'navSubContent',
                    subCategory:'Organic Intermediates'
                },
                ]
        },
        {
            id: 3 ,
            title: 'Organometallic reagents',
            path:'./fine-chemistry/organometallic-reagents',
            category:'Fine Chemistry',
            submenu:[
            {
                id: 1,
                title: 'Organotin',
                path:'organotin',
                cName: 'navSubContent',
                subCategory:'Organometallic reagents'
            },
            ]
        },
    ]
},
{
    id: 4,
    title: 'Energy Storage',
    path:'./energy-storage',
    cName: 'navCategories',
    submenu: [
    {
        id: 1,
        title: 'Electrolyte solvents',
        path:'./energy-storage/electrolyte-solvents',
        category:'Energy Storage',
        submenu: [
        {
            id: 1,
            title: 'Carbonate',
            path:'carbonate',
            cName: 'navSubContent',
            subCategory:'Electrolyte solvents'
            
        },
        {
            id: 2,
            title: 'Alkoxysulfanes',
            path:'alkoxysulfanes',
            cName: 'navSubContent',
            subCategory:'Electrolyte solvents'
        },
        {
            id: 3,
            title: 'Sulfones',
            path:'sulfones',
            cName: 'navSubContent',
            subCategory:'Electrolyte solvents'
        },
        ]
    },
    {
        id: 2,
        title: 'Additives',
        path:'./energy-storage/additives',
        category:'Energy Storage',
        submenu: [
        {
            id: 1,
            title: 'Fluorinated Carbonate',
            path:'fluorinated-carbonate',
            cName: 'navContent',
            subCategory:'Additives'
        },
        ]
    },
    ]
},
{
    id: 5,
    title: 'Synthetic Intermediates',
    path:'./synthetic-intermediates',
    cName: 'navCategories',
    submenu:[
    {
        id: 1,
        title: 'Carbazole synthons',
        path:'./synthetic-intermediates/carbazole-synthons',
        category:'Synthetic Intermediates',
        submenu:[
            {
                id: 1,
                title: 'First Generation 2,7',
                path:'first-generation-2-7',
                cName: 'navSubContent',
                subCategory:'Carbazole synthons'
                
            },
            {
                id: 2,
                title: 'First Generation 3,6',
                path:'first-generation-3-6',
                cName: 'navSubContent',
                subCategory:'Carbazole synthons'
                
            },
        ]
    },
    {
        id: 2,
        title: 'Diarylamine',
        path:'./synthetic-intermediates/diarylamine',
        category:'Synthetic Intermediates',
        submenu:[
            {
                id: 1,
                title: 'Methoxy-substituted diarylamine',
                path:'methoxy-substituted-diarylamine',
                cName: 'navSubContent',
                subCategory:'Diarylamine'
            },
        ]
    },
    {
        id: 3,
        title: 'Halo aryl',
        path:'./synthetic-intermediates/halo-aryl',
        category:'Synthetic Intermediates',
        submenu:[
            {
                id: 1,
                title: 'Aryl iodide',
                path:'aryl-iodide',
                cName: 'navSubContent',
                subCategory:'Halo aryl'
                
            },
            {
                id: 2,
                title: 'Aryl bromide',
                path:'aryl-bromide',
                cName: 'navSubContent',
                subCategory:'Halo aryl'
                
            },
        ]
    },
    {
        id: 4,
        title: 'PEG derivatives',
        path:'./synthetic-intermediates/peg-derivatives',
        category:'Synthetic Intermediates',
        submenu:[
            {
                id: 1,
                title: 'Sulfonate PEG',
                path:'sulfonate-peg',
                cName: 'navSubContent',
                subCategory:'PEG derivatives'
                
            },
            {
                id: 2,
                title: 'Aryl PEG',
                path:'aryl-peg',
                cName: 'navSubContent',
                subCategory:'PEG derivatives'
                
            },
        ]
    },
    {
        id: 5,
        title: 'Non-Fullerene Acceptor',
        path:'./synthetic-intermediates/non-fullerene-acceptor',
        category:'Synthetic Intermediates',
        submenu:[
            {
                id: 1,
                title: 'Miscellaneous',
                path:'miscellaneous',
                cName: 'navSubContent',
                subCategory:'Non-Fullerene Acceptor building blocks'
                
            },
        ]
    },
    ]
},
{
    id: 6,
    title: 'Perovskite solar cell / DSSC',
    path:'./perovskite-dssc',
    cName: 'navCategories',
    submenu:[
    {
        id: 1,
        title: 'Carbazole HTM',
        path:'./perovskite-dssc/carbazole-htm',
        category:'Perovskite solar cell / DSSC',
        submenu: [
        {
            id: 1,
            title: 'Carbazole core HTM',
            path:'carbazole-core-htm',
            cName: 'navSubContent',
            subCategory:'Carbazole HTM'
            
        },
        {
            id: 2,
            title: 'Twin-HTM 3,6',
            path:'twin-htm-3-6',
            cName: 'navSubContent',
            subCategory:'Carbazole HTM'
        },
        {
            id: 3,
            title: 'Star-shaped HTM',
            path:'star-shaped-htm',
            cName: 'navSubContent',
            subCategory:'Carbazole HTM'
        },
        {
            id: 4,
            title: 'Carbazole core HTM',
            path:'carbazole-core-htm',
            cName: 'navSubContent',
            subCategory:'Carbazole HTM'
        },
        {
            id: 5,
            title: 'Twin-HTM 2,7',
            path:'twin-htm-2-7',
            cName: 'navSubContent',
            subCategory:'Carbazole HTM'
        }
        ]
    }
]
},
{
    id: 7,
    title: 'Contact',
    path:'./contact',
    cName: 'navCategories'
}]
