import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import { useCreateClientMutation, useUpdateClientMutation } from "../services/api";

const CreateData = (data) => {
    const [createClient] = useCreateClientMutation();
    const [updateClient] = useUpdateClientMutation();

    const createSchema = Yup.object().shape({
        name: Yup.string()
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string(),
        clientId: Yup.string()
          .required('Required'),
        comment: Yup.string()
        .max(1000, 'Too Long!')
        .required('Required'),
      });

    const updateSchema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email('Invalid email'),
      phone: Yup.string(),
    });

    return (
        <Grid container>
        <Grid item sm={3} xs={false}></Grid>
        <Grid item sm={6} xs={12}>
          <Paper>
            <Box m={5} p={3}>
              {!data.data ? 
              (<Typography variant="h5">Create New</Typography>)
            :
              (<Typography variant="h5">Update Client</Typography>)
            }
            <Formik
            initialValues={{ email: data.data?.email ?? '', name: data.data?.name ?? '', phone: data.data?.phone ?? '', clientId: '', comment: '' }}
            validationSchema={data.data ? updateSchema : createSchema}
             onSubmit={(values) => {
                setTimeout(() => {
                !data.data ? createClient(JSON.stringify(values, null, 2)) : updateClient(data.data?.id, JSON.stringify(values, null, 2));
                }, 400);
            }}
            >
            {({
                errors,
                touched,
            }) => (
                <Form>
                    <Field
                      as={TextField}
                      label="Name"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="name" />}
                      error={errors.name && touched.name}
                    />
                    {!data.data ? (
                    <Field
                      as={TextField}
                      label="Client"
                      name="clientId"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="clientId" />}
                      error={errors.clientId && touched.clientId}
                    />) : null}
                    <Field
                      as={TextField}
                      label="Email"
                      name="email"
                      type="email"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="email" />}
                      error={errors.email && touched.email}
                    />
                    <Field
                      as={TextField}
                      label="Phone"
                      name="phone"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="phone" />}
                      error={errors.phone && touched.phone}
                    />
                    {!data.data ? (
                    <Field
                      as={TextField}
                      label="Comment"
                      name="comment"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="comment" />}
                      error={errors.comment && touched.comment}
                    />) : null}
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                </Form>
            )}
            </Formik>
            </Box>
            </Paper>
            </Grid>
            
            </Grid>
    );
};

export default CreateData;