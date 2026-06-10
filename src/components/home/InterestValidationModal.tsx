'use client';

import CustomModal from '@/layouts/CustomModal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

interface InterestValidationModalProps {
  open: boolean;
  onClose: () => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TRAINING_BACKGROUNDS = [
  'No formal training',
  'Hindustani classical',
  'Carnatic classical',
  'Bollywood/Playback style',
  'Western contemporary',
  'Mixed',
  'Not sure',
];

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Not sure'];

const AGE_GROUPS = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'];

export default function InterestValidationModal({ open, onClose }: InterestValidationModalProps) {
  const [email, setEmail] = useState('');
  const [painPoints, setPainPoints] = useState('');
  const [trainingBackground, setTrainingBackground] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setEmail('');
      setPainPoints('');
      setTrainingBackground([]);
      setSkillLevel('');
      setAgeGroup('');
      setEmailError('');
      setSubmitted(false);
    }
  }, [open]);

  const handleTrainingBackgroundChange = (value: string) => {
    setTrainingBackground((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Submit to Google Forms
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdrD28M_NcuvK_LdhiS230x93Du48JMbKM48cREhX0A_sfTFg/formResponse';
    const EMAIL_ENTRY_ID = 'entry.1475293724';
    const BIGGEST_CHALLENGE_ENTRY_ID = 'entry.253988511';
    const SINGING_BACKGROUND_ENTRY_ID = 'entry.1132863463';
    const CURRENT_LEVEL_ENTRY_ID = 'entry.783695172';
    const AGE_GROUP_ENTRY_ID = 'entry.323643964';
    // Reference: https://docs.google.com/forms/d/e/1FAIpQLSdrD28M_NcuvK_LdhiS230x93Du48JMbKM48cREhX0A_sfTFg/viewform?usp=pp_url&entry.1475293724=email@gmail.com&entry.253988511=Everything&entry.1132863463=Hindustani+classical&entry.1132863463=Bollywood/Playback+style&entry.1132863463=Mixed&entry.783695172=Intermediate&entry.323643964=35-44

    const formData = new FormData();
    formData.append(EMAIL_ENTRY_ID, email);
    formData.append(BIGGEST_CHALLENGE_ENTRY_ID, painPoints);
    trainingBackground.forEach((background) => formData.append(SINGING_BACKGROUND_ENTRY_ID, background));
    // formData.append(SINGING_BACKGROUND_ENTRY_ID, trainingBackground.join(', '));
    formData.append(CURRENT_LEVEL_ENTRY_ID, skillLevel);
    formData.append(AGE_GROUP_ENTRY_ID, ageGroup);

    try {
      // Fire and forget - no-cors means we can't read the response
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      // Track successful signup
      /* trackEvent('early_access_signup', {
        intent: selectedIntent
      }); */

      // Only proceed to confirmation if fetch completed successfully
      setSubmitted(true);
    } catch (error) {
      // Only catches network failures (offline, DNS, etc.)
      console.error('Failed to submit early access signup:', error);
      setEmailError('Network error. Please check your connection and try again.');
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <CustomModal open={open} onClose={handleClose} maxWidth={480}>
      <Box sx={{ p: 3, width: '100%', maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Thanks for joining.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5, lineHeight: 1.6 }}>
              I’m building this one step at a time, and your signup helps me know this is worth building.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
              I’ll share updates as I learn and build.
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', flex: 1 }}>
            {/* Header */}
            <Box sx={{ mb: 2, flexShrink: 0 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Help me decide whether to build gaayak.org
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                I can only build gaayak.org if enough people find value in it. If this resonates with you, your signup genuinely helps me decide whether to keep going.
              </Typography> */}
            </Box>

            {/* Scrollable Form Fields */}
            <Box sx={{ flex: 1, overflowY: 'auto', pr: 1, mb: 2, minHeight: 0 }}>
              {/* Email (Required) */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, mb: 0.5 }}>
                  Your Email{' '}
                  <Typography component="span" sx={{ color: 'error.main', fontWeight: 600 }}>
                    *
                  </Typography>
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError('');
                  }}
                  error={!!emailError}
                  helperText={emailError || 'I\'ll only use this to send updates about gaayak.org. No spam. You can opt out anytime.'}
                  size="small"
                />
              </Box>

              {/* Pain Points (Optional) */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, mb: 0.5 }}>
                  What's the biggest challenge you face in singing?{' '}
                  <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                    (optional)
                  </Typography>
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Pitch issues, tone, range, breathing, confidence, lack of structure, anything else."
                  value={painPoints}
                  onChange={(event) => setPainPoints(event.target.value)}
                  multiline
                  minRows={2}
                  size="small"
                />
                <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 0.5 }}>
                  Your answer helps me decide what to build first.
                </Typography>
              </Box>

              {/* Training Background (Optional) */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, mb: 1 }}>
                  Your Singing Background{' '}
                  <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                    (optional)
                  </Typography>
                </Typography>
                <FormGroup>
                  {TRAINING_BACKGROUNDS.map((background) => (
                    <FormControlLabel
                      key={background}
                      control={
                        <Checkbox
                          checked={trainingBackground.includes(background)}
                          onChange={() => handleTrainingBackgroundChange(background)}
                          size="small"
                        />
                      }
                      label={<Typography sx={{ fontSize: '0.875rem' }}>{background}</Typography>}
                    />
                  ))}
                </FormGroup>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 0.5 }}>
                  This helps me understand who I'm building for.
                </Typography>
              </Box>

              {/* Skill Level (Optional) */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, mb: 1 }}>
                  How would you describe your current level?{' '}
                  <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                    (optional)
                  </Typography>
                </Typography>
                <RadioGroup
                  value={skillLevel}
                  onChange={(event) => setSkillLevel(event.target.value)}
                >
                  {SKILL_LEVELS.map((level) => (
                    <FormControlLabel
                      key={level}
                      value={level}
                      control={<Radio size="small" />}
                      label={<Typography sx={{ fontSize: '0.875rem' }}>{level}</Typography>}
                    />
                  ))}
                </RadioGroup>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 0.5 }}>
                  This helps me design content that actually fits people's needs.
                </Typography>
              </Box>

              {/* Age Group (Optional) */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, mb: 1 }}>
                  Age Group{' '}
                  <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                    (optional)
                  </Typography>
                </Typography>
                <Select
                  fullWidth
                  value={ageGroup}
                  onChange={(event) => setAgeGroup(event.target.value)}
                  displayEmpty
                  size="small"
                >
                  <MenuItem value="">
                    <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>Select an age group</Typography>
                  </MenuItem>
                  {AGE_GROUPS.map((group) => (
                    <MenuItem key={group} value={group}>
                      {group}
                    </MenuItem>
                  ))}
                </Select>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 0.5 }}>
                  I ask this only because late-starters often have different needs.
                </Typography>
              </Box>
            </Box>

            {/* Fixed Footer with Button */}
            <Box sx={{ flexShrink: 0 }}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleSubmit}
                sx={{ py: 1.5, fontWeight: 600, textTransform: 'none', mb: 1 }}
              >
                Join the Journey
              </Button>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', textAlign: 'center' }}>
                You can opt out anytime.
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </CustomModal>
  );
}
