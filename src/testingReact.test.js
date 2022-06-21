import { render, screen, act } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import PostSection from './components/PostSection/view';
import userEvent from '@testing-library/user-event';
import axios from 'axios'

test('render test query dom', () => {
    render (<App />);
    const textElement = screen.getByTestId("testing");
    expect(textElement).toBeInTheDocument();
})

test('render user action case title', async () => {
    const titleText = "title"
    render (<PostSection />);

    const input = screen.getByTestId("test-title");
    userEvent.type(input, titleText);
    const textElement = await screen.findByText("Title: " + titleText);
    expect(textElement).toBeInTheDocument();

})

test('render user action case description', async () => {

    const descText = "description"
    render (<PostSection />);

    const input2 = screen.getByTestId("test-desc");
    userEvent.type(input2, descText);
    const textElement2 = await screen.findByText("Description: " + descText);
    expect(textElement2).toBeInTheDocument();
})

jest.mock('axios');

const testText = "kue kering";
const errorText = "error";
const mockResponse = {
    data: {
        name: testText
    }
}

const mockError = {
    data: null,
    message: errorText
}

test('renders name', async () => {
    await act(async () => {
        await axios.create.mockImplementationOnce(() => Promise.resolve(mockResponse));
        render(<formatResponse />);
    })
    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
})

test('handle error', async () => {
    await act(async () => {
        await axios.create.mockImplementationOnce(() => Promise.reject(mockError));
        render(<formatResponse />);
    });
    const textElement = screen.getByText(errorText);
    expect(textElement).toBeInTheDocument();
})

