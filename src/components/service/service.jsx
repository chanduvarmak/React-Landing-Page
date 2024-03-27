import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../service/service.css'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { toast, ToastContainer } from 'react-toastify';
export function Service() {
    const [details, setDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [newDetail, setNewDetail] = useState({ name: '', description: '' });
    const [openDialog, setOpenDialog] = useState(false);
    const [editDetailId, setEditDetailId] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/details');
            setDetails(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredDetails = details.filter(detail =>
        detail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditDetailId(null);
        setNewDetail({ name: '', description: '' }); // Reset newDetail state
    };
    const handleAdd = async () => {
        try {
            if (!newDetail.name || !newDetail.description) {
                toast.error('Please provide both name and description.');
                return;
            }

            await axios.post('http://localhost:5000/details', newDetail);
            fetchData();
            handleCloseDialog(); // Close dialog after adding
            toast.success('Detail added successfully!');
        } catch (error) {
            console.error('Error adding detail:', error);
        }
    };
    const handleEdit = async (id) => {
        const detailToEdit = details.find(detail => detail.id === id);
        if (detailToEdit) {
            setNewDetail(detailToEdit);
            setEditDetailId(id);
            setOpenDialog(true);
        }
    };
    const handleUpdate = async () => {
        try {
            console.log('Updating detail with ID:', editDetailId);
            console.log('New detail:', newDetail);
            await axios.put(`http://localhost:5000/details/${editDetailId}`, newDetail);
            fetchData();
            handleCloseDialog(); // Close dialog after updating
            toast.success('Detail updated successfully!');
        } catch (error) {
            console.error('Error updating detail:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log('Deleting detail with ID:', id);
            await axios.delete(`http://localhost:5000/details/${id}`);
            fetchData();
            toast.success('Detail deleted successfully!');
        } catch (error) {
            console.error('Error deleting detail:', error);
        }
    };

    return (
        <>
            {/* <section>
                <div className="service-head flex-col">
                    <h1>Service component works!</h1>
                </div>
            </section> */}

            <section>
                <ToastContainer />
                <div className="service-head flex-col">
                    <h1>Service component works!</h1>
                    <div className="search-container">
                        <input
                            type="search"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            autoFocus
                        />
                        {/* <span>Total Details: {details.length}</span> */}
                    </div>
                    <div className="add-container">
                        <Tooltip title="To Add click this 'ADD'" placement="right">
                            <Button variant="outlined" onClick={() => setOpenDialog(true)} data-tip="Tooltip content">Add</Button>
                        </Tooltip>
                        <Dialog open={openDialog} onClose={handleCloseDialog}>
                            <DialogTitle>{editDetailId ? "Edit Detail" : "Add New Detail"}</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    fullWidth
                                    value={newDetail.name}
                                    onChange={(e) => setNewDetail({ ...newDetail, name: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    id="description"
                                    label="Description"
                                    fullWidth
                                    value={newDetail.description}
                                    onChange={(e) => setNewDetail({ ...newDetail, description: e.target.value })}
                                />
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleCloseDialog}>Cancel</Button>
                                {editDetailId ? (
                                    <Button onClick={handleUpdate}>Update</Button>
                                ) : (
                                    <Button onClick={handleAdd}>Add</Button>
                                )}
                            </DialogActions>

                        </Dialog>

                    </div>
                    <ul className="details-list">
                        {filteredDetails.map(detail => (
                            <li key={detail.id}>
                                <strong>{detail.name}</strong>: {detail.description}
                                <div className="action-buttons">
                                    <button onClick={() => handleEdit(detail.id)}>Edit</button>
                                    <button onClick={() => handleDelete(detail.id)}>Delete</button>
                                </div>
                            </li>

                        ))}
                    </ul>
                </div>

            </section>

        </>
    );
};
export default Service;