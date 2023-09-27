import React from 'react';
import { Grid } from '@material-ui/core';
import CreateData from './CreateData.js';
import CardList from './CardList.js';
import {useGetClientQuery} from "../services/api";

const AutoCrud = () => {
    const { data } = useGetClientQuery();

    return (
        <Grid container spacing={0}>
            <Grid item ls={6} md={6} sm={12} xs={12}>
                <CreateData />
            </Grid>
            <Grid item ls={6} md={6} sm={12} xs={12}>
                <CardList
                    data={data}
                />
            </Grid>
        </Grid>
    );
}

export default AutoCrud;