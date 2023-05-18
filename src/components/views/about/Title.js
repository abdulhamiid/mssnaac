import React from 'react';

const Title = ({ title, text, text2, text3 }) => (
  <div>
    <h2 className="text-[35px] font-bold pb-3 font">{title}</h2>
    <div>
      <p className="text-lg font-medium pb-4 leading-[50px]">{text}</p>
      <p className="text-lg font-medium pb-4 leading-[50px]">{text2}</p>
      <p className="text-lg font-medium leading-[50px]">{text3}</p>
    </div>
  </div>
);

export default Title;
