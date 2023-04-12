import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AccountCircle, EmailOutlined } from "@mui/icons-material";

import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import NumbersIcon from "@mui/icons-material/Numbers";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CabinIcon from "@mui/icons-material/Cabin";
import WcIcon from "@mui/icons-material/Wc";
import { context_Api } from "../../App";

function AddTeacherData() {
  //? useContext...
  const { Teacher_data, setTeacher_data } = useContext(context_Api);

  //? Router useHistory...
  const history = useHistory();

  const [id, setid] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [gender, setGender] = useState("");
  const [hometown, setHomeTown] = useState("");

  // -----------------------------------------------------------------------

  //? Adding new Teacher data...

  function addNewData() {
    //? whenever the input field changes the value will be update by using onChange event...
    //? After that we have to create a new object and update the values in (key:value) pairs...
    const newTeacherData = {
      id,
      firstname,
      lastname,
      subject,
      email,
      gender,
      hometown,
    };
    //? After that we have to spread the Teacher_data and add the new object...
    setTeacher_data([...Teacher_data, newTeacherData]);

    setid("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setGender("");
    setHomeTown("");

    history.push("/TeacherDetails");
  }

  return (
    <div className="student-container">
      <div className="student-input-area">
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          {/* -----------------------------------------------------------------------        */}
          <div className="text-area">
            {/* First Name */}
            <TextField
              required
              fullWidth
              label="Enter your FirstName"
              id="fullWidth"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className="account-circle" />
                  </InputAdornment>
                ),
              }}
              //whenever the input field changes this onChange event function is called and
              //(input) is parameter =>if we console means it will return onChange event's property=>(value will be object)
              //In that onChange property => target is one of the property (the value is input field)
              //In that target property  => value is one of the property (the value is input field value)
              onChange={(input) => setFirstName(input.target.value)}
              value={firstname}
              type="text"
            />
            {/* Last Name */}
            <TextField
              required
              fullWidth
              label="Enter your LastName"
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className="account-circle" />
                  </InputAdornment>
                ),
              }}
              onChange={(input) => setLastName(input.target.value)}
              value={lastname}
              type="text"
              variant="filled"
            />
          </div>
          {/* -----------------------------------------------------------------------        */}

          <div className="text-area">
            {/* ID */}

            <TextField
              required
              fullWidth
              label="Enter the id"
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NumbersIcon className="account-circle" />
                  </InputAdornment>
                ),
              }}
              onChange={(input) => setid(input.target.value)}
              value={id}
              variant="filled"
              type="number"
            />
            {/* Email */}
            <TextField
              required
              fullWidth
              label="Enter the Email"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined className="account-circle" />
                  </InputAdornment>
                ),
              }}
              onChange={(input) => setEmail(input.target.value)}
              value={email}
              variant="filled"
              id="outlined-required fullWidth"
            />
          </div>

          {/* -----------------------------------------------------------------------        */}

          <div className="text-area">
            {/*subject  */}
            <TextField
              required
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BatchPredictionIcon className="account-circle" />
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="Enter your subject"
              onChange={(input) => setSubject(input.target.value)}
              value={subject}
              variant="filled"
              type="text"
            />
            {/* Gender */}
            <TextField
              required
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WcIcon className="account-circle" />
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="Enter your Gender"
              onChange={(input) => setGender(input.target.value)}
              value={gender}
              variant="filled"
              type="text"
            />
          </div>
          {/* -----------------------------------------------------------------------        */}
          <div className="text-area">
            {/* HomeTown */}
            <TextField
              required
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CabinIcon className="account-circle" />
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="Enter your HomeTown"
              onChange={(input) => setHomeTown(input.target.value)}
              value={hometown}
              variant="filled"
            />
          </div>

          {/* -----------------------------------------------------------------------        */}
        </Box>

        <Button
          variant="contained"
          size="large"
          className="add-btn"
          onClick={() => addNewData()}
        >
          ADD DATA
        </Button>
      </div>
    </div>
  );
}

export default AddTeacherData;
