import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  handle?: string;  // Optional social media handle
}

// Type for available social networks
export type SocialNetwork = 'youtube' | 'linkedin' | 'x' | 'pinterest';

// Record of social links indexed by network name
export const socialLinks: Record<SocialNetwork, SocialLink> = {
  youtube: {
    href: "https://www.youtube.com/@CourseCorrectfyi",
    label: "YouTube",
    icon: <YouTubeIcon />,
    handle: "@CourseCorrectfyi"
  },
  linkedin: {
    href: "https://www.linkedin.com/company/coursecorrectfyi",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  x: {
    href: "https://x.com/CoursecorrectX",
    label: "X",
    icon: <XIcon />,
    handle: "@CoursecorrectX"
  },
  pinterest: {
    href: "https://ca.pinterest.com/coursecorrectfyi",
    label: "Pinterest",
    icon: <PinterestIcon />,
    handle: "@coursecorrectfyi"
  }
};

export const socialLinksOrdered = [socialLinks.youtube, socialLinks.linkedin, socialLinks.x, socialLinks.pinterest];
