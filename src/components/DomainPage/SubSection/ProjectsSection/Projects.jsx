import React from 'react';
import Cards from '../../../commonComponents/Cards';
import SubHeader from '../../../commonComponents/Main';
import ForestFireImg from '../../../../assets/forstFireMonitoringSystem.png';
import FourDofArmImg from '../../../../assets/4DofArm.jpg'

export default function Projects() {
    return (
        <div className="mt-10 mb-8 py-6 max-w-[1200px] mx-auto px-4" id="projects">
            <SubHeader subheader="✨ Highlights From My Projects !!" />
            <br />
            <br />
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-2">
                <Cards
                    image={ForestFireImg}
                    heading="Forest Fire Monitoring System"
                    resp="Circuiting and Coding of All Sensor and Connect Them to Thingspeak"
                    description="A 4-wheeled rover uses an ESP32-CAM with OpenCV AI to detect fire and humans, sending data like temperature, humidity, smoke, soil moisture, and GPS location to ThingSpeak via ESP32. Controlled by Arduino UNO and L298N, it alerts authorities with real-time fire location using the NEO-6M GPS module."
                    githubLink="https://github.com/CK-chirag/forest-fire-monitoring-system"
                />
                <Cards
                    image={FourDofArmImg}
                    heading="4 DOF Robotic Arm"
                    resp="Circuiting and Coding"
                    description="This project was born out of my desire to build a Bluetooth car and finding different tutorials solved different parts of the problem, but not the entire problem. I decided to create this once I had solved the problem for myself for an end to end Bluetooth controlled l298n Arduino with all open source components and code. This was self taught."
                    githubLink="https://github.com/CK-chirag/4-DOF-Robotic-Arm"
                />
            </div>
        </div>
    );
}
