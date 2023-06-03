import type { NextPage } from 'next'
import { Alert, AlertTitle, AppBar, Autocomplete, Box, Button, Container, Grid, IconButton, Paper, Stack, TextField, Toolbar, Typography, styled } from '@mui/material'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Form, Formik } from 'formik'
import api from '../services/axiosConfig'
import { initialForm } from '../interface'
import { validationForm } from '../validation'
import MyTextField from '../components/MyTextField';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { AxiosError } from 'axios'

const initialValues = {
  gender: '',
  age: '',
  BPMeds: '',
  prevalentHyp: '',
  diabetes: '',
  sysBP: '',
  diaBP: '',
  BMI: '',
  height: '',
  weight: ''
};

const GENDER_OPTIONS = [
  { label: 'Male', id: 0 },
  { label: 'Female', id: 1 },
];

const PREVALENTSTROKE_OPTIONS = [
  { label: 'Yes', id: 1 },
  { label: 'No', id: 0 },
];

const BDMEDS_OPTIONS = [
  { label: 'Yes', id: 1 },
  { label: 'No', id: 0 },
];
const HYPERTENSION_OPTIONS = [
  { label: 'Yes', id: 1 },
  { label: 'No', id: 0 },
];

const DIABETES_OPTIONS = [
  { label: 'Yes', id: 1 },
  { label: 'No', id: 0 },
];

const PREDICT_URL = '/predict'

function calculateBMI(weight: number, height: number): string {

  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters)
  const roundedBMI = Math.round(bmi * 100) / 100

  return roundedBMI.toString();
}

const Home: NextPage = (props) => {
  const [errMsg, setErrMsg] = useState<string>('')
  const [predictValue, setPredictValue] = useState<string>('')

  async function handleSubmit(values: initialForm) {
    setErrMsg('')
    setPredictValue('')

    values.BMI = calculateBMI(Number(values.weight), Number(values.height))

    try {
      const response = await api.post(PREDICT_URL, JSON.stringify(values), {
        headers: { 'Content-Type': 'application/json' },
      })
      setPredictValue(response.data.predictions[0])
    } catch (error) {
      if (!error) {
        setErrMsg('No sever response')
      }
      if (error instanceof AxiosError) {
        setErrMsg(error.message)
      }
    }
  }

  return (
    <Container maxWidth={false} disableGutters={true}>
      <AppBar position="static" sx={{ backgroundColor: '#F8F8F8' }}>
        <Toolbar >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MonitorHeartIcon color='primary' fontSize="large" />
          </IconButton>
          <Typography variant="h6" color="black" component="div">
            Predicting heart diseases
          </Typography>
        </Toolbar>
      </AppBar>
      {errMsg ? <Alert severity='error'>{errMsg}</Alert> : null}
      <Container maxWidth={false} sx={{ marginTop: "1rem" }}>
        <Typography variant="h3" color="black" component="div">
          Personal Information
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationForm} validateOnBlur={false}>
          {(formik) => {
            return (
              <Form noValidate
                id='info-form'
                onSubmit={formik.handleSubmit}
                style={{ width: '100%' }}
              >
                <Grid container spacing={5} >
                  <Grid item xs={4}>
                    <Stack spacing={2}>
                      <Autocomplete
                        disablePortal
                        options={GENDER_OPTIONS}
                        getOptionLabel={(option) => option.label}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            required
                            id='gender'
                            label="Gender"
                            value={formik.values.gender}
                            error={Boolean(formik.errors.gender) && formik.touched.gender}
                            helperText={formik.touched.gender ? formik.errors.gender : null}

                          />
                        )}
                        onChange={(e, newValue) => {
                          formik.setFieldValue('gender', newValue ? newValue.id : ''); // Save the id value to formik values
                        }}
                      />
                      <MyTextField
                        required
                        id='age'
                        label='Age'
                        placeholder='Enter your age here '
                        name={'age'} />

                      <MyTextField
                        required
                        placeholder='Input your height (cm)'
                        label='Height'
                        name={'height'} />

                      <MyTextField
                        required
                        placeholder='Input your weight (kg)'
                        label='Weight'
                        name={'weight'} />

                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack spacing={2}>

                      <Autocomplete
                        disablePortal
                        options={HYPERTENSION_OPTIONS}
                        getOptionLabel={(option) => option.label}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <MyTextField
                            {...params}
                            required
                            label='Has Hypertension'
                            name={'prevalentHyp'} />
                        )}
                        onChange={(e, newValue) => {
                          formik.setFieldValue('prevalentHyp', newValue ? newValue.id : ''); // Save the id value to formik values
                        }}
                      />

                      <Autocomplete
                        disablePortal
                        options={BDMEDS_OPTIONS}
                        getOptionLabel={(option) => option.label}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <MyTextField
                            {...params}
                            required
                            id='BPMeds'
                            label='Blood Pressure Medications'
                            name={'BPMeds'} />
                        )}
                        onChange={(e, newValue) => {
                          formik.setFieldValue('BPMeds', newValue ? newValue.id : ''); // Save the id value to formik values
                        }}
                      />

                      <Autocomplete
                        disablePortal
                        options={DIABETES_OPTIONS}
                        getOptionLabel={(option) => option.label}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <MyTextField
                            {...params}
                            required
                            label='Has Diabetes'
                            name={'diabetes'} />
                        )}
                        onChange={(e, newValue) => {
                          formik.setFieldValue('diabetes', newValue ? newValue.id : ''); // Save the id value to formik values
                        }}
                      />

                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack spacing={2}>
                      <MyTextField
                        required
                        id='sysBP'
                        label='Systolic Blood Pressure'
                        name='sysBP'
                      />

                      <MyTextField
                        required
                        id='diaBP'
                        label='Diastolic Blood Pressure'
                        name='diaBP'
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <LoadingButton type='submit'
                  loading={formik.isSubmitting}
                  sx={{ marginTop: "10px" }}
                  variant="outlined">Predict</LoadingButton >
              </Form>
            )
          }}
        </Formik>
      </Container>
      {predictValue == '0' ? (<Alert severity="success" sx={{ mt: 2 }}>
        <AlertTitle>Chúc mừng</AlertTitle>
        Bạn không có nguy cơ bị bệnh tim — <strong>Hãy tiếp tục sống khỏe!</strong>
      </Alert>) : null}
      {predictValue == '1' ? (<Alert severity="warning" sx={{ mt: 2 }}>
        <AlertTitle>Cảnh báo</AlertTitle>
        Bạn có nguy cơ bệnh tim — <strong>Hãy đi khám bệnh trong thời gian sớm nhất!</strong>
      </Alert>) : null}
    </Container>
  )
}

export default Home
