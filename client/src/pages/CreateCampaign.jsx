import React, { useState } from 'react';
import { CustomButton, FormElement } from '../components';
import {checkImageValidity} from '../utils/index.js'
import { useStateContext } from '../context';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom'

/**
 * Component for creating a new campaign.
 *
 * @returns {JSX.Element} The rendered CreateCampaign component.
 */
const CreateCampaign = () => {
  // State variables
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigate()
  const {createCampaign} = useStateContext()
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  // Handle change for form fields
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkImageValidity(form.image, async (exists) => {
      if(exists){
        setIsLoading(true)
        await createCampaign({...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false)
        navigate("/")
      }else{
        alert('Provide valid image URL')
        setForm({...form, image: ''})
      }
    })
  };

  return (
    <div className="bg-[#1c1c2420] flex justify-center items-center flex-col sm:p-10 p-4">
      {isLoading && 'Loader...'}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px]">
        <h1 className="font-epilogue sm:text-[25px] text-[14px] leading-[38px]">
          Start a campaign!
        </h1>
      </div>

      {/* Form to publish campaign */}
      <form onSubmit={handleSubmit} className="w-full mt-[40px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          {/* FormElement for 'Your name' field */}
          <FormElement
            labelName="Your name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />

          {/* FormElement for 'Campaign title' field */}
          <FormElement
            labelName="Campaign title *"
            placeholder="Title goes here"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        {/* FormElement for 'Research Idea' field */}
        <FormElement
          labelName="Research Idea *"
          placeholder="Write your idea"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}
        />

        <div className="flex flex-wrap gap-[40px]">
          {/* FormElement for 'Goal' field */}
          <FormElement
            labelName="Goal *"
            placeholder="ETH 0.60"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />

          {/* FormElement for 'Campaign image' field */}
          <FormElement
            labelName="Campaign image *"
            placeholder="Image URL"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
        </div>

        {/* FormElement for 'Deadline' field */}
        <FormElement
          labelName="Deadline *"
          placeholder="Deadline"
          inputType="date"
          value={form.deadline}
          handleChange={(e) => handleFormFieldChange('deadline', e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
          {/* Submit Button */}
          <CustomButton
            btnType="submit"
            title="Publish new campaign"
            styles="bg-[#67abdb80]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
