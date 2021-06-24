import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Hotel = () => {
    const [hotels, setHotels] = useState("");
    useEffect(async () => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get("http://localhost:9001/hotels/", {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            if (response.status === 200) {
                setHotels(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }, []);
    if (!hotels) {
        return (
            <div>
                You don't have acces to the list of Hotels.
            </div>
        );
    } else {
        return (
            <div className="row">
                <div className="offset-3 col-6 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Hotels</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" onChange={(e) => setHotels(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" onChange={(e) => setHotels(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Stars</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" onChange={(e) => setHotels(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hotel;