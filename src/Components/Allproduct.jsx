import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { approveProduct, markProductUrgent,markProductMissing, selectProducts } from '../features/productSlice';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;


  
const Allproducts=()=>{
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  // State for the dialog
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedProductId, setSelectedProductId] = React.useState(null);

  const handleApprove = (productId) => {
    dispatch(approveProduct({ productId }));
  };

  const handleMarkUrgent = (productId) => {
    setSelectedProductId(productId);
    setOpenDialog(true);
    
    
  };

  const handleDialogClose = () => {
    
    dispatch(markProductMissing({ productId: selectedProductId }));
    setOpenDialog(false);

  };

  const handleMarkUrgentConfirmed = () => {
    
    dispatch(markProductUrgent({ productId: selectedProductId }));
    setOpenDialog(false);
    
  };
  
  const getStatusColor = (status) => {
    if (status === 'Approved') {
      return 'green';
    } else if (status === 'Missing-Urgent') {
      return 'red';
    } else if (status==="Missing"){
      return 'orange';
    }
    else{
      return 'white'
    }
  };
return(
  <>
<StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Product name</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                    
                    <TableCell >
              Status
            </TableCell>

                </THead>
            </TableHead>
            <TableBody>
                {products.map((product) => (
                    <TRow key={product.id}>
                        <TableCell>{product.productName}</TableCell>
                        <TableCell>{product.brand}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.total}</TableCell>
                        
                        <TableCell style={{ background: getStatusColor(product.status) }}>{product.status}</TableCell>
                        
                        <TableCell>

                            <Button  startIcon={<DoneIcon />} onClick={() => handleApprove(product.id)}>
                            
                            </Button>
                            <Button   startIcon={<CloseIcon  />} onClick={() => handleMarkUrgent(product.id)}>
                            
                            </Button>
                            <Button variant="contained" style={{ marginRight: 10 }}>
                                Edit
                            </Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        {/* Dialog for confirmation */}
      <Dialog open={openDialog} onClose={handleDialogClose}>

        <DialogContent>
          Are you sure you want to mark this product as Urgent?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>No</Button>
          <Button onClick={handleMarkUrgentConfirmed}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </>
)



}

export default Allproducts;
