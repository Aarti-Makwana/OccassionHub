import { adminShowEventDetails } from "../../store/adminSlice.js";
import { useEffect, useState } from 'react'

function EventRequirementDetailSection() {
    const [event, setEventData] = useState([]);

    useEffect(() => {
        var eventData = adminShowEventDetails();
        eventData.then((eventdata) => {
            console.log("Event data page", eventdata);
            if (eventdata) {
                alert("event data find successfully");
                setEventData(eventdata);
            }
            else {
                alert("no event data find");
            }
        })
    }, []);

    return (<>
        <h5 style={{ color: '#FF0057', textAlign: 'center', fontSize: '2.5rem' }}>Event Requirement List</h5>
        <div className="container-fluid p-0 bg-dark" style={{ flexGrow: 1, }}>
            <div className="w-100 table-responsive p-2 pt-4 ">
                <table className="table table-bordered table-hover table-dark">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Event Name</th>
                            <th>Event Type</th>
                            <th>Services Choose</th>
                            <th>Total guest</th>
                            <th>Start Date</th>
                            <th>Last Date</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            event.map((eventData, index) => (
                                <tr key={index}>
                                    <td>{index + 1 + " ."}</td>
                                    <td>{eventData.userid}</td>
                                    <td>{eventData.eventname}</td>
                                    <td>{eventData.eventtype}</td>
                                    <td>
                                        {
                                            eventData.serviceschoose.map((service, i, arr) => (
                                                <div key={i}>
                                                    {Object.entries(service)
                                                        .filter(([key, value]) => key !== '_id' && value)
                                                        .map(([key]) => (
                                                            <span key={key}>
                                                                {key} {i !== arr.length - 1 ? ', ' : ''}
                                                            </span>
                                                        ))}
                                                </div>
                                            ))
                                        }
                                    </td>
                                    <td>{eventData.totalguest}</td>
                                    <td>{eventData.startedate}</td>
                                    <td>{eventData.enddate}</td>
                                    <td>{eventData.budget}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>

    </>);

}
export default EventRequirementDetailSection;