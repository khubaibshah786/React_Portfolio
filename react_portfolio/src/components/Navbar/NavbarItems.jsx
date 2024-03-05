export const items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        url: "/",
    },
    {
        label: 'Portfolio',
        icon: 'pi pi-book',
        url: "/Portfolio",
    },
    {
        label: 'Project Gallery',
        icon: 'pi pi-link',
        url: "/ProjectGallery",
    },
    {
        label: 'Resume',
        icon: 'pi pi-link',
        url: "/Resume",
    },
    {
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
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    },
    
];

export const end = (
    <div className="flex align-items-center gap-2 mr-5">
        <span className="block text-2xl font-bold mb-1 drop-in"><span className="text-primary">Khubaib</span> Ul-Haque</span>
    </div>
);
