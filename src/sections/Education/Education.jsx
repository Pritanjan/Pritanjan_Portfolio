import React from 'react';
import styles from './EducationStyles.module.css';

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor of Technology',
            institution: 'Kamla Nehru Institue of Technology, Sultanpur',
            year: '2020 - 2024',
            details: 'Focus on software development, algorithms, and data structures. Graduated with honors.'
        },
        {
            degree: 'Intermediate',
            institution: 'Little Flower House',
            year: '2017 - 2019',
            details: 'Maths'
        }
    ];

    const exp = [
        {
            companyName: 'HangingPanda',
            Designation: "Developer",
            details: 'Focus on the development and deployment of various site during the job'
        }
    ]

    return (
        <div className={styles.educationSection}>
            <h1>Education & Experience</h1>
            {educationData.map((education, index) => (
                <div key={index} className={styles.educationItem}>
                    <h3>{education.degree}</h3>
                    <p>{education.institution}</p>
                    <p>{education.year}</p>
                    <p>{education.details}</p>
                </div>
            ))}
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1>Experience</h1>

            {exp.map((ex, idx) => (
                <div key={idx} className={styles.educationItem}>
                    <h3>{ex.companyName}</h3>
                    <p>{ex.Designation}</p>
                    <p>{ex.details}</p>
                </div>
            ))}
        </div>
    );
};

export default Education;
