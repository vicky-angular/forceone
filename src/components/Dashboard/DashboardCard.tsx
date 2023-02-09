import React, { useEffect, useState } from "react";
import {Box, Card, CardBody, CardFooter, CardHeader, Grid, Text} from "grommet";
import axios from 'axios';
const DashboardCard = () => {
   const [contacts, getContacts] = useState<any[]>([]);
   const getCustomersData = () => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((data) => {
            getContacts(data.data);
        })
        .catch(error => console.log(error));
        };
        
        useEffect (() => {
            getCustomersData();
        }, []);
    return (
        <div>
    <Grid
      columns="medium"
      rows="small"
      gap="medium"
      pad="medium"
    >
    {contacts.map((item, index) =>
    <Card pad="large" background="dark-1">
      <CardHeader>{item.name}</CardHeader>
      <CardBody>{item.email}</CardBody>
      <CardFooter>{item.id}</CardFooter>
    </Card>
    )}
        </Grid>
        </div>
    );
};

export {DashboardCard};