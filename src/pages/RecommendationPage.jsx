
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Collapse, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const tasks = [
  {
    title: "Clarity on Reference Data",
    description: "Discuss and finalize the reference data requirements.",
  },
  {
    title: "Password Encryption",
    description: "Implement secure password encryption for user accounts.",
  },
  {
    title: "Calendar Component - Check 100 yrs??",
    description: "Ensure the calendar component supports a 100-year range.",
  },
];

function RecommendationPage() {
  const [taskList, setTaskList] = useState(tasks);
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [rewardPoints, setRewardPoints] = useState(0);
  const [expandedTask, setExpandedTask] = useState(null); // Track which task is expanded
  const [dialogOpen, setDialogOpen] = useState(false); // Track dialog visibility
  const [dialogMessage, setDialogMessage] = useState(''); // Message for the dialog

  const handleTaskCompletion = (title) => {
    if (!completedTasks.has(title)) {
      const updatedCompletedTasks = new Set(completedTasks);
      updatedCompletedTasks.add(title);
      setCompletedTasks(updatedCompletedTasks);

      // Move the completed task to the bottom of the list
      const updatedTaskList = taskList.filter((task) => task.title !== title);
      const completedTask = taskList.find((task) => task.title === title);
      updatedTaskList.push(completedTask);
      setTaskList(updatedTaskList);

      // Update reward points and show dialog
      const newPoints = rewardPoints + 10;
      setRewardPoints(newPoints);
      setDialogMessage(`Hurray, you completed the task, you have earned 10 reward points!\nTotal points = ${newPoints}`);
      setDialogOpen(true);
    }
  };

  const toggleExpand = (title) => {
    setExpandedTask((prev) => (prev === title ? null : title)); // Toggle the expanded state
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
  };

  return (
    <Box
      sx={{
        margin: '20px 60px',
        backgroundColor: '#ffcbb794',
        borderRadius: '20px',
        // minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        fontFamily: "'Poppins', sans-serif", // Set Poppins font globally
      }}
    >
      
      {taskList.map((task) => (
        <Card
        key={task.title}
        onClick={() => toggleExpand(task.title)} // Toggle expand on card click
        sx={{
          width: {
            xs: '90%', 
            sm: '80%', 
            md: '70%', 
          },
          maxWidth: '1200px', 
          padding: '16px',
          borderRadius: '12px', // Rounded edges
          backgroundColor: completedTasks.has(task.title)
            ? '#f3e5f5'  // Light Salmon with transparency when completed
            : '#f3e5f5', // Light Salmon with transparency
          textDecoration: completedTasks.has(task.title) ? 'line-through' : 'none',
          opacity: completedTasks.has(task.title) ? 0.6 : 1,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: completedTasks.has(task.title)
              ? '#f3e5f5'
              : '#eac5ef', 
          },
          marginBottom: '16px',
          margin: '16px', // Add margin for spacing
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow effect
          backdropFilter: 'blur(5px)', // Blurred effect for a glassy look
        }}
      >
      
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between', // Space between title and button
                alignItems: 'center', // Align items vertically
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Poppins font for title
                  color: '#333',
                }}
              >
                {task.title}
              </Typography>
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click from toggling when button is clicked
                  handleTaskCompletion(task.title);
                }}
                disabled={completedTasks.has(task.title)}
                sx={{
                  backgroundColor: '#6A0DAD',
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif", // Poppins font for button
                  padding: '8px 16px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#8552AC',
                  },
                  '&:disabled': {
                    backgroundColor: '#ccc',
                    color: '#999',
                  },
                }}
              >
                {completedTasks.has(task.title) ? 'Completed' : 'Mark as Done'}
              </Button>
            </Box>
            <Collapse in={expandedTask === task.title}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Poppins font for description
                  color: '#666',
                  marginTop: '16px',
                }}
              >
                {task.description}
              </Typography>
            </Collapse>
          </CardContent>
        </Card>
      ))}

      {/* Dialog Component */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle sx={{ textAlign: 'center', fontFamily: "'Poppins', sans-serif", color: '#6A0DAD' }}>
          🎉 Task Completed! 🎉
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: '#333',
              textAlign: 'center',
              marginBottom: '16px',
              fontSize: '18px',
            }}
          >
            Hurray! You just completed a task and earned <strong>10 reward points</strong>! 🏆
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: '#6A0DAD',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            🎯 Total Points: {rewardPoints}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '16px',
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png" // Example graphic
              alt="Celebration"
              style={{ width: '100px', height: '100px' }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            sx={{
              backgroundColor: '#6A0DAD',
              color: '#fff',
              fontFamily: "'Poppins', sans-serif", // Poppins font for button
              padding: '8px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#8552AC',
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

export default RecommendationPage;