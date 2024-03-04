
import { Timeline } from 'primereact/timeline';
        

function Portfolio(){
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    return (
        <div className="card p-6">
            <div className="grid">
          <div className="col-12 md:col-4 sm:col-12">

            <Timeline value={events} content={(item) => item.status} />
            </div>
          </div>
        </div>

    );

}

export default Portfolio;