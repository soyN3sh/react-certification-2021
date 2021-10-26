import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DescriptionAccordion = ({ description }) => {
  return (
    <div>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body2" color="textSecondary" component="p">
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DescriptionAccordion;
