import { adminShowUserData } from "../../store/adminSlice.js";
import { useEffect, useState } from 'react'


function AlluserSection() {
    const [userdata, setUserData] = useState([]);

    useEffect(() => {
        var data = adminShowUserData();
        console.log("data in deshboard: ", data);
        data.then((userData) => {
            console.log("datadatada =================", userData)
            if (userData) {
                setUserData(userData);
                alert("data find sucefully...!");
            } else {
                alert("no user data find");
            }
        });
    },[])
    return (<>
        <div className="w-100 table-responsive p-2 pt-4 ">
            <table className="table table-bordered table-hover table-dark">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userdata.map((data, index) => {
                            return (<tr>
                                <td>{index + 1 + " ."}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.contect}</td>
                                <td>{data.address}</td>
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}
export default AlluserSection;