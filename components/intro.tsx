import React from 'react';

const IntroPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Intro Page!</h1>
            <video src="/intro video.mp4" controls loop />
        </div>
    );
};

export default IntroPage;