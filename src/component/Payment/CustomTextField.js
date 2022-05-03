import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <>
          <Controller
             control={control}
             name={name}
             render = {({ field})=> (
                 <TextField
                     fullWidth
                     label={label}
                     required
                 />
             )}
          />
    </>
  );
  }

export default FormInput;