import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import "./App.css";
import styleSheet from './styles.js';

export function OrbachScreen({navigation, route}) {
    const [data, setData] = useState([]);

    const fetchData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "get",
            headers: myHeaders,
            redirect: "follow",

        };
        fetch("https://v1.nocodeapi.com/calebmcclure/google_sheets/sfwrdAWrqvFOoVFt?tabId=FormResponses&filterBy=Building&filterValue=OrbachLibrary", requestOptions)
            .then(response => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData.data);
                console.log(data);
            }
            );
    };

useEffect(() => {
    fetchData();
}, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styleSheet.titleText}>
            {route.params.name} Restroom Reviews
            </Text>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Floor</th>
                    <th>Direction</th>
                    <th>Restroom Gender</th>
                    <th>Accessible</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
                {data.map((review, index) => (
                    <tr key={index}>
                        <td>{review.Name}</td>
                        <td>{review.Floor}</td>
                        <td>{review.Direction}</td>
                        <td>{review.Gender}</td>
                        <td>{review.Accessible}</td>
                        <td>{review.Rating}</td>
                        <td>{review.Review}</td>
                    </tr>
                ))}
            </tbody>
        </View>
    );
}

export default OrbachScreen;
