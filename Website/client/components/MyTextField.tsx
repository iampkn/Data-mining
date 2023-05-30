import { FormHelperText, TextField } from '@mui/material'
import { FastField, FastFieldProps } from 'formik'
import React from 'react'

type Props = {
    name: string
    [key: string]: any
}
const MyTextField = ({ name, ...otherProps }: Props) => {
    return (
        <FastField name={name}>
            {({ field, form, meta }: FastFieldProps<any>) => (
                <>
                    <TextField {...otherProps} {...field} error={Boolean(meta.error && meta.touched)} />
                    {meta.touched && meta.error ? (
                        <FormHelperText error sx={{ marginTop: '0px' }}>
                            {meta.error}
                        </FormHelperText>
                    ) : null}
                </>
            )}
        </FastField>
    )
}

export default MyTextField