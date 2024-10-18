import React, { useState } from "react";
import Input from "../component/inputTag/Input"; 
import Label from "../component/lable/Label"; 
import Button from "../component/button/CustomButton"; 
import Card from "../component/card/Card"; 
import Checkbox from "../component/checkBok/Checkbox"; 
import TextArea from "../component/textArea/TextArea"; 
import Select from "../component/dropdown/Dropdown"; 
import { options, tableData, TableHeaders } from "../constants";
import Modal from "../component/modal/Modal"; 
import Table from "../component/table/Table"; 

const Sample = () => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddress = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleCloseModal = () => setModalOpen(false);
  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="m-3">
      <Card className={"bg-light card p-3"}>
        <div className="row m-2">
          <Label htmlFor="myInput">My Input Label</Label>
        </div>
        <div className="row m-2">
          <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your name"
            name="username"
            required
          />
        </div>
        <div className="row m-2">
          <Checkbox
            label="CheckBox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        <div className="row m-2">
          <TextArea
            value={textAreaValue}
            onChange={handleAddress}
            placeholder={"Enter your address"}
            name={"textArea"}
          />
        </div>
        <div className="row m-2">
          <Select
            options={options}
            value={selectedValue}
            onChange={handleSelect}
            name="mySelect"
            placeholder="Select an option"
          />
        </div>
        <div className="row m-2">
          <Button className="btn-primary" onClick={handleClick}>
            Submit
          </Button>
        </div>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Sample Modal"
      >
        <p>
          Name: {inputValue}, Checked: {isChecked ? "Yes" : "No"}, Address: {textAreaValue}, Option: {selectedValue}
        </p>
      </Modal>
      <Table
        headers={TableHeaders}
        data={tableData}
        className="my-table mt-3"
        striped={true}
        bordered={true}
        hover={true}
      />
    </div>
  );
};

export default Sample;
