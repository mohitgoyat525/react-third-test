import React, { useState } from 'react';
import { DropDownIcon, PlusIcon } from '../utils/icons';
import { DROPDOWN_LIST } from '../utils/helper';

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Kategorie');
  const [upload, setUpload] = useState([]); // move the upload state here

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleUpload = (event) => {
    const files = [...event.target.files];
    const newUploads = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setUpload((prev) => [...prev, ...newUploads]);
  };

  return (
    <div className="flex items-center justify-center bg-primary flex-col">
      <div className="container my-[60px] max-xl:my-11 max-md:my-10">
        <h1 className="text-center text-darkBlack text-4xl max-md:text-3xl font-bold leading-[44px]">
          Event einsenden
        </h1>
        <p className="text-center font-light text-xl leading-[30px] max-w-[768px] mx-auto pt-5 text-neutural">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <form className="w-full max-w-[768px] mx-auto">
          <div className="flex gap-4 flex-wrap w-full max-w-[768px] bg-white border my-5 border-dashed rounded-[30px] py-2 px-4 items-center">
            {upload.map((obj, i) => (
              <div key={i} className="relative size-24 rounded-lg overflow-hidden">
                <img
                  src={obj.url}
                  alt="selected-img"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <label className="w-24 h-20 border-2 border-dashed border-neutural rounded-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all ease-linear duration-200">
              <input
                type="file"
                className="hidden"
                onChange={handleUpload}
              />
              <PlusIcon />
            </label>
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer justify-between bg-white rounded-[30px] py-[17px] px-4"
              onClick={toggleDropdown}
            >
              <p className="text-sm font-bold text-neutural leading-[21px]">{selectedOption}</p>
              <p className={`cursor-pointer ${isOpen ? 'rotate-180' : ''}`}>
                <DropDownIcon />
              </p>
            </div>
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-full z-10">
                <ul className="py-2">
                  {DROPDOWN_LIST.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-bold text-neutural leading-[21px]"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between my-5 flex-wrap max-md:gap-6">
            <input
              type="text"
              placeholder="Titel"
              className="placeholder:text-neutural placeholder:text-sm placeholder:font-bold placeholder:leading-[21px] bg-white rounded-[30px] max-md:max-w-none py-[17px] px-4 text-sm font-bold text-neutural leading-[21px] w-full max-w-[371px] outline-none"
            />
            <input
              type="text"
              placeholder="Datum"
              className="placeholder:text-neutural placeholder:text-sm placeholder:font-bold placeholder:leading-[21px] bg-white rounded-[30px] max-md:max-w-none py-[17px] px-4 text-sm font-bold text-neutural leading-[21px] w-full max-w-[371px] outline-none"
            />
          </div>
          <div className="flex items-center justify-between flex-wrap max-md:gap-6">
            <input
              type="text"
              placeholder="Preis"
              className="placeholder:text-neutural placeholder:text-sm placeholder:font-bold placeholder:leading-[21px] bg-white rounded-[30px] py-[17px] px-4 max-md:max-w-none py-[17px] text-sm font-bold text-neutural leading-[21px] w-full max-w-[371px] outline-none"
            />
            <input
              type="text"
              placeholder="Preis"
              className="placeholder:text-neutural placeholder:text-sm placeholder:font-bold placeholder:leading-[21px] bg-white rounded-[30px] py-[17px] px-4 max-md:max-w-none py-[17px] text-sm font-bold text-neutural leading-[21px] w-full max-w-[371px] outline-none"
            />
          </div>
          <textarea
            placeholder="Details zur Veranstaltung"
            className="flex h-[132px] items-center my-5 outline-none w-full placeholder:text-neutural placeholder:text-sm placeholder:text-bold placeholder:leading-[21px] bg-white rounded-[30px] p-4 text-sm font-bold text-neutural leading-[21px]"
          ></textarea>
          <button className="resize-none w-full max-w-[361px] mx-auto border border-solid rounded-[30px] text-white text-base font-bold leading-6 form-btn py-4 flex items-center justify-center">
            Event einsenden
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
