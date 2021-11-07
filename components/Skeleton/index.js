import React from 'react'

export default function Skeleton ({ classes = [], rounded = 'none', height = '50px', width = 'full' }) {
  return (
    <>
      <div className={'skeleton ' + classes.join(' ') }></div>
      <style jsx>{`
        .skeleton {
          height: ${height};
          width: ${width};
          border-radius: ${rounded};
          background-color: #a5a5a5;
          animation: skeleton-animation 1.8s infinite linear;
        }

        @keyframes skeleton-animation {
          0% {
            opacity: 0.2;
          }
        
          50% {
            opacity: 0.5;
          }
        
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </>
  )
}
