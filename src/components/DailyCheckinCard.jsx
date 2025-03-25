import React, { useState } from 'react';

import { Card, CardContent, Typography, Grid, Box, Slider } from '@mui/material';

const moods = [
  { emoji: '😢', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😴', label: 'Tired' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '🤔', label: 'Thoughtful' },
  { emoji: '😎', label: 'Cool' },
  { emoji: '😀', label: 'Happy' },
];

function DailyCheckinCard() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [sliderValue, setSliderValue] = useState(3); // Default to 'Neutral'

  const handleMoodClick = (mood, index) => {
    setSelectedMood(mood);
    setSliderValue(index);
  };

  const handleSliderChange = (event, value) => {
    setSliderValue(value);
    setSelectedMood(moods[value]);
  };

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        borderRadius: '16px',
        boxShadow: 'none',
        padding: '32px',
        width: '65%',
        margin: 'auto',
      }}
    >
      <CardContent>

        <Grid container spacing={4} justifyContent="space-between">
          {moods.map((mood, index) => (
            <Grid item key={mood.label} sx={{ textAlign: 'center', flex: '1' }}>
              <Box
                onClick={() => handleMoodClick(mood, index)}
                sx={{
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor:
                    selectedMood?.label === mood.label ? '#F8F8F8' : 'transparent',
                  border:
                    selectedMood?.label === mood.label
                      ? '3px solid #5353D1'
                      : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow:
                    selectedMood?.label === mood.label
                      ? '0 6px 12px rgba(83, 83, 209, 0.5)'
                      : 'none',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    boxShadow: '0 6px 12px rgba(83, 83, 209, 0.3)',
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: selectedMood?.label === mood.label ? '64px' : '56px',
                    transition: 'font-size 0.2s ease-in-out',
                  }}
                >
                  {mood.emoji}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'black', 
                  marginTop: '12px',
                  textAlign: 'center',
                  fontFamily: "'Winky Sans', sans-serif",
                  fontWeight: selectedMood?.label === mood.label ? 'bold' : 'normal', // Bold for selected mood
                }}
              >
                {mood.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
        
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          step={1}
          min={0}
          max={moods.length - 1}
          sx={{
            marginTop: '16px',
            color: '#5353D1',
            '& .MuiSlider-track': {
              height: '6px',
            },
            '& .MuiSlider-thumb': {
              width: '20px',
              height: '20px',
              backgroundColor: '#5353D1',
            },
          }}
        />
         <Typography
          variant="h4"
          component="h2"
          sx={{
            color: 'black',
            textAlign: 'center',
            marginBottom: '24px',
            fontFamily: "'Mali', cursive", 
            fontWeight: 700,
            fontStyle: 'normal',
          }}
        >
          {selectedMood ? `I am ${selectedMood.label}` : "How's your mood today?"}
        </Typography>
        {selectedMood && (
          <Box
            sx={{
              textAlign: 'center',
              // marginTop: '24px',
              fontFamily: "'Winky Sans', sans-serif",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '96px', // Increased size for the emoji
                display: 'block',
                // margin: '16px 0',
              }}
            >
              {selectedMood.emoji}
            </Typography>
          </Box>
        )}
       
      </CardContent>
    </Card>

  );
}

export default DailyCheckinCard;