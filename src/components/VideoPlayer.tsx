'use client';

interface Props {
  videoId: string;
  title?: string;
}

export default function VideoPlayer({ videoId, title }: Props) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .video-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 */
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          margin: 28px 0;
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        .video-wrap iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }
      `}} />
      <div className="video-wrap">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || 'Kursvideo'}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
}
