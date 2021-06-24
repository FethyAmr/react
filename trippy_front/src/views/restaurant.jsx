import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState("");
    useEffect(async () => {
        try {
           
            const response = await axios.get("http://localhost:9001/restaurants/", {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            if (response.status === 200) {
                setRestaurants(response.data)
            }
        } catch (error) {
            console.error(error)
        }
export default Restaurant;