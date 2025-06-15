import React from 'react';
import Cards from '../../../commonComponents/Cards';
import SubHeader from '../../../commonComponents/Main';
import projectGifs from '../../../../assets/internshipProjectVideo.gif';
import ExperienceProp from '../../../commonComponents/ExperienceProp';

export default function Experience() {
    return (
        <div className="mt-10 mb-8 py-6 max-w-[1200px] mx-auto px-4" id="experience">
            <SubHeader subheader="🥂 My Experience !!" />
            <br />
            <br />
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-2">
                <Cards
                    image="https://media.licdn.com/dms/image/v2/D562DAQG4BWdUHE8TBA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726089202101?e=1750366800&v=beta&t=i-GitqSYt8LBmvm75meDkOVA1kFVUHEyVIQZPY07oHQ"
                    heading="Internship Training Program At CoE Siemens, PEC, Chandigarh"
                    resp={`1. Operated Siemens NX for 3D modeling and digital design tasks.
                    2. Gained practical experience in CNC machining processes.
                    3. Performed 3D scanning for reverse engineering applications.
                    4. Utilized rapid prototyping tools, including 3D printing.
                    5. Learned integration of IoT and automation in manufacturing systems.`}
                    description={`• Gained hands-on experience in NX Siemens, CNC machining, 3D scanning, and rapid prototyping as a trainee at the Siemens Centre of Excellence (PEC), Chandigarh.
                    • I have gained knowledge about automobiles and various robots in mechatronics, robotics, and additive manufacturing labs.
                    • Developed strong skills in smart manufacturing, digital design, and product innovation workflows.`}
                    githubLink="https://media.licdn.com/dms/image/v2/D562DAQG4BWdUHE8TBA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726089202101?e=1750370400&v=beta&t=CktHd4lTdSOVvHqkfSHb_lY6BX8Yf-Ipk1qacABX7V8"
                    buttonText="View Certificate"
                />
                <ExperienceProp
                    image={projectGifs}
                    internshipheading="Internship Project at CoE Siemens, PEC, Chandigarh"
                    internshipDescription="
                        This project focuses on designing and prototyping a custom fixture for
                        securely holding workpieces on a tribometer. Developed in Fusion360, the
                        CAD model includes a base plate, adjustable fixtures, and a fine-threaded
                        clamping system, with durable polymer components for smooth, precise
                        operation."
                    internshipResponsibility="Designed and prototyped a custom fixture for securely holding workpieces on a tribometer, ensuring smooth and precise operation."
                    linkToNavi="https://a360.co/46yAFnz"
                    buttonText="View Project"
                />
            </div>
        </div>
    );
}
