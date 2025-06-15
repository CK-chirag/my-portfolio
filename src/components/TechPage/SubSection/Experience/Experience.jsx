import Cards from "../../../commonComponents/Cards";
import ExperienceProp from "../../../commonComponents/ExperienceProp";

export default function TechProject() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-8 py-6 max-w-[1200px] mx-auto">
            <Cards
                image="https://private-user-images.githubusercontent.com/113717192/447316690-19f41550-3adb-4958-84f2-cf964351c030.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk3NTYzMDQsIm5iZiI6MTc0OTc1NjAwNCwicGF0aCI6Ii8xMTM3MTcxOTIvNDQ3MzE2NjkwLTE5ZjQxNTUwLTNhZGItNDk1OC04NGYyLWNmOTY0MzUxYzAzMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYxMlQxOTIwMDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMjA0OTk2MjIwMGYxMDJmMTZmNWI3MDIwZWMxZjhjNWI0MzFlZjRhNGE2ZDBkODBhYTk5NWE3MjBhZGQzY2Q1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.-8vxIg2vA7qNTvVWWb3r6sk37wFEu5Mj7QdanEKGjJs"
                heading="AC Walla"
                resp="Design and Development of front-end and Auth through Firebase"
                description="Ecommerce Website for sales and retail of AC's and their listing, Developed using ReactJS, Tailwind CSS, Firebase (to be integrated soon for auth)"
                githubLink="https://github.com/CK-chirag/ac-walla/"
            />
            <ExperienceProp />
        </div>
    );
}