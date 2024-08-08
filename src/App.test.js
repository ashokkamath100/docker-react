import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// for running this test suite we use 'npm run test'. 
// rather than creating a separate service to run the test suite
// we can run 
// docker exec -it [container_id] npm run test
// after doing
// docker-compose up 
// this allows us to take advantage of the 
// volumes that were set up in our docker-compose.yml file
// which is not exploited when we simply run the image with 
// npm run test 
// the whole point of this is that whenever we update our
// test suite, the running container will actually reflect 
// the changes to our test suite without us having to 
// rebuild the image 
// this isn't the best solution since we have to remember a lot of steps
// docker attach command allows us attach current terminal to the stdin,stdout,stderr
// of the primary process running in the container 
// to forward input from terminal directly to stdin of the container

// when we run docker attach, we always attach to the primary process of the container 
// which is the container with the PID of 1 
// however, when we run a command with npm, npm may create a separate process
// to which we want to attach, but that's just not possible with docker attach