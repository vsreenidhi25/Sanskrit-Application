'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

// Define a type for video entries
interface Video {
  url: string; // Full YouTube URL
  title: string; // Video title
}

// Video data organized by language
const videoData = {
  telugu: [
    { url: 'https://youtu.be/OoTLOovj9JY?si=RYO7ix7l0AGqkBmB', title: 'Sanskrit Lesson 1' },
    { url: 'https://youtu.be/jabx0n_1r6s?si=Nufk4Bh_c7hd3w0a', title: 'Sanskrit Lesson 2' },
  ],
  hindi: [
    { url: 'https://www.youtube.com/watch?v=xyz7890hijk', title: 'Hindi Lesson 1' },
    { url: 'https://www.youtube.com/watch?v=lmn4567opqr', title: 'Hindi Lesson 2' },
  ],
};

// Function to extract video ID from URL
const getVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : '';
};

// Function to get thumbnail URL from video ID
const getThumbnailUrl = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const VideosPage = () => {
  // Use useEffect to add dynamic styles on the client side
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      .video-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
      .video-card:hover .thumbnail {
        transform: scale(1.05);
      }
      .video-card:hover .play-icon {
        opacity: 1;
      }
    `;
    document.head.appendChild(styleSheet);

    // Cleanup: Remove the stylesheet when the component unmounts
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Sanskrit Learning Videos</h1>

      {/* Telugu Section */}
      <section style={styles.section}>
        <h2 className="section-title" style={styles.sectionTitle}>
          Telugu Videos
        </h2>
        <div style={styles.videoGrid}>
          {videoData.telugu.map((video, index) => {
            const videoId = getVideoId(video.url);
            return (
              <Link
                key={index}
                href={video.url}
                target="_blank"
                className="video-card"
                style={styles.videoCard}
              >
                <div style={styles.thumbnailWrapper}>
                  <img
                    src={getThumbnailUrl(videoId)}
                    alt={video.title}
                    className="thumbnail"
                    style={styles.thumbnail}
                  />
                  <div className="play-icon" style={styles.playIcon}>
                    ▶
                  </div>
                </div>
                <p style={styles.videoTitle}>{video.title}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Hindi Section */}
      <section style={styles.section}>
        <h2 className="section-title" style={styles.sectionTitle}>
          Hindi Videos
        </h2>
        <div style={styles.videoGrid}>
          {videoData.hindi.map((video, index) => {
            const videoId = getVideoId(video.url);
            return (
              <Link
                key={index}
                href={video.url}
                target="_blank"
                className="video-card"
                style={styles.videoCard}
              >
                <div style={styles.thumbnailWrapper}>
                  <img
                    src={getThumbnailUrl(videoId)}
                    alt={video.title}
                    className="thumbnail"
                    style={styles.thumbnail}
                  />
                  <div className="play-icon" style={styles.playIcon}>
                    ▶
                  </div>
                </div>
                <p style={styles.videoTitle}>{video.title}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// Updated styles with creative aesthetics
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '30px',
    background: 'linear-gradient(135deg, #fff5e6 0%, #f0eaff 100%)', // Soft peach to lavender gradient
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  pageTitle: {
    fontSize: '2.5em',
    color: '#6b4e31', // Warm brown for a scholarly feel
    fontFamily: "'Georgia', serif", // Elegant font for Sanskrit theme
    textAlign: 'center' as const,
    marginBottom: '40px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)', // Subtle text shadow
    borderBottom: '3px solid #ffb3b3', // Soft coral underline
    paddingBottom: '10px',
    width: 'fit-content',
    margin: '0 auto 40px',
  },
  section: {
    marginBottom: '50px',
    padding: '20px',
    backgroundColor: '#fefaf6', // Creamy off-white background
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)', // Light shadow for section
  },
  sectionTitle: {
    fontSize: '1.8em',
    color: '#8e6b4f', // Warm brown for section titles
    fontFamily: "'Georgia', serif",
    marginBottom: '25px',
    paddingBottom: '8px',
    borderBottom: '2px solid #e6d7ff', // Light lavender underline
    position: 'relative' as const,
    display: 'inline-block',
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '25px',
  },
  videoCard: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#fff1e6', // Soft peach background for cards
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)', // Light shadow for cards
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  thumbnailWrapper: {
    position: 'relative' as const,
    width: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
  },
  playIcon: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2em',
    color: '#fff',
    backgroundColor: 'rgba(255, 179, 179, 0.7)', // Soft coral overlay
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  videoTitle: {
    fontSize: '1.1em',
    textAlign: 'center' as const,
    color: '#4a3c31', // Darker brown for titles
    fontFamily: "'Arial', sans-serif",
    margin: '10px 0 0',
    padding: '5px 0',
  },
};

export default VideosPage;