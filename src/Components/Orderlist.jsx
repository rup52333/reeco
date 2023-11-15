
import React,{useState} from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import {Grid,Typography,styled,Button} from '@mui/material';
import { EmojiNature, LocalBar } from '@mui/icons-material';
import Allproducts from "./Allproduct.jsx"

const UnderlinedText = styled('span')({
  textDecoration: 'underline',
});
const OrderList = () => {
  const orders = useSelector((state) => state.orders);
  const [isOrderApproved, setOrderApproved] = useState(false);

  const handleApproveOrder = () => {
    // Your logic to approve the order
    // After approving, set the state to true
    setOrderApproved(true);
  };

  return (
    <div>
    <Box  sx={{
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '16px',
            marginTop: '20px',
          }}>
    <Grid container spacing={2}>
        {/* First Grid */}
        <Grid item xs={8} >
      
        <Grid item xs={12} sx={{marginLeft:'50px'}}>
        <Typography sx={{ fontSize: '12px' }} >
              Orders &gt; <UnderlinedText>Order32457ABC</UnderlinedText>
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{marginLeft:'50px'}}>
        <Typography variant="h6" >
        Order32457ABC
            </Typography>
        </Grid>
        </Grid>
        {/* Second Grid */}

        <Grid item xs={2} >
        {!isOrderApproved && (
            <Button variant="outlined" color="primary" sx={{ marginLeft: '60%', textTransform: 'capitalize' }}>
              Back
            </Button>
          )}
        </Grid>
        <Grid item xs={2}>
          {/* Conditionally render the "Approve Order" button only if the order is not approved */}
          {!isOrderApproved && (
            <Button variant="contained" color="success" sx={{ textTransform: 'capitalize' }} onClick={handleApproveOrder}>
              Approve Order
            </Button>
          )}
          {/* Conditionally render the "Add Item" button only if the order is approved */}
          {isOrderApproved && (
            <Button variant="contained" color="success" sx={{ textTransform: 'capitalize' }}>
              Add Item
            </Button>
          )}
          </Grid>
        
      </Grid>
    </Box>
   <Box           sx={{  backgroundColor: 'white',
            
            padding: '16px',
            marginTop: '20px',            border: '1px solid #ddd', marginLeft:'70px',marginRight:'70px'}}>

<Grid container spacing={2}>
        {/* First Grid */}
        <Grid item xs={2}  >

        <Box x={{sfontSize: '8px', fontWeight: 'bold'}} >Supliers</Box>
         <div>
         <Typography sx={{fontSize: '15px', fontWeight: 'bold' }}>
         East coast fruits and vegitables
         </Typography>
         </div>
          </Grid>
        <Grid item xs={2} >
        <Box x={{sfontSize: '8px', fontWeight: 'bold'}} >Shipping Date</Box>
         <div>
         <Typography sx={{fontSize: '15px', fontWeight: 'bold' }}>
         Thu, Feb 10
         </Typography>
         </div>
          </Grid>
        <Grid item xs={2} >
        <Box x={{sfontSize: '8px', fontWeight: 'bold'}} >Total</Box>
         <div>
         <Typography sx={{fontSize: '15px', fontWeight: 'bold' }}>
        $15,028.3
         </Typography>
         </div>
          </Grid>
        <Grid item xs={2} >
        <Box x={{sfontSize: '8px', fontWeight: 'bold'}} >Category</Box>
         <div>
         <EmojiNature sx={{ fontSize: 20, marginRight: 2 }} />
         <LocalBar sx={{ fontSize: 20, marginRight: 2 }} />
         </div>
          </Grid>
        <Grid item xs={2} >
        <Box x={{sfontSize: '8px', fontWeight: 'bold'}} >Department</Box>
         <div>
         <Typography sx={{fontSize: '15px', fontWeight: 'bold' }}>
        300-444-678
         </Typography>
         </div>
          </Grid>
        <Grid item xs={2} >
        <Box x={{sfontSize: '8px', fontWeight: 'bold'}} >Status</Box>
         <div>
         <Typography sx={{fontSize: '15px', fontWeight: 'bold' }}>
          Awating your approvel
         </Typography>
         </div>
          </Grid>
          
          </Grid>



   </Box>
   <Box   sx={{  backgroundColor: 'white',
            
            padding: '16px',
            marginTop: '20px',            border: '1px solid #ddd', marginLeft:'70px',marginRight:'70px'}}>
   <Allproducts/>

    </Box>
   
    

    </div>
  );
};

export default OrderList;