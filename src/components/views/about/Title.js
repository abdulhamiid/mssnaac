import React from 'react';

const Title = ({ title, text, text2, text3 }) => (
  <div>
    <h2 className="text-[50px] font-bold pb-3 font">{title}</h2>
    <div>
      <p className="text-2xl font-medium pb-6 leading-[50px]">{text}</p>
      <p className="text-2xl font-medium pb-6 leading-[50px]">{text2}</p>
      <p className="text-2xl font-medium leading-[50px]">{text3}</p>
    </div>
  </div>
);

export default Title;
