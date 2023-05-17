import React from 'react';
import Navbar from '../../navigation/Navbar';
import Title from './Title';
import Page from '../../../utils/page';

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-brand-green flex justify-between items-center gap-32 pl-[50px] py-12">
        <div className=" flex-1">
          <Title
            title="MSSN Vision"
            text="“To establish an Islamic Ummah governed by the principles and rules of the Shariah within the next fifty years”"
          />
          <Title
            title="MSSN Mission"
            text="“The MSSN will work relentlessly towards the establishment of a society that fosters all-round human development."
            text2="To achieve this, MSSN will continuously strive towards strengthening the Ummah educationally, economically, spiritually and politically through a wide spectrum of activities in schools and the larger society in partnership with like-minded organizations."
            text3="To succeed, MSSN must ensure that its members are God fearing, knowledgeable, united and with superior moral values”"
          />
        </div>

        <img src="mssn1.png" alt="mssn" />
      </div>

      <div className="flex justify-center items-center gap-40 pl-[50px] py-[58px]">
        <div className="flex-1">
          <Title
            title="Our Activities"
            text="As a Muslim Student Society, our primary assignment is to coordinate secondary schools in Akinyele Local Government."
            text2="We provide educational support, organize events, and engage in community service to help spread the message of Islam while creating a positive impact in our community."
          />
        </div>

        <div className="flex-1">
          <img
            src="Activities.png"
            alt="Activites"
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-brand-green pt-8 pb-[73px] px-[104px]">
        <p className="font-bold text-[35px] text-center leading-[65px] pb-[50px] font">
          MSSNAAC Executive Committee 2021/2022
        </p>

        <Page itemsPerPage={8} />
      </div>

      <div className="flex justify-center items-center gap-44 pl-[50px] py-[105px]">
        <div className="flex-1">
          <Title
            title="Become a Member"
            text="Our society provides a supportive community for Muslim students, where we can connect and explore our faith. Members have access to exclusive features on the website."
            text2="Membership is open to any Muslim who shares our aims and is a bona-fide member of a branch."
          />

          <button
            type="button"
            className="px-20 py-3 text-2xl font-bold border-2 border-dark-green bg-dark-green text-white rounded hover:bg-transparent hover:text-dark-green font"
          >
            JOIN US
          </button>
        </div>

        <img src="Member.png" alt="Activites" className="object-contain" />
      </div>
    </>
  );
}

export default About;
