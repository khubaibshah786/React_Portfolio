export const items = [
    {
        key: 1,
        label: 'Home',
        icon: 'pi pi-home',
        url: "/",
    },
    {
        key: 2,
        label: 'Portfolio',
        icon: 'pi pi-book',
        url: "/Portfolio",
    },
    {
        key: 3,
        label: 'Project Gallery',
        icon: 'pi pi-link',
        url: "/ProjectGallery",
    },
    {
        key: 4,
        label: 'Resume',
        icon: 'pi pi-link',
        url: "/Resume",
    },
    {
        key: 5,
        label: 'Contact',
        icon: 'pi pi-envelope',
        url: "/Contact",
    },
    {
        key: 6,
        label: 'Portfolio',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },

    
];

export const end = (
    <div className="flex align-items-center gap-2 mr-5">
        <span className="block text-2xl font-bold mb-1 drop-in"><span className="text-primary">Khubaib</span> Ul-Haque</span>
    </div>
);
