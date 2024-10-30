
import React from 'react';
import { Box, Typography, TextField, List, ListItem, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
      {/* Search Widget */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search properties"
          sx={{ marginBottom: '1em' }}
        />
      </Box>

      {/* Category Widget with Accordion for Mobile */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>Category 1</ListItem>
            <ListItem>Category 2</ListItem>
            <ListItem>Category 3</ListItem>
            <ListItem>Category 4</ListItem>
            <ListItem>Category 5</ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
