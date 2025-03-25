import React from "react";
import { useState } from "react";
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import "./styling/Profile.css";

function Profile() {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Student",
    });

    const reports = [
        { title: "Academic Performance", description: "Insights into student grades, subject scores, and progress." },
        { title: "Attendance Report", description: "Track student attendance trends across subjects and months." },
        { title: "Mental Health & Performance", description: "Analyze the impact of mental health on academic results." },
        { title: "Extracurricular Activities", description: "Participation in sports, clubs, and other activities." },
    ];

    const academicData = [
        { subject: "Math", score: 85 },
        { subject: "Science", score: 78 },
        { subject: "History", score: 92 },
        { subject: "English", score: 88 },
        { subject: "Computer Science", score: 95 },
    ];

    const attendanceData = [
        { month: "Jan", attendance: 95 },
        { month: "Feb", attendance: 90 },
        { month: "Mar", attendance: 92 },
        { month: "Apr", attendance: 88 },
        { month: "May", attendance: 85 },
        { month: "Jun", attendance: 89 },
    ];

    const mentalHealthData = [
        { status: "Good", performance: 90 },
        { status: "Average", performance: 75 },
        { status: "Poor", performance: 60 },
    ];

    const colors = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
        <>
            <div className="profile">
                <h1>User Profile</h1>
                <div>
                    <div className="profile-img"></div>
                    <div className="user-details">
                        <div >
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Role:</strong> {user.role}</p>
                        </div>
                        {/* <button className="logout-button" >
                            Logout
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="stats-page">
                <h1>Stats and Reports</h1>
                <div className="cards-container">
                    {reports.map((report, index) => (
                        <div className="report-card" key={index}>
                            <h2>{report.title}</h2>
                            <p>{report.description}</p>

                            {index === 0 && (
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={academicData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="subject" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="score" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            )}

                            {index === 1 && (
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie data={mentalHealthData} dataKey="performance" nameKey="status" cx="50%" cy="50%" outerRadius={100}>
                                            {mentalHealthData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors[index]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            )}

                            {index === 2 && (
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={attendanceData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="attendance" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            )}



                            {index === 3 && <p>More detailed analysis of extracurricular activities goes here.</p>}
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}

export default Profile;
