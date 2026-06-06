import Box from '@mui/material/Box';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        borderRadius: 1,
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
}