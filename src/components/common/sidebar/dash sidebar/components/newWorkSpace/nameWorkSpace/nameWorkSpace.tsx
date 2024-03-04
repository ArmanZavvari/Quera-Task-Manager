import React from "react";

interface Props {
  data: {
    name: string;
    color: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      color: string;
    }>
  >;
}

const NameWorkSpace: React.FC<Props> = ({ data, setData }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
  };

  return (
    <div>
      <h5 className="mb-1">نام ورک اسپیس</h5>
      <input
        type="text"
        onChange={handleInput}
        defaultValue={data.name}
        className="border border-gray-400 rounded-md px-3 py-2 mb-4 w-full"
      />
    </div>
  );
};

export default NameWorkSpace;
