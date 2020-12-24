import React from 'react';
import Layout from '../components/layout';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import copo from '../assets/copo.svg';


const Home = () => (
    <Layout>
        <div className="grid grid-cols-1">
            <div className="xl:py-48">
                <h1 className="xl:text-4xl font-primary font-bold text-gray-900 justify-center">The best way to get your coffee<br/>without leaving the comfort<br/>of your house</h1>
                <button type="button" className="xl:mt-14 xl:w-60 xl:h-12 bg-yellow-500 text-white rounded-md text-xl">make your order</button>
                <div className="flex flex-row xl:w-60 xl:py-7">
                    <img src={instagram} alt="instagram" className="xl:pr-4" />
                    <img src={linkedin} alt="linkedin" className="xl:pr-4" />
                    <img src={twitter} alt="twitter" className="xl:pr-4" />
                </div>
                <img src={copo} alt="copo" className="xl:place-self-end" />
            </div>
        </div>
    </Layout>
);

export default Home;