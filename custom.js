const lines = document.querySelectorAll('.typewriter');
        const line1 = document.getElementById('line1'); // Placeholder for Line 1
        const texts = [
            "I specialize in Full-stack Django Development.",
            "I have a strong expertise in Data Analysis.",
            "I'm dedicated to mastering Data Science, ML, and AI."
        ];
        let currentIndex = 0;

        function typeWriter(line, text) {
            line.textContent = ''; // Clear the existing text
            let charIndex = 0;
        
            function type() {
                if (charIndex < text.length) {
                    line.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 50);
                }
            }
        
            type();
        }

        function cycleLines() {
            typeWriter(line1, texts[currentIndex]);
            currentIndex = (currentIndex + 1) % texts.length;
        }

        // Start the cycling of lines
        cycleLines();
        setInterval(cycleLines, 4000); // Change lines every 4 seconds
