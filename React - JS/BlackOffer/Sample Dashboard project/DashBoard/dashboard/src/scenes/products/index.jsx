import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery} from "state/api";
import state from "state";


const Products = () => {
    const { data , isLoading } = useGetProductsQuery();
    console.log("data" ,data);
    
  return (
    <Box>
        <Header title="PRODUCTS" subtitle="See your List of Products /" />
    </Box>
  )
}

export default Products