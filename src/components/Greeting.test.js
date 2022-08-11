import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders Hello World as a text', () => {
		render(<Greeting />); //arrange
		//act tu brak
		const helloWorldElement = screen.getByText('Hello World', { exact: false });
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders good to see you if the button was not clicked', () => {
		render(<Greeting />);
		const outputElement = screen.getByText('good to see you', { exact: false });
		expect(outputElement).toBeInTheDocument();
	});

	test('render changed if the button was clicked', () => {
		render(<Greeting />);
		const button = screen.getByRole('button');
		userEvent.click(button);

		const outputElement = screen.getByText('changed', { exact: false });
		expect(outputElement).toBeInTheDocument();
	});
});
