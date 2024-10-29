// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, TextField, List, ListItem } from '@mui/material';

const Sidebar = () => {
    return (
        <Box sx={{ padding: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
            {/* Search Widget */}
            <Box sx={{ mb: 3 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search"
                    sx={{ marginBottom: '1em' }}
                />
            </Box>

            {/* Category Widget */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Category
                </Typography>
                <List>
                    <ListItem>Category 1</ListItem>
                    <ListItem>Category 2</ListItem>
                    <ListItem>Category 3</ListItem>
                    <ListItem>Category 4</ListItem>
                    <ListItem>Category 5</ListItem>
                </List>
            </Box>

            {/* Additional Widgets with Placeholder Titles */}
            {[...Array(4)].map((_, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Title
                    </Typography>
                    <Box sx={{ paddingLeft: 1, color: 'text.secondary' }}>
                        {/* Placeholder for widget content */}
                        <Typography variant="body2">Additional content here</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Sidebar;