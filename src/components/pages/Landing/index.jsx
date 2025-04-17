import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div>
      <div className='flex justify-center gap-8 w-full'>
        <div className='w-1/4 h-auto'>
          <img src={barGraph} alt='bar-graph' className='w-full h-full' />
          <p>Search Grant Rates By Office</p>
        </div>
        <div className='w-1/4 h-auto'>
          <img src={pieChart} alt='pie-chart' className='w-full h-full' />
          <p>Search Grant Rates By Nationality</p>
        </div>
        <div className='w-1/4 h-auto'>
          <img src={lineGraph} alt='line-graph' className='w-full h-full' />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>
      {/* <img src={paperStack} alt='paper-stack' className='w-1/4 h-auto mx-auto mt-4' /> */}
      Landing Page
      <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
    </div>
  );
};
