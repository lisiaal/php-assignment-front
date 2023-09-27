import React from "react";
import {IconButton} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDeleteClientMutation } from "../services/api";
import Modal from '@mui/material/Modal';
import CreateData from './CreateData.js';


const CardList = ( data ) => {
    const [deleteClient] = useDeleteClientMutation();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [client, setClient] = React.useState(null);

    const handleOpen = (row) => {
        setClient(row);
        setOpen(true);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 150,
            editable: true,
        },
        { field: 'actions', 
           headerName: 'Actions', 
           width: 400, 
           renderCell: (params) => {
            return (
                <div>
                    <IconButton
                    aria-label="Update"
                    onClick={() => handleOpen(params.row)}
                    >
                    <EditOutlined />
                    </IconButton>
                    <IconButton
                    aria-label="Delete"
                    onClick={() => deleteClient(params.row.id)}
                    >
                    <DeleteOutlined />
                    </IconButton>
                </div>
            );
          } }
      ];

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    return (
    <Box sx={{ height: 400, width: '100%' }}>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateData data={client} />
        </Box>
      </Modal>
        <DataGrid
            rows={data.data ?? []}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
    </Box>
        );
};

export default CardList;