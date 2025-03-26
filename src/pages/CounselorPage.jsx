import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Collapse, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const counselors = [
  {
    name: "Dr. John Doe",
    expertise: ["Mental Health", "Stress Management", "Career Counseling"],
  },
  {
    name: "Dr. Jane Smith",
    expertise: ["Mental Health", "Depression", "Conflict Resolution"],
  },
  {
    name: "Dr. Emily Johnson",
    expertise: ["Anxiety Disorders", "Depression", "Mindfulness Training"],
  },
];

function CounselorPage() {
  const [expandedCounselor, setExpandedCounselor] = useState(null); // Track which counselor's card is expanded
  const [appointmentOption, setAppointmentOption] = useState({}); // Track selected appointment option for each counselor
  const [bookedAppointments, setBookedAppointments] = useState({}); // Track booked appointments
  const [dialogOpen, setDialogOpen] = useState(false); // Track dialog visibility
  const [dialogMessage, setDialogMessage] = useState(''); // Message for the dialog

  const toggleExpand = (name) => {
    setExpandedCounselor((prev) => (prev === name ? null : name)); // Toggle the expanded state
  };

  const handleOptionSelect = (name, option) => {
    setAppointmentOption((prev) => ({ ...prev, [name]: option })); // Update selected option for the counselor
  };

  const handleBookAppointment = (name) => {
    if (appointmentOption[name]) {
      setBookedAppointments((prev) => ({ ...prev, [name]: true })); // Mark the appointment as booked
      setDialogMessage(`Your appointment for ${appointmentOption[name]} with ${name} has been successfully booked!`);
      setDialogOpen(true); // Open the dialog
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: '24px',
          fontFamily: "'Poppins', sans-serif",
          color: '#FF6F61', // Deep Purple
        }}
      >
        Counselors
      </Typography>
      {counselors.map((counselor) => (
        <Card
          key={counselor.name}
          onClick={() => toggleExpand(counselor.name)} // Toggle expand on card click
          sx={{
            width: {
              xs: '90%', // 90% width for extra-small screens (mobile)
              sm: '80%', // 80% width for small screens (tablets)
              md: '70%', // 70% width for medium screens and above (desktops)
            },
            maxWidth: '1200px',
            padding: '16px',
            borderRadius: '12px',
            backgroundColor: '#ffcbb7b0', // Cards background
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#FF6F61', // Hover effect
            },
            marginBottom: '16px',
            cursor: 'pointer',
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#333',
                }}
              >
                {counselor.name}
              </Typography>
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click from toggling when button is clicked
                  toggleExpand(counselor.name); // Open the accordion for appointment options
                }}
                sx={{
                  backgroundColor: '#FFA07A', // Deep Purple
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                  padding: '8px 16px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#FF6F61', // Hover effect
                  },
                }}
              >
                {bookedAppointments[counselor.name] ? 'Booked' : 'Book Appointment'}
              </Button>
            </Box>
            <Collapse in={expandedCounselor === counselor.name}>
              <Box
                sx={{
                  textAlign: 'left',
                  marginLeft: '16px',
                  marginTop: '16px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#666',
                    marginBottom: '8px',
                  }}
                >
                  Key Areas of Expertise:
                </Typography>
                <ul>
                  {counselor.expertise.map((area, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#333',
                        marginBottom: '4px',
                      }}
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <Box
                  sx={{
                    marginTop: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <Button
                    variant={appointmentOption[counselor.name] === 'in-person' ? 'contained' : 'outlined'}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleOptionSelect(counselor.name, 'in-person');
                    }}
                    sx={{
                      backgroundColor: appointmentOption[counselor.name] === 'in-person' ? '#FFA07A' : '#fff',
                      color: appointmentOption[counselor.name] === 'in-person' ? '#fff' : '#FFA07A',
                      fontFamily: "'Poppins', sans-serif",
                      border: '1px solid #FFA07A',
                      '&:hover': {
                        backgroundColor: '#FF6F61',
                        color: '#fff',
                      },
                    }}
                  >
                    In-Person
                  </Button>
                  <Button
                    variant={appointmentOption[counselor.name] === 'zoom' ? 'contained' : 'outlined'}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleOptionSelect(counselor.name, 'zoom');
                    }}
                    sx={{
                      backgroundColor: appointmentOption[counselor.name] === 'zoom' ? '#FFA07A' : '#fff',
                      color: appointmentOption[counselor.name] === 'zoom' ? '#fff' : '#FFA07A',
                      fontFamily: "'Poppins', sans-serif",
                      border: '1px solid #FFA07A',
                      '&:hover': {
                        backgroundColor: '#FF6F61',
                        color: '#fff',
                      },
                    }}
                  >
                    Zoom
                  </Button>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleBookAppointment(counselor.name);
                    }}
                    disabled={!appointmentOption[counselor.name]} // Disable if no option is selected
                    sx={{
                      backgroundColor: appointmentOption[counselor.name] ? '#FFA07A' : '#ccc',
                      color: appointmentOption[counselor.name] ? '#fff' : '#999',
                      fontFamily: "'Poppins', sans-serif",
                      padding: '8px 16px',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: appointmentOption[counselor.name] ? '#FF6F61' : '#ccc',
                      },
                    }}
                  >
                    Confirm Appointment
                  </Button>
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      ))}
      {/* Dialog Component */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle sx={{ fontFamily: "'Poppins', sans-serif", color: '#FF6F61' }}>
          Appointment Booked
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: '#333',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            {dialogMessage}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            sx={{
              backgroundColor: '#FFA07A',
              color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              padding: '8px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#FF6F61',
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CounselorPage;