import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import BlogNews from '../BlogNews/BlogNews';
import HomePaper from '../HomePaper/HomePaper';
import Motto from '../Motto/Motto';
import PatientFeedback from '../PatientFeedback/PatientFeedback';
import PatientsCard from '../PatientsCard/PatientsCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomePaper></HomePaper>
            <Services></Services>
            <Motto></Motto>
            
            <AppointmentBanner></AppointmentBanner>
            <PatientFeedback></PatientFeedback>
            <PatientsCard></PatientsCard>
            <BlogNews></BlogNews>
        </div>
    );
};

export default Home;