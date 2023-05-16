import React from 'react';
import Navbar from '../../navigation/Navbar';
import Title from './Title';
import {
  AmirIcon,
  AmeerahIcon,
  NaiAmeerIcon,
  NDAmeerIcon,
  NaiAmeerahIcon,
  FinSecIcon,
  GenSecIcon,
  EDChiefIcon,
  MailIcon,
} from '../../../ui/svg';

const CommitteeDetails = [
  {
    background: 'bg-[#D9CDBE]',
    name: 'Umar Zayad',
    post: 'Ameer',
    icon: <AmirIcon />,
  },
  {
    background: 'bg-[#CDCFAF]',
    name: 'Umar Zayad',
    post: 'Ameerah',
    icon: <AmeerahIcon />,
  },
  {
    background: 'bg-[#F5E5D9]',
    name: 'Umar Zayad',
    post: 'Naibul Ameer(Admin)',
    icon: <NaiAmeerIcon />,
  },
  {
    background: 'bg-[#E6F4E6]',
    name: 'Umar Zayad',
    post: 'Naibul Ameer(Da’wah)',
    icon: <NDAmeerIcon />,
  },
  {
    background: 'bg-[#F1E2C8]',
    name: 'Umar Zayad',
    post: 'Naibul Ameerah',
    icon: <NaiAmeerahIcon />,
  },
  {
    background: 'bg-[#F6D9D9]',
    name: 'Umar Zayad',
    post: 'Financial Secretary',
    icon: <FinSecIcon />,
  },
  {
    background: 'bg-[#CDCFAF]',
    name: 'Umar Zayad',
    post: 'General Secretary',
    icon: <GenSecIcon />,
  },
  {
    background: 'bg-[#D9CDBE]',
    name: 'Umar Zayad',
    post: 'Editor-in-Chief',
    icon: <EDChiefIcon />,
  },
];

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-brand-green flex justify-between items-center gap-20 pl-[50px] py-12">
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
        <p className="font-bold text-[50px] text-center leading-[65px] pb-[50px] font">
          MSSNAAC Executive Committee 2021/2022
        </p>

        <div className="grid grid-cols-4 gap-8">
          {CommitteeDetails.map((detail) => (
            <div key={detail.post}>
              <div
                className={`flex justify-end items-center flex-col ${detail.background} h-[250px]`}
              >
                {detail.icon}
              </div>

              <div className="bg-white py-[21px] px-[17px] shadow-lg rounded-md flex justify-between items-start">
                <div>
                  <p className="text-2xl font-bold text-brand-black pb-3">
                    {detail.name}
                  </p>
                  <p className="text-[22px] font-medium text-brand-black">
                    {detail.post}
                  </p>
                </div>
                <div className="cursor-pointer">
                  <MailIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-2xl font-bold mt-[30px] flex justify-end gap-6">
          <button
            className="px-14 py-3 font border-2 border-brand-black rounded text-brand-black hover:bg-brand-black hover:text-white"
            type="button"
          >
            Prev
          </button>
          <button
            type="button"
            className="px-14 font py-3 border-2 border-dark-green bg-dark-green text-white rounded hover:bg-transparent hover:text-dark-green"
          >
            Next
          </button>
        </div>
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
