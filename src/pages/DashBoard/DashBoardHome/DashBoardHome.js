import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";
const DashBoardHome = () => {
    const [date, setDate] = useState(new Date());
    return (
            <Grid container spacing={2}>
          <Grid item xs={8} sm={5}>
            <Calendar
            date={date}
            setDate={setDate}
            ></Calendar>
          </Grid>
          <Grid item xs={4} sm={7}>
            <Appointments
            date={date}
            ></Appointments>
          </Grid>
        </Grid>
    );
};

export default DashBoardHome;