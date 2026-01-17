import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../Context/Context";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Grid,
} from "@mui/material";

function PhyForm() {
  const { phyFormData, setPhysFormData } = useGlobalState();
  const [name, setName] = useState(phyFormData.name || "");
  const [email, setEmail] = useState(phyFormData.email || "");
  const [phone, setPhone] = useState(phyFormData.phone || "");
  const [address, setAddress] = useState(phyFormData.address || "");
  const [course, setCourse] = useState(phyFormData.course || "");
  const [laptop, setLaptop] = useState(phyFormData.laptop || "No");
  const [proficiency, setProficiency] = useState(phyFormData.proficiency || "Beginner");
  const [qualification, setQualification] = useState(phyFormData.qualification || "");
  const [dob, setDob] = useState(phyFormData.dob || "");
  const [country, setCountry] = useState(phyFormData.country || "");
  const [city, setCity] = useState(phyFormData.city || "");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});

  // Avoid setting state unnecessarily on every input change
  useEffect(() => {
    setPhysFormData({ name, email, phone, address, course, laptop, proficiency, qualification, dob, country, city });
  }, [name, email, phone, address, course, laptop, proficiency, qualification, dob, country, city]);

  // Fetch countries only once
  useEffect(() => {
    if (!countries.length) {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          const countryList = data.map((c) => c.name.common).sort();
          setCountries(countryList);
        })
        .catch((err) => console.error("Error fetching countries:", err));
    }
  }, [countries]);

  // Fetch cities based on country selection
  useEffect(() => {
    if (country) {
      fetch(`https://countriesnow.space/api/v0.1/countries/cities`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country }),
      })
        .then((res) => res.json())
        .then((data) => setCities(data.data || []))
        .catch((err) => console.error("Error fetching cities:", err));
    }
  }, [country]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!address) newErrors.address = "Address is required";
    if (!course) newErrors.course = "Course selection is required";
    if (!qualification) newErrors.qualification = "Qualification is required";
    if (!dob) newErrors.dob = "Date of Birth is required";
    if (!country) newErrors.country = "Country selection is required";
    if (!city) newErrors.city = "City selection is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Physical Class Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth error={!!errors.course}>
            <InputLabel>Select Course</InputLabel>
            <Select value={course} onChange={(e) => setCourse(e.target.value)}>
              <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
              <MenuItem value="Amazon">Amazon</MenuItem>
              <MenuItem value="Shopify">Shopify</MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="E-commernce">E-commernce</MenuItem>
            </Select>
            {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={!!errors.address}
            helperText={errors.address}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Do you have a Laptop?</InputLabel>
            <Select value={laptop} onChange={(e) => setLaptop(e.target.value)}>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Computer Proficiency</InputLabel>
            <Select value={proficiency} onChange={(e) => setProficiency(e.target.value)}>
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Last Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            error={!!errors.qualification}
            helperText={errors.qualification}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Date of Birth"
            InputLabelProps={{ shrink: true }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            error={!!errors.dob}
            helperText={errors.dob}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select value={country} onChange={(e) => setCountry(e.target.value)} error={!!errors.country}>
              {countries.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
            {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>City</InputLabel>
            <Select value={city} onChange={(e) => setCity(e.target.value)} disabled={!cities.length} error={!!errors.city}>
              {cities.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
            {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
          </FormControl>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={!!errors.city}
            helperText={errors.city}
          />
            {/* {errors.city && <p style={{ color: "red" }}>{errors.city}</p>} */}
        </Grid>
      </Grid>
    </>
  );
}

export default PhyForm;
