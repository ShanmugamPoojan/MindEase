import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Slide,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ArticlesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const cardsPerSlide = 3;

  const articles = [
    {
      title: "5 Effective Ways to Manage Stress",
      description:
        "Discover simple and practical techniques to manage stress .",
      image: "stress.png",
      link: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/5-tips-to-manage-stress",
    },
    {
      title: "How Mindfulness Can Reduce Stress",
      description:
        "Learn how mindfulness techniques can help you stay calm and stress-free.",
      image: "mindfullness.png",
      link: "https://www.mindful.org/how-to-practice-mindfulness/",
    },
    {
      title: "The Role of Exercise in Stress Relief",
      description:
        "Find out how to get started Regular physical activity to manage stress. ",
      image: "exercise.png",
      link: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/exercise-and-stress/art-20044469",
    },
    {
      title: "How  Healthy Diet Reduces Stress",
      description:
        "Discover how proper nutrition help to reduce stress levels.",
      image: "food.png",
      link: "https://www.webmd.com/diet/ss/slideshow-diet-for-stress-management",
    },
    {
      title: "The Link Between Sleep and Stress",
      description:
        "Good sleep is essential for mental health. Learn how to improve your sleep quality.",
      image: "sleep.png",
      link: "https://www.medicalnewstoday.com/articles/322994#sleep-deprivation-effects",
    },
    {
      title: "Breathing Techniques for Stress Relief",
      description:
        "Try these simple yet powerful breathing exercises to quickly relax your mind.",
      image: "breathing.png",
      link: "https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques",
    },
    {
      title: "Time Management Strategies to Reduce Stress",
      description:
        "Learn how managing your time effectively can help you prevent stress and burnout.",
      image: "time.png",
      link: "https://www.impactfactory.com/resources/how-time-management-can-help-reduce-stress/",
    },
    {
      title: "How Laughter Can Help Reduce Stress",
      description:
        "Laughing triggers positive emotions and can be a great stress reliever.",
      image: "laughing.png",
      link: "https://www.verywellmind.com/exercise-for-stress-relief-3145084",
    },
    {
      title: "Spending Time in Nature to Reduce Stress",
      description:
        "Being outdoors can significantly improve your mood and lower stress levels.",
      image: "nature.png",
      link: "https://www.heart.org/en/healthy-living/healthy-lifestyle/stress-management/spend-time-in-nature-to-reduce-stress-and-anxiety",
    },
  ];

  const totalSlides = Math.ceil(articles.length / cardsPerSlide);

  const handleNext = () => {
    setSlideDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section style={{ padding: "10px", textAlign: "center", position: "relative", backgroundColor: "#ffcbb794", borderRadius:"20px" }}>
      
      <div>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
          Latest Articles on Stress Management
        </h2>
        <p style={{ marginBottom: "40px", fontSize: "16px", color: "#555" }}>
          Discover tips and techniques to reduce stress and improve your mental health.
        </p>

      </div>

      {/* Carousel Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Left Navigation Button */}
        <Button
          sx={{
            position: "absolute",
            left: 0,
            height: "50%",
            width: "60px",
            backgroundColor: "#6a0dad89",
            color: "white",
            borderRadius: "40px",
            "&:hover": { backgroundColor: "#6A0DAD" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handlePrev}
        >
          <ArrowBackIos sx={{ fontSize: "24px" }} />
        </Button>

        {/* Slide Section */}
        <Box
          sx={{
            width: "80%",
            overflow: "hidden",
            position: "relative",
            height: "450px",
          }}
        >
          <Slide direction={slideDirection} in={true} timeout={500}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {articles
                .slice(currentIndex * cardsPerSlide, (currentIndex + 1) * cardsPerSlide)
                .map((article, index) => (
                  <Card
                    key={index}
                    sx={{
                      width: "400px",
                      // height: "400px",
                      margin: "0 10px",
                      boxShadow: 3,
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={article.image}
                      alt={article.title}
                      sx={{ borderRadius: "4px", objectFit: "cover", objectPosition: "top" }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "200px",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                        {article.description}
                      </Typography>
                      <Button
                        href={article.link}
                        target="_blank"
                        sx={{
                          mt: "auto", // Pushes the button to the bottom
                          backgroundColor: "#6A0DAD",
                          color: "white",
                          "&:hover": { backgroundColor: "#540A91" },
                        }}
                        variant="contained"
                      >
                        Read More
                      </Button>
                    </CardContent>

                  </Card>
                ))}
            </Box>
          </Slide>
        </Box>

        {/* Right Navigation Button */}
        <Button
          sx={{
            position: "absolute",
            right: 0,
            height: "50%",
            width: "60px",
            backgroundColor: "#6a0dad89",
            color: "white",
            borderRadius: "40px",
            "&:hover": { backgroundColor: "#6A0DAD" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleNext}
        >
          <ArrowForwardIos sx={{ fontSize: "24px" }} />
        </Button>
      </Box>

      {/* Navigation Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {[...Array(totalSlides)].map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              minWidth: "10px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              margin: "0 5px",
              backgroundColor: index === currentIndex ? "#6A0DAD" : "grey.400",
              "&:hover": { backgroundColor: "#540A91" },
            }}
          />
        ))}
      </Box>
    </section>
  );
};

export default ArticlesCarousel;
