document.addEventListener('DOMContentLoaded', function() {
    const replayBtn = document.getElementById('replay-btn');
    
    replayBtn.addEventListener('click', function() {
        // Get all animated divs
        const animatedDivs = document.querySelectorAll('[class^="div"]');
        
        // Remove animation classes
        animatedDivs.forEach(div => {
            div.style.animation = 'none';
            // Trigger reflow
            void div.offsetWidth;
        });
        
        // Reapply animations with delays
        animatedDivs.forEach((div, index) => {
            setTimeout(() => {
                div.style.animation = `move 2s forwards`;
            }, index * 2000);
        });
    });
});
