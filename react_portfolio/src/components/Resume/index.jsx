import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './style.css'
function Resume() {
    const events = [
        { status: 'Junior Full Stack Developer Marsh Finance LTD |  Rochdale, Greater Manchester.', date: 'August 2022 - December 2023', icon: 'pi pi-bolt', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Junior Software Engineer Scorpion Automotive ltd | Chorley, Lancashire.', date: 'March 2021- August 2022', icon: 'pi pi-bolt', color: '#673AB7' },
        { status: 'Graduate ServiceNow Developer Home Office | Salford, Manchester', date: 'October 2018- December 2019', icon: 'pi pi-bolt', color: '#FF9800' },
        // { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };
    const customizedContent = (item) => {
        return (
            <div>
                <span className="block text-1xl font-bold mb-2 drop-in">{item.status}</span>
                <span className="block  mb-6 drop-in">{item.date}</span>
            </div>
        );
    };
    return (
        
<div className="px-4 py-5 md:px-6 lg:px-8">
    <div className="border-bottom-1 surface-border mb-6">
    <span className="block text-4xl font-bold mb-6 drop-in">
      Work <span className="text-primary">Experience</span>
    </span>
    </div>
    <Timeline value={events} marker={customizedMarker} content={customizedContent} className="w-full md:w-20rem" />

</div>
        // <div className="card p-6">
        //     <span className="block text-4xl font-bold mb-6 drop-in">
        //         Work <span className="text-primary">Experience</span>
        //       </span>
              
        //      <Timeline value={events} marker={customizedMarker} content={customizedContent} className="w-full md:w-20rem" />
        // </div>

    );

}

export default Resume;


// return (
//     <div className="card p-6">
//         <span className="block text-4xl font-bold mb-6 drop-in">
//             Khubaib <span className="text-primary">Ul</span>-Haque
//           </span>
//         <Timeline value={events} content={(item) => item.status}  content={customizedContent} />
//     </div>

// );