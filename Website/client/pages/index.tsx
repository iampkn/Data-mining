import type { NextPage } from 'next'
import { Alert, AlertTitle, AppBar, Autocomplete, Box, Button, Container, Grid, IconButton, Paper, Stack, TextField, Toolbar, Typography, styled } from '@mui/material'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Form, Formik, useFormik } from 'formik'
import api from '../services/axiosConfig'
import { initialForm } from '../interface'
import { validationForm } from '../validation'
import MyTextField from '../components/MyTextField';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { AxiosError } from 'axios'

const initialValues = {
  gender: '',
  age: '',
  education: '',
  currentSmoker: '0',
  cigsPerDay: '',
  BPMeds: '',
  prevalentStroke: '',
  prevalentHyp: '',
  diabetes: '',
  totChol: '',
  sysBP: '',
  diaBP: '',
  BMI: '',
  heartRate: '',
  glucose: '',
};

const GENDER_OPTIONS = [
  { label: 'Male', id: 0 },
  { label: 'Female', id: 1 },
];

const EDUCATION_OPTIONS = [
  { label: 'Uneducated', id: 0 },
  { label: 'Primary School', id: 2 },
  { label: 'Graduate', id: 3 },
  { label: 'Post Graduate', id: 4 },
  { label: 'Don\'t know', id: 1 }
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

const Home: NextPage = (props) => {
  const [errMsg, setErrMsg] = useState<string>('')
  const [predictValue, setPredictValue] = useState<string>('')

  async function handleSubmit(values: initialForm) {
    setErrMsg('')
    setPredictValue('')

    if (parseInt(values.cigsPerDay) > 0) {
      values.currentSmoker = '1'
    }

    try {
      const response = await api.post(PREDICT_URL, JSON.stringify(values), {
        headers: { 'Content-Type': 'application/json' },
      })
      console.log('predict value', response.data)
      setPredictValue(response.data.predictions[0])
    } catch (error) {
      if (!error) {
        setErrMsg('No sever response')
      }
      if (error instanceof AxiosError) {
        setErrMsg(error.response?.data.message)
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
                          margin='normal'
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
                    <Autocomplete
                      disablePortal
                      options={EDUCATION_OPTIONS}
                      getOptionLabel={(option) => option.label}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          required
                          id='education'
                          label="Education"
                          value={formik.values.education}
                          error={Boolean(formik.errors.education) && formik.touched.education}
                          helperText={formik.touched.education ? formik.errors.education : null}
                          margin='normal'
                        />
                      )}
                      onChange={(e, newValue) => {
                        formik.setFieldValue('education', newValue ? newValue.id : ''); // Save the id value to formik values
                      }}
                    />
                    <Autocomplete
                      disablePortal
                      options={PREVALENTSTROKE_OPTIONS}
                      getOptionLabel={(option) => option.label}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          required
                          id='prevalentStroke'
                          label="Prevalent Stroke"
                          value={formik.values.prevalentStroke}
                          error={Boolean(formik.errors.prevalentStroke) && formik.touched.prevalentStroke}
                          helperText={formik.touched.prevalentStroke ? formik.errors.prevalentStroke : null}
                          margin='normal'
                        />
                      )}
                      onChange={(e, newValue) => {
                        formik.setFieldValue('prevalentStroke', newValue ? newValue.id : ''); // Save the id value to formik values
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

                  </Grid>
                  <Grid item xs={4}>
                    <Stack spacing={2}>
                      <MyTextField
                        required
                        label='Cigarette per day'
                        placeholder='Type 0 if you dont smoke'
                        name={'cigsPerDay'} />

                      <MyTextField
                        required
                        label='Body Mass Index (BMI)'
                        name={'BMI'} />

                      <MyTextField
                        required
                        label='Total Cholesterol'
                        name='totChol'
                      />

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

                      <MyTextField
                        required
                        label='Heart Rate'
                        name='heartRate'
                      />

                      <MyTextField
                        required
                        label='Glucose'
                        name='glucose'
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
