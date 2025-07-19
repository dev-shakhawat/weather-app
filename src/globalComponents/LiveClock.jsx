import React, { useState, useEffect } from 'react';

export default function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // প্রতি ১ সেকেন্ডে আপডেট

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formattedTime = currentTime.toLocaleString('en-US', {  
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="  ">
      {formattedTime}
    </div>
  );
}
